import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  pressable: {},
  text: {
    fontSize: 16,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.medium,
  },
  pressableSelected: {
    borderBottomWidth: 3,
    borderBottomColor: theme.colors.white,
  },
});
