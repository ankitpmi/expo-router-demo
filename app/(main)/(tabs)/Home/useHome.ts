import { useAuthContext } from "@/src/context"
import { Routes } from "@/src/navigation"
import { useRouter } from "expo-router"
import { useCallback } from "react"

export const useHome = () => {
  const router = useRouter()
  const { logout } = useAuthContext()

  const handleLogout = useCallback(() => {
    logout()
    router.replace(Routes.LOGIN.route())
  }, [logout, router])

  const handleHelpCenter = useCallback(() => {
    router.navigate(Routes.HELP_CENTER.route())
  }, [router])

  return {
    handleLogout,
    handleHelpCenter,
  }
}
