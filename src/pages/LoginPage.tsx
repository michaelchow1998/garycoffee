import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { staffLogin, adminLogin, logout } from "../store/slice/loginSlice";

const LoginPage: React.FC = () => {
  const loginState = useSelector((state: RootState) => state.login);

  const dispatch = useDispatch();

  const staffLoginBtnHandler = (): void => {
    dispatch(staffLogin());
  };

  const adminLoginBtnHandler = (): void => {
    dispatch(adminLogin());
  };
  const logoutBtnHandler = (): void => {
    dispatch(logout());
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <h1 className="bg-blue-200 p-5">
        {loginState.staffLoginState ? "Staff Login" : ""}
        {loginState.adminLoginState ? "Admin Login" : ""}
        {!loginState.adminLoginState && !loginState.staffLoginState
          ? "Please Login"
          : ""}
      </h1>
      <div className="flex ">
        <button className="p-5 bg-blue-400" onClick={staffLoginBtnHandler}>
          Staff Login
        </button>
        <button className="p-5 bg-blue-400" onClick={adminLoginBtnHandler}>
          Admin Login
        </button>
        <button className="p-5 bg-red-400" onClick={logoutBtnHandler}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
