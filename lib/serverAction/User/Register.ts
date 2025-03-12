"use server"

import { z } from "zod"
import { actionClient } from "@/lib/safe-action"
import { prisma } from "@/lib/prisma"
import { hash } from "bcrypt"

const registerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(100),
  phone: z.string().optional(),
  city: z.string().optional(),
})

export const register = actionClient
  .schema(registerSchema)
  .action(async ({ parsedInput }) => {
    const existingUser = await prisma.user.findUnique({
      where: { email: parsedInput.email }
    })

    if (existingUser) {
      throw new Error("Email already registered")
    }

    const hashedPassword = await hash(parsedInput.password, 12)

    const user = await prisma.user.create({
      data: {
        ...parsedInput,
        password: hashedPassword,
      }
    })

    return { success: true, userId: user.id }
  })
