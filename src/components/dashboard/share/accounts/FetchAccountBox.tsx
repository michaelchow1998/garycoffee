import React from "react";
import { useState } from "react";
import { checkAccount } from "../../../../pages/api/account/AccountAPI";
/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { name: "Username", stat: "XXX" },
  { name: "Account Balance", stat: "XXX" },
  { name: "Account Integral", stat: "XXX" },
];

export default function FetchAccountBox() {
  const [accountDetails, setAccountDetails] = useState(stats);
  const [phone, setPhone] = useState<string>("");
  const confirmBtnHandler = async (): Promise<void> => {
    const response = await checkAccount(phone);
    setPhone("");
    setAccountDetails([
      { name: "Username", stat: response.username },
      { name: "Account Balance", stat: response.accountBalance },
      { name: "Account Integral", stat: response.integralBalance },
    ]);
  };

  const clearBtnHandler = (): void => {
    setAccountDetails(stats);
  };
  return (
    <div className="p-4 rounded-lg bg-gray-600">
      <div className="flex gap-4">
        <h3 className="text-xl leading-6 font-semibold text-gray-200 p-1">
          User Accounts
        </h3>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-slate-500 rounded-lg pl-2"
        />
        <button
          className="bg-gray-700 hover:bg-gray-800 text-white p-1 px-2 rounded-md "
          onClick={confirmBtnHandler}
        >
          Confirm
        </button>{" "}
        <button
          className="bg-gray-700 hover:bg-gray-800 text-white p-1 px-5 rounded-md "
          onClick={clearBtnHandler}
        >
          Clear
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
  );
}
