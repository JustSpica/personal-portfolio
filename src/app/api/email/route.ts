import { NextResponse, type NextRequest } from "next/server"
import { Resend } from "resend"
import * as zod from "zod"

import ContactEmailTemplate from "@/emails/contact"

const resend = new Resend(process.env.RESEND_API_KEY)

const emailFormSchema = zod.object({
  name: zod.string().min(1, { message: "Required" }),
  email: zod.string().optional(),
  subject: zod.string().min(1, { message: "Required" }),
  message: zod.string().min(1, { message: "Required" }),
})

type EmailFormType = zod.infer<typeof emailFormSchema>

interface ResendEmailsResponse {
  id: string
  message?: string
  statusCode?: number
}

export async function POST(req: NextRequest) {
  try {
    const { message, name, subject, email } =
      (await req.json()) as EmailFormType

    const resendData = (await resend.emails.send({
      from: `${name} <personal@${String(process.env.RESEND_DOMAIN_EMAIL)}>`,
      to: [String(process.env.RESEND_PERSONAL_EMAIL)],
      subject: `Email de contato: ${subject}`,
      react: ContactEmailTemplate({
        message,
        name,
        subject,
        email,
      }),
    })) as ResendEmailsResponse

    if (resendData.statusCode && resendData.statusCode !== 200) {
      throw new Error(resendData.message)
    }

    return NextResponse.json(resendData)
  } catch (error) {
    return NextResponse.json({ message: String(error) }, { status: 500 })
  }
}
