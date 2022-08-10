import React from "react";
import check from "../../../assets/svgs/check.svg";
import coinswap from "../../../assets/svgs/coinswap.svg";
import greenDolls from "../../../assets/svgs/greenDolls.svg";
import btc from "../../../assets/svgs/btc.svg";
import drop from "../../../assets/svgs/drop.svg";

const Check = (props) => (
  <div className="flex gap-2">
    <img className="max-w-[1rem]" src={check} alt="" />
    <span>{props.text}</span>
  </div>
);

const Banner = () => (
  <div className="md:px-[3rem] px-[1rem] bg-[#161616] flex items-center justify-between w-full md:p-0 py-[2rem]">
    <div className="flex flex-col gap-4 ">
      <span className="font-[700] lg:text-[43px] md:text-[35px] text-[25px]">
        Swap From As Low As $5
      </span>
      <div className="md:flex-row flex flex-col md:gap-4 gap-2">
        <Check text="Low Slipage" />
        <Check text="No service fee" />
        <Check text="One-click Swap between any two coins" />
      </div>
    </div>
    <img className="md:inline hidden" src={coinswap} alt="" />
  </div>
);

const Payment = () => (
  <div className="flex flex-col  items-center bg-[#211F20] py-[5rem] text-[18px] ">
    <div className="lg:w-[45%] md:w-[70%] w-[90%] flex flex-col gap-6 ">
      <div className="flex flex-col gap-2 ">
        <div className="bg-[#2C2C2C] p-6 w-full rounded">
          <div className="flex flex-col gap-6 ">
            <span>Send</span>
            <div className="flex justify-between">
              <div className="flex gap-5 pr-5 border-r border-[#3C3C3C]">
                <img src={greenDolls} alt="greenDolls" />
                <span>USDⓢ</span>
                <img src={drop} alt="drop" />
              </div>
              <span className="text-[#FAC55A]">All</span>
            </div>
          </div>
        </div>
        <div className="text-[14px]">
          <span>Available</span> <span className="text-[#FAC55A]">0USDⓢ</span>
        </div>
      </div>
      <hr className="border-[#3C3C3C]" />
      <div className="bg-[#2C2C2C] p-6 w-full rounded">
        <div className="flex flex-col gap-6 ">
          <span>Get</span>
          <div className="flex justify-between">
            <div className="flex gap-5 pr-5 border-r border-[#3C3C3C]">
              <img src={btc} alt="greenDolls" />
              <span>USDⓢ</span>
              <img src={drop} alt="drop" />
            </div>
            <span className="text-[#FAC55A]">All</span>
          </div>
        </div>
      </div>
      <button className="bg-gradient-to-r from-[#EDD78F] text-black via-[#EDD78F] to-[#FDBF4A] rounded py-3 text-black">
        Continue
      </button>
      <div className="text-[12px] text-center">
        <span>1USDⓢ =0.0000438BTC 1BTC=22,813.14USDⓢ</span>{" "}
        <span className="text-[#FDC04C]">3s</span>
      </div>
    </div>
  </div>
);

const SwapHistory = () => (
  <div className="flex flex-col bg-[#161616] py-[5rem] text-[18px] "></div>
);

const Swap = () => {
  return (
    <div className="text-white">
      <Banner />
      <Payment />
      <SwapHistory />
    </div>
  );
};

export default Swap;
