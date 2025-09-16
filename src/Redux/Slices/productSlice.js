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
            error: 'Something went wrong. Cannot fetch products',
            success: 'Products fetched successfully',
        });
        const apiResponse = await products;
        return apiResponse.data;
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
});

export const createProduct = createAsyncThunk('/products/createProduct', async (data) => {
    try {
        const products = axiosInstance.post('/products', data);
        toast.promise(products, {
            loading: 'Creating a product',
            error: 'Something went wrong. Cannot create product',
            success: 'Product created successfully',
        });
        const apiResponse = await products;
        return apiResponse.data;
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
});

export const getProductDetails = createAsyncThunk('/products/productDetails', async (id) => {
    try {
        const product = axiosInstance.get(`/products/${id}`);
        toast.promise(product, {
            loading: 'Fetching a product',
            error: 'Something went wrong. Cannot fetch product',
            success: 'Product fetched successfully',
        });
        const apiResponse = await product;
        return apiResponse.data;
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    redicers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.fulfilled, (state, action) => {
            console.log("res from back", action.payload);
            state.productsData = action?.payload?.data;
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            // Push newly created product to state
            state.productsData.push(action?.payload?.data) 
        });
    }
});

export default productSlice.reducer;