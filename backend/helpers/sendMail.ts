import nodemailer from 'nodemailer'
import { EmailProps } from "../types";
import * as handlebars from 'handlebars'



export const sendMail = async (payload: EmailProps) => {
  const { to, name, image, url, subject, template } = payload
  const { SMTP_PORT, SMTP_HOST, SMTP_EMAIL, SMTP_PASSWORD, FROM_EMAIL } = process.env


  let transporter = await nodemailer.createTransport({
    port: Number(SMTP_PORT),
    host: SMTP_HOST,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  })

  // html replacement
  const data = handlebars.compile(template)
  const replacements = {
    name: name,
    image: image,
    url: url,
  }

  const htmlToSend = data(replacements)
  //---------- Verify connection config ----------//
  await new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        console.log("Mail error", error)
        reject(error)
      } else {
        console.log("Server is ready to take our messages", success)
        resolve(success)
      }
    })
  })

  //---------- Send email ----------//
  const options = {
    from: FROM_EMAIL,
    to,
    subject,
    html: htmlToSend,
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(options, (error, info) => {
      if (error) {
        console.log("Mail error", error)
        reject(error)
      } else {
        console.log("Message sent: " + info.response)
        resolve(info)
      }
    })
  })
}