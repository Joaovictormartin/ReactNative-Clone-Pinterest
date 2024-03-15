import { ScrollView, View } from "react-native";

import { PostsProps } from "./posts";
import Post from "@/components/Post";

import { styles } from "./styles";

export default function Posts({ posts }: PostsProps) {
  const postByColumn = (column: "left" | "right") => {
    const rest = column === "left" ? 0 : 1;

    return posts
      .filter((_, index) => index % 2 === rest)
      .map((post) => <Post key={post.id} post={post} />);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}
    >
      <View style={styles.container}>
        <View style={styles.column}>{postByColumn("left")}</View>
        <View style={styles.column}>{postByColumn("right")}</View>
      </View>
    </ScrollView>
  );
}
