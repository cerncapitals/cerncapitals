import { sendPasswordResetEmail } from "firebase/auth";
import { Auth } from "../firebase/config"
import { useState } from "react";


export default function useResetPassword() {
  const [resetMessage, setResetMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [isPending, setIsPending] = useState(false)


  const resetPassword = (email) => {
    setIsPending(true)
    sendPasswordResetEmail(Auth, email)
    .then(() => {
      // Password reset email sent!
      setResetMessage("Check your Mailbox to Reset" )
    })
    .catch((error) => {
      setErrorMessage("A password reset link has been sent to your email.")
    })

    setIsPending(false)
  }

  return {errorMessage, resetMessage, resetPassword, isPending}
}
