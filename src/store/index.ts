import { configureStore } from "@reduxjs/toolkit";
//Slices
import staffRouteReducer from "./slice/staffRouteSlice";
import productsReducer from "./slice/productsSlice";
export const store = configureStore({
  reducer: {
    staffRoute: staffRouteReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
