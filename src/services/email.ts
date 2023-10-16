interface EmailData {
  subject: string
  name: string
  message: string
  email?: string
}

export async function sendEmail(data: EmailData) {
  try {
    const response = await fetch("/api/email", {
      body: JSON.stringify(data),
      method: "POST",
    })

    return await response.json()
  } catch (error) {
    throw new Error(`an unexpected error happened: ${String(error)}`)
  }
}
