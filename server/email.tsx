"use server";

import nodemailer from "nodemailer";
import { google } from "googleapis";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;
const redirectUri = process.env.REDIRECT_URI;
const authEmail = process.env.AUTH_EMAIL;
const creatorEmail = process.env.CREATOR_EMAIL;

const oAuth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  redirectUri,
);

oAuth2Client.setCredentials({
  refresh_token: refreshToken,
});

export async function sendMail(formData: FormData) {
  try {
    const name = formData.get("user_name") as string;
    const email = formData.get("user_email") as string;
    const message = formData.get("message") as string;
    const accessToken = (await oAuth2Client.getAccessToken()) as string;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: authEmail,
        clientId,
        clientSecret,
        refreshToken,
        accessToken,
      },
    });

    const template = `
  <html>
  <body>
  <h2>Contact Form Submission</h2>
  <h1><strong>Name :</strong> ${name.toUpperCase()}</h1>
  <p><strong>Email :</strong> ${email}</p>
  <p><strong>Message :</strong></p>
  <p>${message}</p>
  </body>
  </html>
  `;
    const mailOptions: nodemailer.SendMailOptions = {
      from: authEmail,
      to: creatorEmail,
      subject: "Mail from User",
      html: template,
    };

    const send = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully", send);
  } catch (error) {
    return "error while sending mail";
  }
}
