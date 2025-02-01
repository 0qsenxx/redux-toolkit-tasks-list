import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";
import { taskReducer } from "./tasks/reducer";
import { filtersReducer } from "./filters/reducer";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filtersReducer,
  },
});

export { store };
