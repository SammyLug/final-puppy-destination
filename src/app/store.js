import { configureStore } from "@reduxjs/toolkit";
import { playersApi } from "../api/playersSlice";

export const store = configureStore({
  reducer: {
    playersApi: playersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playersApi.middleware),
});