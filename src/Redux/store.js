import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "../Redux/Slices/authSlice";
import ProductSliceReducer from "../Redux/Slices/productSlice"

export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        product: ProductSliceReducer
    },
    devTools: true
});