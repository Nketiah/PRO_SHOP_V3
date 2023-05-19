import { Response } from "express"
//import { ResponseUser } from "../types"
import { generateToken } from "./generateToken"


export const sendCookieToken = (user: any, res: Response) => {
    const token = generateToken(user.id, "1d")
    const options = {
        //expires: new Date(Date.now() + 60 * 60 * 1000),    1 hour
       //expires: new Date(Date.now() + 30 * 60 * 1000),     30 minutes
      // expires: new Date(Date.now() + 10 * 60 * 1000),     10 minutes
     // expires: new Date(Date.now() + 24 * 60 * 60 * 1000),  1 day
      
     expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
        httpOnly: true,
    }
    
    user.password = undefined
    res.status(200).cookie('token', token, options).json({
        success: true,
        user: { 
            id: user.id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token: token
        }
    })
}