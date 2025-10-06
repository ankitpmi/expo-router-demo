import { LoadingIndicator } from "@/src/components"
import { useAuthContext } from "@/src/context"
import { Routes } from "@/src/navigation"
import { Redirect } from "expo-router"
import { useMemo } from "react"

export default function Index() {
  const { isLoggedIn, isLoading } = useAuthContext()

  const redirectRoute = useMemo(() => {
    return isLoggedIn ? Routes.HOME.route() : Routes.LOGIN.route()
  }, [isLoggedIn])

  if (isLoading) {
    return <LoadingIndicator />
  }

  return <Redirect href={redirectRoute} />
}
