import { Routes } from "@/src/navigation"
import { Redirect } from "expo-router"

export default function Index() {
  const isLoggedIn = false

  // return <Redirect href={isLoggedIn ? "/(main)/Home" : "/(auth)/Login"} />
  return <Redirect href={isLoggedIn ? Routes.HOME.path : Routes.LOGIN.path} />
}
