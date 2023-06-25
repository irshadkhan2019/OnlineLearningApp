import { createSlice } from "@reduxjs/toolkit";
import { selectedTheme } from "../../constants";

const initialState = {
    appTheme: selectedTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => { 
      state.appTheme=action.payload
    },
 
  },

});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;