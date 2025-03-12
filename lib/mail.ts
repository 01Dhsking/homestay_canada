import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendResetEmail(email: string, token: string) {
  const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password/${token}`

  await resend.emails.send({
    from: 'noreply@yourdomain.com',
    to: email,
    subject: 'Reset your password',
    html: `
      <h1>Reset your password</h1>
      <p>Click the link below to reset your password:</p>
      <a href="${resetUrl}">${resetUrl}</a>
    `
  })
}
