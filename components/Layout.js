import { View, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#282828" />
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828", //black
    alignItems: "center",
    paddingTop: 15,
  },
});
export default Layout;
