import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/login/userSlice";
import systemReducer from "./pages/system-state/systemState";
import categories from "./pages/categories/CategorySlice";

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemReducer,
    cat: categories,
  },
});

export default store;
