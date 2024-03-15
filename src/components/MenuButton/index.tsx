import { Text, Pressable, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { theme } from "@/theme";
import { MenuButtonProps } from "./menuButton";

import { styles } from "./styles";

export default function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome size={32} name={icon} color={theme.colors.white} />
      </View>

      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
