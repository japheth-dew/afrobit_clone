import React from "react";
import send from "../../assets/svgs/send.svg";
import line from "../../assets/svgs/line.svg";
import document from "../../assets/svgs/document.svg";
import gift from "../../assets/svgs/gift.svg";
import purse from "../../assets/svgs/purse.svg";

const Top = () => {
  return (
    <div className="md:pl-[4rem]  bg-[#f9c55a] flex justify-between items-center ">
      <div>
        <div>
          <p className="text-[25px] font-[500] ">
            Invite Friends to Get <span className="font-[700]">$8</span> and{" "}
            <span className="font-[700]">30%+</span> Cash Commision
          </p>
          <p>Get special welcome offer for friends</p>
        </div>
        <div className="flex ">
          <img src={send} alt="" />
          <img src={line} alt="" />
          <img src={document} alt="" />
          <img src={line} alt="" />
          <img src={gift} alt="" />
        </div>
        <div className="flex gap-8">
          <div>
            <p className="font-[600]">1. Send Invites</p>
            <p className="text-[14px]">Share with friends via my link</p>
          </div>
          <div>
            <p className="font-[600]">2. Friends’ Tasks</p>
            <p className="text-[14px]">Deposit $50 & hold $50 total <br />net asset for a total of 10 days</p>
          </div>
          <div>
            <p className="font-[600]">3. Claim Rewards</p>
            <p className="text-[14px]">Earn $8 and unlimited referral <br/> commissions</p>
          </div>
        </div>
      </div>
      <div>
        <img src={purse} alt="" />
      </div>
    </div>
  );
};

const Refferal = () => {
  return (
    <div>
      <Top />
    </div>
  );
};

export default Refferal;
