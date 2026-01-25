"use server";

import { ClientMailEmail } from "@/components/template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.NEXT_PUBLIC_AUTHOR_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL;

type Data = {
  name: string;
  email: string;
  message: string;
};

export async function sendEmail(data: Data) {
  try {
    const { name, email, message } = data;

    const res = await resend.emails.send({
      from: FROM_EMAIL!,
      to: [TO_EMAIL!],
      subject: "Client Contact",
      react: ClientMailEmail({ name, email, message }),
    });

    if (res?.error) throw new Error(res?.error?.message);

    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (err) {
    const error = err as Error;
    return {
      success: false,
      message: error?.message,
      error,
    };
  }
}
