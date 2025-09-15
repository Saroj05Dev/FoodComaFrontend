import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "../Redux/Slices/authSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer
    },
    devTools: true
});