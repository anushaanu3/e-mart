import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";

// Configure the store
const store = configureStore({
  reducer: {
    user: userReducer, // Add user reducer to store
  },
});

export default store;
