import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducer/notesReducer";

export default configureStore({
  reducer: {
    notes: notesReducer,
  },
});
