import { Text, Pressable, PressableProps } from "react-native";

import { FilterProps } from "./filter";

import { styles } from "./styles";

export default function Filter({
  filter,
  selected,
  ...rest
}: FilterProps & PressableProps) {
  return (
    <Pressable
      style={[styles.pressable, selected && styles.pressableSelected]}
      {...rest}
    >
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  );
}
