import { useState } from "react";
import { View, StyleSheet } from "react-native";

import { theme } from "@/theme";
import Posts from "@/components/Posts";
import { POSTS } from "@/utils/posts";
import { FILTERS } from "@/utils/filters";
import Filters from "@/components/Filters";

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />

      <Posts posts={POSTS} />
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
