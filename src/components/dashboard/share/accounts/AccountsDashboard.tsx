import React from "react";

import AddAmountBox from "./AddAmountBox";
import CreateAccountBox from "./CreateAccountBox";
import FetchAccountBox from "./FetchAccountBox";

function AccountsDashboard() {
  return (
    <div className="flex">
      <div className="w-[50%] flex flex-col">
        <FetchAccountBox />
        <AddAmountBox />
      </div>
      <div className="w-[50%]">
        <CreateAccountBox />
      </div>
    </div>
  );
}

export default AccountsDashboard;
