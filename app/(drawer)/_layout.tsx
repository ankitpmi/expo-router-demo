import { Routes } from "@/src/navigation"
import { Drawer } from "expo-router/drawer"

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name={Routes.TABS.path} // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
      <Drawer.Screen
        name={Routes.HELP_CENTER.path} // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "overview",
        }}
      />
    </Drawer>
  )
}
