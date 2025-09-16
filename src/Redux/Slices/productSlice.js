import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    productsData: [], // Array of products
}

export const getAllProducts = createAsyncThunk('/products/fetchAll', async () => {
    try {
        const products = axiosInstance.get('/products');
        toast.promise(products, {
            loading: 'fetching all the products',
            error: 'Something went cannot fetch products',
            success: 'Products fetched successfully',
        });
        const apiResponse = await products;
        return apiResponse.data;
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    redicers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            console.log("res from back", action.payload);
            state.productsData = action?.payload?.data;
        });
    }
});

export default productSlice.reducer;