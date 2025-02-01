import { createReducer } from "@reduxjs/toolkit";
import { addTask, completeTask, deleteTask } from "./actions";
import { nanoid } from "nanoid";

const tasksInitialState = {
  tasks: [
    { id: nanoid(), text: "Learn HTML and CSS", completed: true },
    { id: nanoid(), text: "Get good at JavaScript", completed: true },
    { id: nanoid(), text: "Master React", completed: false },
    { id: nanoid(), text: "Discover Redux", completed: false },
    { id: nanoid(), text: "Build amazing apps", completed: false },
  ],
};

const taskReducer = createReducer(tasksInitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => ({
      ...state,
      tasks: state.tasks.concat(action.payload),
    }))
    .addCase(deleteTask, (state, action) => ({
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload),
    }))
    .addCase(completeTask, (state, action) => ({
      ...state,
      tasks: state.tasks.map((task) =>
        action.payload.activeTask.id === task.id
          ? { ...task, completed: action.payload.isComplete }
          : task
      ),
    }));
});

export { taskReducer };
