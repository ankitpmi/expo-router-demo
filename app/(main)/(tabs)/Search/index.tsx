import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Search = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Search</Text>
    </View>
  )
}

export default Search

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
