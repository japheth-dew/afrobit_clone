import React from 'react'
import ethPocket from "../../assets/svgs/ethPocket.svg"

const Top = ()=>{
    return (
      <div className=" md:p-[4rem] p-[1rem] bg-[#161616] flex items-center justify-between text-white">
        <div>
          <p className="font-[700] text-[43px] ">
            Earn Up to 7.5% on Your Digital Assets
          </p>
          <p className="font-[400] text-[14px]">
            Flexible tenor from 1 - 365 days, Redeem Anytime
          </p>
        </div>
        <div>
          <div>
            <img src={ethPocket} alt="" />
          </div>
          <div className="rounded-tr-[1rem] transparent bg-[#C2C2C21A] rounded-bl-[1rem] p-5">
            <div>
              <div>
                <span>Earn balance(USD)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


const Earn = () => {
  return <div >
    <Top />
  </div>;
}

export default Earn