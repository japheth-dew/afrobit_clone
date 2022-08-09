import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../Login/Login';
import Register from '../Register/Register';

const Body = () => {
  return (
    <div className="bg-[#363636] pb-[4rem] h-auto">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Body