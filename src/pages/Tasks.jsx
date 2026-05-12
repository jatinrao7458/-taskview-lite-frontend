import { useEffect, useState } from "react";
import API from "../api";
import React from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  // TODO:
  // Use useEffect to fetch tasks
  // Use API.get("/todos")
  // Store response in state
  // Handle errors using try/catch
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await API.get("/todos");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks List</h2>

      {/* TODO: Display first 5 tasks (title only) */}
      {/* Hint: use tasks.slice(0, 5).map(...) */}
      {/* Hint: use task.id as key */}
      <ul>
      {Array.isArray(tasks) && tasks.slice(0,5).map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
      </ul>
    </div>
  );
}

export default Tasks;
