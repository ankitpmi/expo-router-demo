// ...existing code...
import { Routes } from "@/src/navigation"
import { Tabs } from "expo-router"

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name={Routes.HOME.name}
        options={{
          title: "Home",
          // tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name={Routes.PROFILE.name}
        options={{
          title: "Profile",
          // tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name={Routes.SEARCH.name}
        options={{
          title: "Search",
          // tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house.fill" color={color} />,
        }}
      />
    </Tabs>
  )
}
// ...existing code...
