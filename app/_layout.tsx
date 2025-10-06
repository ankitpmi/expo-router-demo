import { AuthProvider, useAuthContext } from "@/src/context"
import { Routes } from "@/src/navigation"
import { Stack } from "expo-router"

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

const AppRoutes = () => {
  const { isLoggedIn } = useAuthContext()

  return (
    <>
      {/* <Stack
        screenOptions={(props) => {
          // console.log("navigation ::: ", props.navigation)
          // console.log("route ::: ", props.route)
          // console.log("theme ::: ", props.theme)
          return {
            headerShown: false,
          }
        }}
      /> */}
      <Stack
        screenOptions={(props) => {
          // console.log("navigation ::: ", props.navigation)
          console.log("route ::: ", props.route)
          // console.log("theme ::: ", props.theme)
          return {
            headerShown: false,
          }
        }}>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name={Routes.LOGIN.path} />
        </Stack.Protected>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name={Routes.HOME.path} />
        </Stack.Protected>
      </Stack>
    </>
  )
}
