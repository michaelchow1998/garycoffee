import React, { ChangeEvent, useEffect, useState } from "react";

//routing
import { useNavigate } from "react-router-dom";
//axios
import axios from "axios";
//UI
import { LockClosedIcon } from "@heroicons/react/solid";

interface FormValue {
  username: string;
  password: string;
}

interface ReqToken {
  access_token: string;
  refresh_token: string;
  roles: string;
}

const LoginPage = () => {
  let navigate = useNavigate();
  const RouteChange = () => {
    navigate("/dashboard", { replace: true });
  };

  const [formValues, setFormValues] = useState<FormValue>({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isSuccessLogin, setIsSuccessLogin] = useState<boolean>(false);
  const [jwtTokens, setJwtTokens] = useState<ReqToken>({
    access_token: "",
    refresh_token: "",
    roles: "",
  });

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const handleSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError(false);
    setIsSubmit(true);
  };

  async function callLoginApi() {
    try {
      await axios
        .post(
          "https://gary-coffee-main.herokuapp.com/api/v1/login",
          JSON.stringify(formValues)
        )
        .then((data) => {
          setIsSuccessLogin(true);
          setJwtTokens(data.data);
        });
    } catch (error) {
      setLoginError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    if (isSubmit) {
      callLoginApi();
      setIsSubmit(false);
    }
  }, [isSubmit]);

  useEffect(() => {
    if (jwtTokens.access_token != "") {
      localStorage.setItem("access_token", jwtTokens.access_token);
      localStorage.setItem("refresh_token", jwtTokens.refresh_token);
      RouteChange();
    }
  }, [jwtTokens]);

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 mb-2 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <h3 className="text-blue-600 text-xl text-center">
              {isSuccessLogin ? "Login Success" : ""}
            </h3>
            <h3 className="text-red-600 text-xl text-center">
              {loginError ? "Your Username or Password may not correct" : ""}
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  value={formValues.username}
                  onChange={handlerChange}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={formValues.password}
                  onChange={handlerChange}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
