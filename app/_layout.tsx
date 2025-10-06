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
          {/* Register only the top-level tabs group here. Individual tab
              screens (Home/Search/Profile) live inside app/(main)/(tabs)/_layout.tsx
              and will be registered by that layout. Registering nested files
              at the root causes the "No route named ... exists in nested
              children" warnings. */}
          <Stack.Screen name={Routes.TABS.path} />

          {/* Keep standalone screens that live outside the tabs group */}
          <Stack.Screen name={Routes.HELP_CENTER.path} />
        </Stack.Protected>
      </Stack>
    </>
  )
}
