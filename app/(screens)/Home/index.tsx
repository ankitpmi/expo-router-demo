import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.screenText}>Home</Text>
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
})
