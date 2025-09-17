import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "../Redux/Slices/authSlice";
import ProductSliceReducer from "../Redux/Slices/productSlice"
import CartSliceReducer from "../Redux/Slices/cartSlice"
import OrderSliceReducer from "../Redux/Slices/OrderSlice"

export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        product: ProductSliceReducer,
        cart: CartSliceReducer,
        order: OrderSliceReducer
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        })
});