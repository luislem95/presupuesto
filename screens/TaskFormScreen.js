import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Layout from "../components/Layout";
import { saveTasks, getTask, updateTask } from "../config/api";

export default function TaskFormScreen({ navigation, route }) {
  const [id, setId] = useState("");
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const [editing, setEditing] = useState(false);
  const handleChange = (name, value) => {
    setTask({ ...task, [name]: value });
  };

  const handleSaveTask = async () => {
    if (editing) {
      try {
        const response = await updateTask(route.params.id, task);
        console.log("Task updated successfully:", response);
        navigation.navigate("HomeScreen");
        // Aquí puedes actualizar la interfaz de usuario si es necesario
      } catch (error) {
        console.error("Error updating task:", error);
        // Aquí puedes mostrar un mensaje de error al usuario si la tarea no se pudo actualizar
      }
    } else {
      try {
        const response = await saveTasks(task);
        console.log("Task saved successfully:", response);
        navigation.navigate("HomeScreen");
        // Aquí puedes actualizar la interfaz de usuario si es necesario
      } catch (error) {
        console.error("Error saving task:", error);
        // Aquí puedes mostrar un mensaje de error al usuario si la tarea no se pudo guardar
      }
    }
  };
  useEffect(() => {
    if (route.params?.id) {
      navigation.setOptions({ headerTitle: "Update Task" });
      setEditing(true);
      (async () => {
        const task = await getTask(route.params.id);
        setTask({ title: task.title, description: task.description });
        console.log(task);
      })();
    }
  }, [route.params?.id]);

  return (
    <Layout>
      <TextInput
        placeholder="Title"
        value={task.title}
        style={styles.input}
        placeholderTextColor="#F5D557"
        onChangeText={(text) => handleChange("title", text)}
      />
      <TextInput
        placeholder="Description"
        value={task.description}
        style={styles.input}
        placeholderTextColor="#F5D557"
        onChangeText={(text) => handleChange("description", text)}
      />
      <TouchableOpacity style={styles.buttonSave} onPress={handleSaveTask}>
        <Text style={styles.colorText}>{editing ? "Update" : "Save"} Task</Text>
      </TouchableOpacity>
    </Layout>
  );
}
const styles = StyleSheet.create({
  input: {
    width: "90%",
    backgroundColor: "transparent",
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: "center",
    color: "#F5D557",
  },
  buttonSave: {
    backgroundColor: "transparent",
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  colorText: {
    color: "#F5D557",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
