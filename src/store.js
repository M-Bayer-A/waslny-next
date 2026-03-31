"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import loginReducer from "./features/login/state/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
