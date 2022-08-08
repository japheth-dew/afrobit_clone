import React from "react";
import logo from "../../assets/svgs/logo.svg";
import LoginRegister from "./LoginRegister";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="bg-[#211F20] px-[4rem] py-[1rem] flex items-center gap-14 text-white sticky top-0 ">
      {/* ----------logo-------------- */}
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-between w-full">
        {/* ----------Navigation-------------- */}
        <Nav />
        {/* ----------Navigation-------------- */}
        <LoginRegister />
        {/* ----------Login Signup-------------- */}
      </div>
    </div>
  );
};

export default Header;
