import { createSlice } from "@reduxjs/toolkit";
import { TypeNote } from "types/types";

export const noteSlice = createSlice({
  name: "notes",
  initialState: [] as TypeNote[],
  reducers: {
    addNote: (state, action: { type: string; payload: TypeNote }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return [...state, action.payload];
    },
    removeNote: (state, action: { type: string; payload: number }) => {
      return state.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action: { type: string; payload: TypeNote }) => {
      return state.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
    },
  },
});
export const { addNote, removeNote, editNote } = noteSlice.actions;

export default noteSlice.reducer;
