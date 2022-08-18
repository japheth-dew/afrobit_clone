import React from 'react'
import { Routes, Route } from "react-router-dom";
import Earn from '../Earn/Earn';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Trade from '../Trade/Trade';

const Body = () => {
  return (
    <div className="bg-[#363636]  h-auto">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="earn" element={<Earn />} />
        <Route path="trade/*" element={<Trade />} />
      </Routes>
    </div>
  );
}

export default Body