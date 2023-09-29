import { api } from "@/lib/axios"

interface EmailData {
  subject: string
  name: string
  message: string
  email?: string
}

export async function sendEmail(data: EmailData) {
  try {
    const response = await api.post("/email", data)

    return response
  } catch (error) {
    throw new Error(`an unexpected error happened: ${String(error)}`)
  }
}
