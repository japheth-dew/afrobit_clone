import React from "react";
import LoginRegister from "./LoginRegister";

const Nav2 = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-4 font-[400] text-[16px] h-[100%] ">
      <button>Trade</button>
      <button>Earn</button>
      <button>Invest</button>
      <button>Loan</button>
      <button>Club</button>
      <button>Execution</button>
      <div>
        <LoginRegister />
      </div>
    </div>
  );
};

export default Nav2;
