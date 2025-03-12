import { ResetPasswordForm } from "@/components/reset-password-form"

export default function ResetPasswordPage({
  params: { token },
}: {
  params: { token: string }
}) {
  return (
    <div className="container max-w-md mx-auto py-10">
      <ResetPasswordForm token={token} />
    </div>
  )
}
