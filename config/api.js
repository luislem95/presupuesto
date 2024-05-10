const API = "http://192.168.31.136:3000/tasks";

export const getTasks = async () => {
  try {
    const res = await fetch(API);
    const data = await res.json();
    return data; // Return the data
  } catch (error) {
    console.error("Error fetching task:", error); // Log any errors
    throw error; // Rethrow the error to be handled by the caller
  }
};

export const saveTasks = async (newTask) => {
  try {
    console.log(newTask);
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await res.json();
    return data; // Return the data
  } catch (error) {
    console.error("Error fetching task:", error); // Log any errors
    throw error; // Rethrow the error to be handled by the caller
  }
};
export const getTask = async (id) => {
  try {
    const res = await fetch(`${API}/${id}`);
    const data = await res.json();
    return data; // Return the data
  } catch (error) {
    console.error("Error fetching task:", error); // Log any errors
    throw error; // Rethrow the error to be handled by the caller
  }
};

export const deleteTask = async (id) => {
  console.log("id", id);
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error fetching task:", error); // Log any errors
    throw error; // Rethrow the error to be handled by the caller
  }
};

export const updateTask = async (id, newTask) => {
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    return data; // Return the data
  } catch (error) {
    console.error("Error fetching task:", error); // Log any errors
    throw error; // Rethrow the error to be handled by the caller
  }
};
