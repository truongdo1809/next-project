import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { cartReducer } from "./features/cart.slide";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [cartSlice.name]: cartReducer,
     
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
