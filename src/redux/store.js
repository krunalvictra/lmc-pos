import { configureStore } from "@reduxjs/toolkit";
import employeeDetailsReducer from "@Redux/features/employeeDetailsSlice";

export const store = configureStore({
  reducer: {
    employeeDetailsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
