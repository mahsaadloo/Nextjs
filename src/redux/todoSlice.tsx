import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface todoList {
  todos: { id: number; title: string }[];
}

const initialState: todoList = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    onAddTodo: (state, action: PayloadAction<string>) => {
      const newId = state.todos.length + 1;
      const newTodos = [...state.todos, { id: newId, title: action.payload }];
      state.todos = newTodos;
    },
    onDeleteTodo: (state, action: PayloadAction<number>) => {
      const deleteTodo = (state.todos = state.todos.filter((todo) => {
        todo.id !== action.payload;
      }));
      state.todos = deleteTodo;
    },
    onUpdateTodos: (state, action: PayloadAction<{ id: number; title: string }[]>) => {
      state.todos = action.payload
    }
  },
});

export const { onAddTodo, onDeleteTodo, onUpdateTodos } = todoSlice.actions;

export default todoSlice.reducer;
