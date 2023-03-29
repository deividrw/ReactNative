import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./assets/ViewLogin/index";
import Home from "./assets/ViewHome/index";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="telaLogin"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="telaHome"
          component={Home}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


