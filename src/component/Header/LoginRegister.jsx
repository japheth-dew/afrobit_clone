import React from "react";
import { NavLink } from "react-router-dom";

const LoginRegister = () => {
  return (
    <div className="flex gap-4 ">
      <NavLink to={"login"}>
        <button className="rounded-[3rem] px-[2.5rem] py-[8px] border-[#EDD78F] text-[#EDD78F] border">
          Login
        </button>
      </NavLink>
      <NavLink to={"register"}>
        <button className="rounded-[3rem] px-[2.5rem] py-[8px] bg-gradient-to-r from-[#EDD78F] text-black via-[#EDD78F] to-[#FDBF4A]  shadow-lg shadow-[#EDD78F]/90 ">
          Register
        </button>
      </NavLink>
    </div>
  );
};

export default LoginRegister;
