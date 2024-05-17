import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, Text, useColorScheme } from "react-native";
import { Navigation } from "./src";
import { colors } from "@/utils";
import { mode } from "./mode";
import changeNavigationBarColor from "react-native-navigation-bar-color";

function App(): React.JSX.Element {
  useEffect(() => {
    const example = async () => {
      await changeNavigationBarColor(colors("background") as string);
    };

    example();
  }, []);

  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? '#101010' : '#ffffff',
  //   flex: 1,
  // };

  return (
    <>
      <StatusBar
        backgroundColor={colors("background")}
        barStyle={`${mode === "light" ? "dark" : "light"}-content`}
      />
      <Navigation />
    </>
  );
}

export default App;
