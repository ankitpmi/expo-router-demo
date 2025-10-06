import { colors } from "@/src/constant"
import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useHelpCenter } from "./useHelpCenter"

const HelpCenter = () => {
  const { goBackHandler } = useHelpCenter()
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>HelpCenter</Text>
      <Pressable style={styles.screenBtn} onPress={goBackHandler}>
        <Text style={styles.buttonText}>Got Back</Text>
      </Pressable>
    </View>
  )
}

export default HelpCenter

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenText: {
    fontSize: 20,
    fontWeight: "700",
  },
  screenBtn: {
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
