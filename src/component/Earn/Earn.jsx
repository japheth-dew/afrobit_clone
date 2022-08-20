import React from "react";
import ethPocket from "../../assets/svgs/ethPocket.svg";
import eye from "../../assets/svgs/eye.svg";
import greenArrow from "../../assets/svgs/greenArrow.svg";

const Top = () => {
  return (
    <div className=" md:p-[4rem] p-[1rem] bg-[#161616] flex items-center justify-between text-white">
      <div className="w-[60%]">
        <p className="font-[700] text-[40px] ">
          Earn Up to 7.5% on Your Digital Assets
        </p>
        <p className="font-[400] text-[14px]">
          Flexible tenor from 1 - 365 days, Redeem Anytime
        </p>
      </div>

      <div className="flex items-end w-[35%]">
        <div className=" relative   -mr-[1.5rem] ">
          <img className="w-[12rem]" src={ethPocket} alt="" />
        </div>

        <div className=" relative rounded-tr-[4rem] rounded-bl-[4rem] p-[2rem] bg-white/10 backdrop-blur-lg w-full h-[12rem] text-[12px] text-[#858585]">
          <div className="mb-[1rem]">
            <div className="flex items-center gap-1">
              <span>Earn balance(USD)</span>
              <img src={eye} alt="" />
            </div>
            <span className="text-[1.3rem] text-white font-[400]">
              ≈ 0<span className="text-[1rem] ">.00</span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1">
              <span>Yesterdays Returns (USD)</span>
              <img src={eye} alt="" />
            </div>
            <span className="text-[1.3rem] text-white font-[400]">
              ≈ 0<span className="text-[1rem] ">.00</span>
            </span>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-[#02c8a8] flex gap-1 items-center  ">
              <img src={greenArrow} alt="" />
              <p> My Earn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Earn = () => {
  return (
    <div>
      <Top />
    </div>
  );
};

export default Earn;
