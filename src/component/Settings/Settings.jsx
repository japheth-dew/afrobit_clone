import React, { useState, useEffect } from "react";
import profile from "../../assets/svgs/profile.svg";
import write from "../../assets/svgs/write.svg";
import badge from "../../assets/svgs/badge.svg";
import yellowCard from "../../assets/svgs/yellowCard.svg";
import sheild from "../../assets/svgs/sheild.svg";
import sheild2 from "../../assets/svgs/sheild2.svg";
import details from "../../assets/svgs/details.svg";
import details2 from "../../assets/svgs/details2.svg";
import settings from "../../assets/svgs/settings.svg";
import settings2 from "../../assets/svgs/settings2.svg";
import reffer from "../../assets/svgs/reffer.svg";
import coupon from "../../assets/svgs/coupon2.svg";
import coupon2 from "../../assets/svgs/coupon.svg";
import bars from "../../assets/svgs/bars.svg";
import lock from "../../assets/svgs/lock.svg";
import email from "../../assets/svgs/email.svg";
import phone from "../../assets/svgs/phone.svg";
import password from "../../assets/svgs/password.svg";
import goldgoogle from "../../assets/svgs/goldgoogle.svg";
import goldSheild from "../../assets/svgs/goldSheild.svg";
import note from "../../assets/svgs/note.svg";
import identityVerification from "../../assets/svgs/identityVerification.svg";
import verifyAddress from "../../assets/svgs/verifyAddress.svg";

const Top = () => {
  return (
    <div className="bg-[#161616] md:px-[7rem] md:pt-[4rem] p-[1rem] text-white flex justify-between overflow-hidden">
      <div className="flex gap-5">
        <div className="bg-[#DFB154] h-[5rem] w-[5rem] rounded">
          <img src={profile} alt="" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-[600] text-[32px] ">whalefin.va15xphv</p>
            <img className="w-[18px]" src={write} alt="" />
          </div>
          <div className="flex items-center gap-6">
            <img src={badge} alt="" />
            <p>Individual verification</p>
          </div>
        </div>
      </div>
      <div className="w-[40%] relative -bottom-[2rem] bg-gradient-to-r from-[#32312D] to-[#504E4A] flex flex-col gap-4 items-center rounded-md p-10 pb-12">
        <img className="w-[5rem]" src={yellowCard} alt="" />
        <p className="font-[700]">AFROBIT CLUB</p>
        Join now to enjoy exclusive benefits
      </div>
    </div>
  );
};
// -----------////////////////////---------------

const SettingsNavButton = ({
  image_1,
  image_2,
  name,
  setSettingState,
  settingState,
  setComponent,
  component
}) => {
  const [active, setActive] = useState();

  useEffect(() => {
    if (settingState === name) {
      setActive(true);
      setActive(true);
    } else setActive(false);
    return () => {
      if (settingState === name) {
        setActive(true);
        setActive(true);
      } else setActive(false);
    };
  }, [settingState, name]);

  const handleClick = () => {
    setSettingState(name);
    setComponent(component);
  };
  return (
    <button
      onClick={handleClick}
      className={`${active && "text-white"} flex items-center gap-3`}
    >
      <img className="w-[2rem]" src={active ? image_2 : image_1} alt={name} />
      <p>{name}</p>
    </button>
  );
};

const SettingsNav = ({ settingState, setSettingState, setComponent }) => {
  return (
    <div className="flex px-[3rem] py-[4rem]  ">
      <div className="text-[#A7A7A7] font-[500] flex flex-col gap-[2rem] ">
        <SettingsNavButton
          setSettingState={setSettingState}
          setComponent={setComponent}
          settingState={settingState}
          component={<AccountSettings />}
          name="Account Settings"
          image_1={sheild2}
          image_2={sheild}
        />
        <SettingsNavButton
          name="Identity Verification"
          settingState={settingState}
          setComponent={setComponent}
          setSettingState={setSettingState}
          component={<IdentityVerification />}
          image_1={details}
          image_2={details2}
        />
        <SettingsNavButton
          name="Global Settings"
          settingState={settingState}
          setComponent={setComponent}
          setSettingState={setSettingState}
          component={<GlobalSettings />}
          image_1={settings}
          image_2={settings2}
        />
        <SettingsNavButton
          name="Refferal"
          settingState={settingState}
          setComponent={setComponent}
          setSettingState={setSettingState}
          component={<Refferal />}
          image_1={reffer}
          image_2={reffer}
        />
        <SettingsNavButton
          name="Coupon"
          settingState={settingState}
          setComponent={setComponent}
          setSettingState={setSettingState}
          component={<Coupon />}
          image_1={coupon}
          image_2={coupon2}
        />
      </div>
    </div>
  );
};

// _______--------------------------__________________

const AccountSettings = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-6">
          <img className="w-[2rem]" src={lock} alt="" />
          <div>
            <p className="text-[22px] ">Security Settings</p>
            <p>
              Security Level: <span className="text-[#FF618A]">Low</span>
            </p>
          </div>
        </div>
        <img src={bars} alt="" />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-6">
          <img className="w-[2rem]" src={email} alt="" />
          <div>
            <p className="text-[22px] ">Email</p>
            <p>Use your email address to log in or retrieve password.</p>
          </div>
        </div>
        <p>ja**ng@outlook.com</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-6">
          <img className="w-[2rem]" src={phone} alt="" />
          <div>
            <p className="text-[22px] ">Phone</p>
            <p>
              Use your mobile phone number to log in or retrieve your password.
            </p>
          </div>
        </div>
        <button className="rounded-full w-[9rem] py-2  text-[#EDD78F] border border-[#EDD78F]">
          Bind
        </button>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-6">
          <img className="w-[2rem]" src={password} alt="" />
          <div>
            <p className="text-[22px] ">Password</p>
            <p>Please safeguard your password.</p>
          </div>
        </div>
        <button className="rounded-full w-[9rem] py-2  text-[#EDD78F] border border-[#EDD78F]">
          Reset
        </button>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-6">
          <img className="w-[2rem]" src={goldgoogle} alt="" />
          <div>
            <p className="text-[22px] ">Google Authenticator</p>
            <p>
              Google Authenticator will be used for login, transfers and
              modification of security settings.
            </p>
          </div>
        </div>
        <button className="rounded-full w-[9rem] py-2  text-[#EDD78F] border border-[#EDD78F]">
          Enable
        </button>
      </div>
    </div>
  );
};

const IdentityVerification = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-5">
        <div>
          <img src={goldSheild} alt="" />
        </div>
        <div className="text-[20px] text-center">
          <p className="text-[#EDD78F] font-[600]">Verification successful!</p>
          <p className="text-[#707070] font-[400]">
            Your identity information has been verified
          </p>
        </div>
        <div className="w-[30rem] rounded-md bg-[#F1D27F33] flex flex-col items-center py-[2rem]">
          <div>
            <div className=" flex flex-col gap-5   p-5 w-full">
              <div className="flex gap-5 items-center">
                <img src={note} alt="" />
                <p className="text-[#FAC55B]">Identity information</p>
              </div>
              <div className="flex gap-5 items-center">
                <img src={identityVerification} alt="" />
                <p className="text-[#FAC55B]">Verify identity</p>
              </div>
              <div className="flex gap-5 items-center">
                <img src={verifyAddress} alt="" />
                <p className="text-[#FAC55B]">Verify Address</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GlobalSettings = () => {
  return (
    <div>
      <div>global settings</div>
    </div>
  );
};

const Refferal = () => {
  return (
    <div>
      <div>reffereall</div>
    </div>
  );
};

const Coupon = () => {
  return (
    <div>
      <div>Coupon</div>
    </div>
  );
};

const SettingsDisplayarea = (props) => {
  return (
    <div className="px-[3rem] py-[4rem] w-[75%] border-l">
      <div className="text-white flex flex-col gap-5">
        <p className="font-[400] text-[32px] font-[400]">
          {props.settingState}{" "}
        </p>
        {props.component}
      </div>
    </div>
  );
};

const Middle = () => {
  const [settingState, setSettingState] = useState("Account Settings");
  const [component, setComponent] = useState(<AccountSettings />);

  return (
    <div className="bg-[#211F20] flex items-center">
      <SettingsNav
        settingState={settingState}
        setSettingState={setSettingState}
        setComponent={setComponent}
      />
      <SettingsDisplayarea
        component={component}
        settingState={settingState}
        setSettingState={setSettingState}
      />
    </div>
  );
};
const Settings = () => {
  return (
    <div>
      <Top />
      <Middle />
    </div>
  );
};

export default Settings;
