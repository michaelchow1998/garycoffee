import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  staffLoginState: boolean;
  adminLoginState: boolean;
}

const initialState: LoginState = {
  staffLoginState: false,
  adminLoginState: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    staffLogin: (state) => {
      state.staffLoginState = true;
      state.adminLoginState = false;
    },
    adminLogin: (state) => {
      state.staffLoginState = false;
      state.adminLoginState = true;
    },
    logout: (state) => {
      state.adminLoginState = false;
      state.staffLoginState = false;
    },
  },
});

export const { staffLogin, adminLogin, logout } = loginSlice.actions;
export default loginSlice.reducer;
