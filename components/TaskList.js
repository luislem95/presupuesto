import { FlatList, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { getTasks, deleteTask } from "../config/api";
import { useIsFocused } from "@react-navigation/native";

const TaskList = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data); // Set the fetched tasks to state
    } catch (error) {
      console.error("Error loading tasks:", error); // Log any errors
      // Handle the error (e.g., show an error message)
    }
  };
  useEffect(() => {
    fetchTasks(); // Invoke the fetchTasks function
  }, [isFocused]);

  const handleDelete = async (id) => {
    await deleteTask(id);
    await fetchTasks();
  };
  const renderItem = ({ item }) => {
    return <TaskItem tasks={item} handleDelete={handleDelete} />;
  };
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      await fetchTasks();
    } catch (error) {
      console.error("Error loading tasks:", error); // Log any errors
      // Handle the error (e.g., show an error message)
    }
    setRefreshing(false);
  });
  return (
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={["#F5D557"]}
          progressBackgroundColor="#282828"
          onRefresh={onRefresh}
        />
      }
    />
  );
};

export default TaskList;
