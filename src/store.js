import { configureStore } from "@reduxjs/toolkit";
import toDoListSlice from "./assets/components/to-do-list/toDoListSlice";

export default configureStore({
  reducer: {
    todo: toDoListSlice.reducer,
  },
});
