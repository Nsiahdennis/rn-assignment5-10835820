import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { COLORS } from "../../constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.blue,

        tabBarLabelStyle: {
          fontFamily: "regular",
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={focused ? COLORS.blue : COLORS.gray2}
              size={26}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="card"
        options={{
          tabBarLabel: "My Cards",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "card" : "card-outline"}
              size={26}
              color={focused ? COLORS.blue : COLORS.gray2}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          tabBarLabel: "Statistics",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "pie-chart" : "pie-chart-outline"}
              color={focused ? COLORS.blue : COLORS.gray2}
              size={26}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"settings-outline"}
              color={focused ? COLORS.blue : COLORS.gray2}
              size={26}
            />
            // <FontAwesomeIcon icon={faCoffee} size={30} color="#900" />
          ),
        }}
      />
    </Tabs>
  );
}
