import { createSlice } from "@reduxjs/toolkit";

interface PageState {
  dashboard: boolean;
  orders: boolean;
  products: boolean;
  accounts: boolean;
}

const initialState: PageState = {
  dashboard: true,
  orders: false,
  products: false,
  accounts: false,
};

export const staffRouteSlice = createSlice({
  name: "staffRoute",
  initialState,
  reducers: {
    routeDashboard: (state) => {
      state.dashboard = true;
      state.orders = false;
      state.products = false;
      state.accounts = false;
    },
    routeOrders: (state) => {
      state.dashboard = false;
      state.orders = true;
      state.products = false;
      state.accounts = false;
    },
    routeProducts: (state) => {
      state.dashboard = false;
      state.orders = false;
      state.products = true;
      state.accounts = false;
    },
    routeAccounts: (state) => {
      state.dashboard = false;
      state.orders = false;
      state.products = false;
      state.accounts = true;
    },
  },
});

export const { routeDashboard, routeOrders, routeProducts, routeAccounts } =
  staffRouteSlice.actions;
export default staffRouteSlice.reducer;
