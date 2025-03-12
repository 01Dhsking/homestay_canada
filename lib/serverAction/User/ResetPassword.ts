"use server"

import { z } from "zod"
import { actionClient } from "@/lib/safe-action"
import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"
import crypto from "crypto"
import { sendResetEmail } from "@/lib/mail" // Vous devrez créer ce service

const prisma = new PrismaClient()

const requestResetSchema = z.object({
  email: z.string().email()
})

const resetSchema = z.object({
  token: z.string(),
  password: z.string().min(8).max(100)
})

export const requestPasswordReset = actionClient
  .schema(requestResetSchema)
  .action(async ({ parsedInput: { email } }) => {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) throw new Error("No user found with this email")

    const token = crypto.randomBytes(32).toString("hex")
    const expires = new Date(Date.now() + 3600000) // 1 hour from now

    await prisma.passwordReset.create({
      data: {
        email,
        token,
        expires
      }
    })

    await sendResetEmail(email, token)

    return { success: true }
  })

export const resetPassword = actionClient
  .schema(resetSchema)
  .action(async ({ parsedInput: { token, password } }) => {
    const reset = await prisma.passwordReset.findFirst({
      where: {
        token,
        expires: { gt: new Date() },
        used: false
      }
    })

    if (!reset) throw new Error("Invalid or expired reset token")

    const hashedPassword = await hash(password, 12)

    await prisma.user.update({
      where: { email: reset.email },
      data: { password: hashedPassword }
    })

    await prisma.passwordReset.update({
      where: { id: reset.id },
      data: { used: true }
    })

    return { success: true }
  })
