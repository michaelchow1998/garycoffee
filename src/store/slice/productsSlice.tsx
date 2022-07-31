import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Item {
  id: string;
  location: string;
  bean: string;
  price: number;
  stock: number;
  description: string;
  product_name: string;
  short_name: string;
  image_url: string;
}

interface Items extends Array<Item> {}
{
}

interface ProductsState {
  items: Items;
  status: "idle" | "pending" | "success" | "rejected";
}

const initialState = {
  items: [],
  status: "idle",
} as ProductsState;

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    credentials: "same - origin",
    AUTHORIZATION: `Bearer ${localStorage.getItem("access_token")}`,
  },
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(
      "https://gary-coffee-main.herokuapp.com/api/v1/staff/products",
      axiosConfig
    );
    return response?.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled as any]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected as any]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productsSlice.reducer;
