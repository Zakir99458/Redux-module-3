import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};
type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, actiion: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id != actiion.payload);
    },
    toggleComplete: (state, actiion: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === actiion.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
