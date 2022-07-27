import React from "react";
import { useState, useEffect } from "react";
import {
  checkAccount,
  addAccountBalance,
} from "../../../../pages/api/account/AccountAPI";
import { LockClosedIcon } from "@heroicons/react/solid";

const stats = [
  { name: "Username", stat: "XXX" },
  { name: "Account Balance", stat: "XXX" },
  { name: "Account Integral", stat: "XXX" },
];
const initBody = {
  phone: "",
  amount: 0,
};

export default function AddAmountBox() {
  const [accountDetails, setAccountDetails] = useState(stats);
  const [isLoading, setIdLoading] = useState(false);
  const [isAccountConfirm, setIsAccountConfirm] = useState(false);
  const [inputPhone, setInputPhone] = useState<string>("");
  const [inputAmount, setInputAmount] = useState<number>(0);

  const confirmBtnHandler = async (): Promise<void> => {
    const response = await checkAccount(inputPhone);
    setAccountDetails([
      { name: "Username", stat: response.username },
      { name: "Account Balance", stat: "$ " + response.accountBalance },
      { name: "Account Integral", stat: "$ " + response.integralBalance },
    ]);
    setIsAccountConfirm(true);
  };

  const finalConfirmBtnHandler = async (): Promise<void> => {
    if (isAccountConfirm) {
      setIdLoading(true);
      const response = await addAccountBalance(inputPhone, inputAmount);
      setAccountDetails([
        { name: "Username", stat: response.username },
        { name: "Account Balance", stat: "$ " + response.accountBalance },
        { name: "Account Integral", stat: "$ " + response.integralBalance },
      ]);
      setInputPhone("");
      setInputAmount(0);
      setIsAccountConfirm(false);
      setIdLoading(false);
    }
  };

  const clearBtnHandler = (): void => {
    setAccountDetails(stats);
  };
  return (
    <div className="p-4 rounded-lg bg-gray-300">
      {isLoading && (
        <div className="text-center flex justify-center mt-8   w-[533px] h-[100px] ">
          <div role="status">
            <svg
              className="inline mr-2 w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && (
        <div>
          <h1 className="text-3xl leading-6 font-semibold text-gray-900  mb-5 flex justify-center">
            Add Amount Box
          </h1>
          <div className="flex gap-4 mb-5">
            <h3 className="text-xl leading-6 font-semibold text-gray-500 p-1">
              User Accounts:
            </h3>
            <input
              type="text"
              value={inputPhone}
              onChange={(e) => setInputPhone(e.target.value)}
              placeholder="Input the phone"
              className="border-slate-500 rounded-lg pl-2"
            />
            <div className="flex gap-2">
              <button
                className="bg-gray-700 hover:bg-gray-800 text-white p-1 px-2 rounded-md"
                onClick={confirmBtnHandler}
              >
                Confirm
              </button>
              <button
                className="bg-gray-700 hover:bg-gray-800 text-white p-1 px-5 rounded-md "
                onClick={clearBtnHandler}
              >
                Clear
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <h3 className="text-xl leading-6 font-semibold text-gray-500 p-1">
              Add Amounts:
            </h3>
            <input
              type="number"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value as any)}
              placeholder="Input the Amount"
              className="border-slate-500 rounded-lg pl-2"
            />
            <button
              className={
                isAccountConfirm
                  ? "bg-gray-700 hover:bg-gray-800 text-white p-1 px-8 rounded-md ml-1"
                  : "bg-gray-900  text-red-500 p-1 px-8 rounded-md ml-1"
              }
              onClick={finalConfirmBtnHandler}
            >
              {isAccountConfirm ? (
                "Final Confirm"
              ) : (
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 mx-10"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>

          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {accountDetails.map((item) => (
              <div
                key={item.name}
                className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
              >
                <dt className="text-sm font-medium text-gray-800 truncate">
                  {item.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-indigo-600 flex justify-center">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
