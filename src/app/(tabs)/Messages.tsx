import { Text, View, StyleSheet } from "react-native";

import { theme } from "@/theme";

export default function Messages() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.black,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.white,
    fontFamily: theme.fontFamily.regular,
  },
});
