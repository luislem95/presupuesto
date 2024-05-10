import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TaskItem = ({ tasks, handleDelete }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TaskFormScreen", { id: tasks.id })}
      >
        <Text style={styles.itemTitel}>{tasks.title}</Text>
        <Text style={styles.itemDescription}>{tasks.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 7 }}
        onPress={() => handleDelete(tasks.id)}
      >
        <MaterialIcons name="delete" size={32} color="#282828" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
    color: "#8e8e8e",
  },
});

export default TaskItem;
