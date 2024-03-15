import { Image, StyleSheet, View } from "react-native";

import { theme } from "@/theme";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/png/logo.png")} style={styles.logo} />
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
  logo: {
    width: 64,
    height: 64,
  },
});
