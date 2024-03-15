import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[800],
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
  },
  title: {
    flex: 1,

    fontSize: 18,
    textAlign: "center",
    color: theme.colors.white,
    fontFamily: theme.fontFamily.medium,

    marginRight: 24,
  },
  options: {
    flexDirection: "row",
    gap: 16,
    marginTop: 32,
  },
});
