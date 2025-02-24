import React from "react";
import { useEffect, useState } from "react";
import { getTaskRequest } from "../api/tasks.api";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
  const {tasks, loadTasks} = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1>Tasksss</h1>
      {renderMain()}
    </div>
  );
}

export default TasksPage;
