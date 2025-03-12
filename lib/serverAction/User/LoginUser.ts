"use server";

import { z } from "zod";
import { actionClient } from "@/lib/safe-action";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

const schema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export const registerUser = actionClient
  .schema(schema)
  .action(async ({ parsedInput: { name, email, password } }) => {
    if (!name || !email || !password) {
      throw new Error("Tous les champs sont requis");
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Cet email est déjà utilisé");
    }

    // Hasher le mot de passe
    const hashedPassword = await hash(password, 12);

    // Créer l'utilisateur
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { success: true, user: { id: user.id, name: user.name, email: user.email } };
  });