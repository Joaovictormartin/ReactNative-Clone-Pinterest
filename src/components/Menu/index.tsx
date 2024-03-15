import { forwardRef } from "react";
import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";

import { theme } from "@/theme";
import { MenuProps } from "./menu";
import MenuButton from "@/components/MenuButton";

import { styles } from "./styles";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 260]}
      handleComponent={() => null}
      backgroundStyle={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            size={24}
            name="close"
            onPress={onClose}
            color={theme.colors.white}
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>

        <View style={styles.options}>
          <MenuButton title="Pin" icon="home" />
          <MenuButton title="Colagem" icon="paste" />
          <MenuButton title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  );
});
