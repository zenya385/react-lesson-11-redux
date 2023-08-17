import { configureStore } from "@reduxjs/toolkit";
// import { filtersReducer, tasksReducer } from "./reducer";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
