import { createSlice } from "@reduxjs/toolkit";

export const toDoListSlice = createSlice({
  name: "todo",
  initialState: {
    toDoList: [],
    filter: "",
  },
  reducers: {
    setToDoList: (state, actions) => {
      const value = actions.payload;
      state.toDoList.push({
        todo: value,
        completed: false,
      });
    },
    setCompleted: (state, actions) => {
      const index = actions.payload;
      state.toDoList[index].completed = !state.toDoList[index].completed;
    },
    setDeleted: (state, actions) => {
      const index = actions.payload;
      state.toDoList.splice(index, 1);
    },
    setFilter: (state, actions) => {
      state.filter = actions.payload;
    },
  },
});

export const { setToDoList, setCompleted, setDeleted, setFilter } =
  toDoListSlice.actions;
export default toDoListSlice;

export const toDoListData = (state) => state.todo.toDoList;
export const getFilter = (state) => state.todo.filter;
