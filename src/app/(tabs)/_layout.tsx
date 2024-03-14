import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "@/theme";
import Avatar from "@/components/Avatar";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray[600],
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderColor: theme.colors.white,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Avatar
              selected={color === theme.colors.white}
              source={{ uri: "https://github.com/Joaovictormartin.png" }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
