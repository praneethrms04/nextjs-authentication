import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/authSlice";
import { type } from "os";

// reducer , middleware
const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: (gDM) => gDM().concat(authSlice.middleware),
});

export default store;
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
