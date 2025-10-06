import { colors } from "@/src/constant"
import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useHome } from "./useHome"

const Home = () => {
  const { handleLogout, handleHelpCenter } = useHome()
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.screenText}>Home</Text>
      <Pressable style={styles.loginBtn} onPress={handleHelpCenter}>
        <Text style={styles.buttonText}>Got to help center</Text>
      </Pressable>
      <Pressable style={styles.loginBtn} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenText: {
    fontSize: 20,
    fontWeight: "700",
  },
  loginBtn: {
    width: 160,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: colors.tangBlue,
    marginTop: 18,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.white,
  },
})
