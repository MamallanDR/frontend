import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Users from './pages/Users';


const Router = () => {
  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={< Register/>} />
        <Route path="/users" element={<Users />} />
      </Routes>
  )
}

export default Router