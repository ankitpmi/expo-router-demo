import { Tabs } from "expo-router"

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home/index"
        options={{
          title: "Home",
          // tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile/index"
        options={{
          title: "Profile",
          // tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Search/index"
        options={{
          title: "Search",
          // tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house.fill" color={color} />,
        }}
      />
    </Tabs>
  )
}
