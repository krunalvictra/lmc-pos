import { configureStore } from "@reduxjs/toolkit";
import employeeDetailsReducer from "@/app/redux/features/employeeDetailsSlice";

export const store = configureStore({
  reducer: {
    employeeDetailsReducer,
  },
  devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
});
