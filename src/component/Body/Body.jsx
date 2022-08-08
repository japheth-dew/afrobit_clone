import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../Login/Login';
import Register from '../Register/Register';

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Body