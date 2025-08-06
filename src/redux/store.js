import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import githubReducer from "../features/github/githubSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    github: githubReducer,
  },
});
