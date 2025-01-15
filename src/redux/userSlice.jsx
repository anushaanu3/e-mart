import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserCredentials: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    clearUserCredentials: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});
export const { setUserCredentials, clearUserCredentials } = userSlice.actions;
export default userSlice.reducer;
