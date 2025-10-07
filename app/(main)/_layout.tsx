import { colors } from "@/src/constant"
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer"
import { Drawer } from "expo-router/drawer"
import { StyleSheet, View } from "react-native"

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default function MainLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: colors.tangBlue,
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.black,
      }}
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="HelpCenter"
        options={{
          drawerLabel: "Help Center",
          title: "Help Center",
        }}
      />
    </Drawer>
  )
}

const styles = StyleSheet.create({
  drawerHeader: {
    height: 100,
    backgroundColor: colors.blush,
    marginVertical: 40,
  },
})
