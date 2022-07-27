import React from "react";

import AddAmountBox from "./AddAmountBox";
import CreateAccountBox from "./CreateAccountBox";
import FetchAccountBox from "./FetchAccountBox";

function AccountsDashboard() {
  return (
    <div className="flex flex-col ">
      <div className="lg:w-[100%] flex flex-row min-w-max gap-8">
        <FetchAccountBox />
        <AddAmountBox />
      </div>
      <div className="lg:w-[100%]"></div>
      <CreateAccountBox />
    </div>
  );
}

export default AccountsDashboard;
