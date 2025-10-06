import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Profile = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Profile</Text>
    </View>
  )
}

export default Profile

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
})
