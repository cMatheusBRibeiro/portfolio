import { createSlice } from "@reduxjs/toolkit";

export interface ThemeSlice {
  darkMode: boolean;
}

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: true,
  },
  reducers: {},
});

export default themeSlice.reducer;
