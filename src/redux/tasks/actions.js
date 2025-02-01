import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addTask = createAction("tasks/addTask", (text) => ({
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
}));

const deleteTask = createAction("tasks/deleteTask", (idTaskToDelete) => ({
  payload: idTaskToDelete,
}));

const completeTask = createAction(
  "tasks/completeTask",
  ({ isTaskComplete, task }) => ({
    payload: {
      isComplete: isTaskComplete,
      activeTask: task,
    },
  })
);

export { addTask, deleteTask, completeTask };
