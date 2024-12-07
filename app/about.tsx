import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function About() {
  return (
    <View>
      <Text>about</Text>
      <Link href={"/"}>Home</Link>
    </View>
  );
}
