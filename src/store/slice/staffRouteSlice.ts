import { createSlice } from "@reduxjs/toolkit";

interface PageState {
  dashboard: boolean;
  orders: boolean;
  products: boolean;
  accounts: boolean;
}

const initialState: PageState = {
  dashboard: false,
  orders: false,
  products: false,
  accounts: false,
};

export const staffRouteSlice = createSlice({
  name: "staffRoute",
  initialState,
  reducers: {
    routeDashboard: (state) => {
      return {
        ...state,
        dashboard: true,
        orders: false,
        products: false,
        accounts: false,
      };
    },
    routeOrders: (state) => {
      return {
        ...state,
        dashboard: false,
        orders: true,
        products: false,
        accounts: false,
      };
    },
    routeProducts: (state) => {
      return {
        ...state,
        dashboard: false,
        orders: false,
        products: true,
        accounts: false,
      };
    },
    routeAccounts: (state) => {
      return {
        ...state,
        dashboard: false,
        orders: false,
        products: false,
        accounts: true,
      };
    },
  },
});

export const { routeDashboard, routeOrders, routeProducts, routeAccounts } =
  staffRouteSlice.actions;
export default staffRouteSlice.reducer;
