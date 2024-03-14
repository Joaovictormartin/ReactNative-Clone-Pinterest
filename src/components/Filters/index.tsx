import { FlatList } from "react-native";

import Filter from "@/components/Filter";
import { FiltersProps } from "./filters";

import { styles } from "./styles";

export default function Filters({ filters, filter, onChange }: FiltersProps) {
  return (
    <FlatList
      horizontal
      data={filters}
      style={styles.list}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
    />
  );
}
