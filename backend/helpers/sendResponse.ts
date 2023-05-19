import { Response } from "express"

export const sendResponse = ( res: Response, message: string, status: number, success?:boolean) => {
    return res.status(status).json({message: message, success: success})
}