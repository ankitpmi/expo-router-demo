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
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name={Routes.LOGIN.path} />
        </Stack.Protected>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name={Routes.TABS.path} />
        </Stack.Protected>
      </Stack>
    </>
  )
}
