import { useRouter } from "expo-router"
import { useCallback } from "react"

export const useHelpCenter = () => {
  const router = useRouter()

  const goBackHandler = useCallback(() => {
    router.back()
  }, [router])

  return {
    goBackHandler,
  }
}
