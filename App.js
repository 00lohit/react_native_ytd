import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/Home";
import Output from "./components/Output";
import { LinkData } from "./components/LinkContext";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <LinkData>
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Youtube Downloader Home" component={HomeScreen} />
          <Stack.Screen name="Download" component={Output} />
      </Stack.Navigator>
    </NavigationContainer>
    </LinkData>
  );
}

export default App;

