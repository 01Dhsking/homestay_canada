"use server"

import { z } from "zod"
import { actionClient } from "@/lib/safe-action"
import { prisma } from "@/lib/prisma"

const updateProfileSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  city: z.string().optional(),
})

export const updateProfile = actionClient
  .schema(updateProfileSchema)
  .action(async ({ parsedInput }) => {
    const user = await prisma.user.update({
      where: { email: parsedInput.email },
      data: {
        name: parsedInput.name,
        phone: parsedInput.phone,
        city: parsedInput.city,
      },
    })

    return { success: true, user }
  })
