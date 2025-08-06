import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [
      { id: 1, title: "Complete React Assignment" },
      { id: 2, title: "Read Redux Documentation" },
      { id: 3, title: "Submit Resume to HR" },
    ],
  },

  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodos , deleteTodos } = todoSlice.actions;
