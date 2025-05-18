import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Cart from "./pages/cart/Cart";
import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { ToastContainer } from 'react-toastify';
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/myOrders/MyOrders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  
  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup showLogin={showLogin} setShowLogin={setShowLogin}/>:<></>} 
      <div className="app">
        <Navbar setShowLogin = {setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/myorders" element={<MyOrders/>}/>
        </Routes>
        {/* <AppDownload/> */}
      </div>
      
      <Footer />
    </>
  );
};

export default App;
