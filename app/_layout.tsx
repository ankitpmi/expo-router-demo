import { Stack } from "expo-router"

export default function RootLayout() {
  const isLoggedIn = false

  return (
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
        <Stack.Screen name={"(auth)/Login/index"} />
      </Stack.Protected>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name={"(main)/Home/index"} />
      </Stack.Protected>
    </Stack>
  )
}
