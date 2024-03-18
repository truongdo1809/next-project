"use client";
import { createSlice } from "@reduxjs/toolkit";

export type Item = {
  id: number;
  images: string;
  title: string;
  price: number;
  priceSale: number;
  quantity: number;
};

export type cartState = {
  items: Item[];
};

const cartSlice = createSlice({
  name: "cart",
  reducerPath: "cart",
  initialState: {},
  reducers: {},
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

export default cartSlice;
