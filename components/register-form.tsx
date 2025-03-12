"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { register } from "@/lib/serverAction/User/Register"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter()
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      phone: formData.get("phone") as string,
      city: formData.get("city") as string,
    }

    try {
      await register(data)
      toast.success("Registration successful")
      router.push("/login")
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-muted-foreground text-sm">
          Enter your details below to create your account
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" type="text" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" type="tel" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city">City (optional)</Label>
          <Input id="city" name="city" type="text" />
        </div>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  )
}
