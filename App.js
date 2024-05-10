import React from "react";
import { Text, TouchableOpacity } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Task Application",
            headerStyle: { backgroundColor: "#282828" },
            headerTitleStyle: { color: "#F5D557" },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("TaskFormScreen");
                }}
              >
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  New
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TaskFormScreen"
          component={TaskFormScreen}
          options={({ navigation }) => ({
            title: "Create Task",
            headerStyle: { backgroundColor: "#282828" },
            headerTitleStyle: { color: "#F5D557" },
            headerTintColor: "#F5D557",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
