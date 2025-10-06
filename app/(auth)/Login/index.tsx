import { colors } from "@/src/constant"
import { Routes } from "@/src/navigation"
import { useRouter } from "expo-router"
import React, { useCallback } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

const Login = () => {
  const router = useRouter()

  const handleLogin = useCallback(() => {
    router.replace(Routes.HOME.route())
    // router.replace('/(main)/Home' as const)
  }, [router])

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.screenText}>Login</Text>

      <Pressable style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  )
}

export default Login

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
