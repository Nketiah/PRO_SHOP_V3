import { NextFunction, Response, Request } from "express"
//import { CreateUserDto } from "../dtos"
import { emailExist } from "../helpers/emailExist"
import { sendCookieToken } from "../helpers/sendCookieToken"
import { validEmail } from "../helpers/validation"
import {prisma} from "../prisma/index"
import bcrypt from "bcryptjs"
import { generateToken } from "../helpers/generateToken"
import { sendMail } from "../helpers/sendMail"
import { validateUsername } from "../helpers/validation"
import jwt from "jsonwebtoken"
//import { UserToken } from "../types"
import { catchException } from "../helpers/errorHandler"
import { sendResponse } from "../helpers/sendResponse"




// @desc    Register user
// @route   POST /api/v1/auth/register
// @access  Public
export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
          const { username, email, password } = req.body as unknown as any //CreateUserDto

        
        if(!username || !email) {
            return next(sendResponse(res, "Please enter your username and email", 400))
        }

        if (!validEmail(email)) {
          return next(sendResponse(res, "Invalid email", 400))
        }

        if(await emailExist(email)) {
            return next(sendResponse(res, "Email already exist", 400))
        }

       
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await prisma.user.create({
            data: {username, email, password: hashedPassword}
        })

        sendCookieToken(user, res)

    } catch (error) {
        catchException(error, res, next)
    }
    
}




// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
export const userLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
         const {email, password} = req.body
         const user = await prisma.user.findUnique({where: {email}})
            if(!user) {
                return next(sendResponse(res, "These credentials do not match our records", 400))
            }
         
        const verifyPassword = await bcrypt.compare(password, user.password)
         if(!verifyPassword) {
            return next(sendResponse(res, "These credentials do not match our records", 400))
         }

      sendCookieToken(user, res)

    } catch (error) {
        catchException(error, res, next)
    }
}



// @desc    Logout user
// @route   GET /api/v1/auth/logout
// @access  Private
export const logout = (req: Request, res: Response) => {
    res.clearCookie('token')
    res.json({success: true})
}

