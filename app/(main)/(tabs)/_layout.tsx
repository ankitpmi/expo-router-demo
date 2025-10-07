import { Routes } from "@/src/navigation"
import Entypo from "@expo/vector-icons/Entypo"
import Feather from "@expo/vector-icons/Feather"
import { Tabs } from "expo-router"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarActiveTintColor: colors.tangBlue,
        // tabBarInactiveTintColor: colors.black,
      }}>
      <Tabs.Screen
        name={Routes.HOME.name}
        options={{
          // tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house.fill" color={color} />,
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name={Routes.SEARCH.name}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={22} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name={Routes.PROFILE.name}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  )
}
