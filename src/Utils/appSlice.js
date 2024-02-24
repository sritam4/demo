import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "App",
  initialState: [],
  reducers: {
    addNames: (state, action) => {
      state = state.push(action.payload);
    },
    removeName: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addNames, removeName } = appSlice.actions;
export default appSlice.reducer;
