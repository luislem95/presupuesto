import React from "react";
import TaskList from "../components/TaskList";
import Layout from "../components/Layout";

export default function HomeScreen() {
  return (
    <Layout>
      <TaskList />
    </Layout>
  );
}
