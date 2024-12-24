import React from "react";
import { useFonts } from "expo-font";

import { ScrollView } from "react-native";
import Indian from "@/components/MarketsOverview1/Indian";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Indian />
        <Indian />
      </ScrollView>
    </SafeAreaView>
  );
}
