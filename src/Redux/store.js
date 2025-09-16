import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "../Redux/Slices/authSlice";
import ProductSliceReducer from "../Redux/Slices/productSlice"
import CartSliceReducer from "../Redux/Slices/cartSlice"

export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        product: ProductSliceReducer,
        cart: CartSliceReducer
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        })
});