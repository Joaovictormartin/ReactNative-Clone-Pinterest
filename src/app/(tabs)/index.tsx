import { View, StyleSheet } from "react-native";

import { theme } from "@/theme";
import { FILTERS } from "@/utils/filters";
import Filters from "@/components/Filters";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 52,
    backgroundColor: theme.colors.black,
  },
});
