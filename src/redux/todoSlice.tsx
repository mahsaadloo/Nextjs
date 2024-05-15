import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface todoList {
  todos: { id: number; name: string }[];
}

const initialState: todoList = {
  todos: [{id:1, name: "hello"}],
};

export const todoSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    onAddTodo: (state, action: PayloadAction<string>) => {
      const newId = state.todos.length + 1;
      const newTodos = [...state.todos, { id: newId, name: action.payload }];
      state.todos = newTodos;
    },
  },
});

export const { onAddTodo } = todoSlice.actions;

export default todoSlice.reducer;
