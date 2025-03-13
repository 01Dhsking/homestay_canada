"use server"

import { prisma } from "@/lib/prisma"

export async function getUserData(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        createdAt: true,
        image: true,
      }
    })

    if (!user) {
      throw new Error("User not found")
    }

    return user
  } catch (error) {
    console.error("Error fetching user data:", error)
    throw new Error("Failed to fetch user data")
  }
}
