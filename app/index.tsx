import { LoadingIndicator } from "@/src/components"
import { useAuthContext } from "@/src/context"
import { Routes } from "@/src/navigation"
import { Redirect } from "expo-router"

export default function Index() {
  const { isLoggedIn, isLoading } = useAuthContext()

  // const redirectRoute = useMemo(() => {
  //   return isLoggedIn ? Routes.APP_DRAWER.route() : Routes.LOGIN.route()
  // }, [isLoggedIn])

  if (isLoading) {
    return <LoadingIndicator />
  }
  const redirectRoute = isLoggedIn ? Routes.HOME.route() : Routes.LOGIN.route()
  return <Redirect href={redirectRoute} />
  // return <View />
}
