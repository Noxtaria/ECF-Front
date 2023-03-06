import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/routes/auth/authSlice";
import UserSlice from "./components/routes/users/UserSlice";

const store = configureStore({
  reducer: {
    authSlice,
    UserSlice,
  }
})

export default store