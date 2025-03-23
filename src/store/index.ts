import { configureStore } from "@reduxjs/toolkit";
import { MainStore } from "./MainStore";
import { themeSlice } from "./reducers";

const store = configureStore<MainStore>({
  reducer: {
    theme: themeSlice,
  },
});

export default store;
