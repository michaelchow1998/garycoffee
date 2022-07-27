import React from "react";

import AddAmountBox from "./AddAmountBox";
import CreateAccountBox from "./CreateAccountBox";
import FetchAccountBox from "./FetchAccountBox";

function AccountsDashboard() {
  return (
    <div className="flex flex-col ">
      <div className="lg:w-[100%] flex flex-row min-w-max gap-8 sm:flex-col lg:flex-row">
        <FetchAccountBox />
        <AddAmountBox />
      </div>
      <div className="lg:w-[100%] min-w-max "></div>
      <CreateAccountBox />
    </div>
  );
}

export default AccountsDashboard;
