import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="left">
          <img src={assets.logo} alt="logo" />
          <p>
          Tomato is your trusted partner in delivering delicious meals, crafted with passion and delivered with care.
          </p>
          <div className="social-icon">
            <img src={assets.facebook_icon} alt="facebook_icon" />
            <img src={assets.twitter_icon} alt="twitter_icon" />
            <img src={assets.linkedin_icon} alt="linkedin_icon" />
          </div>
          </div>
          <div className="centre">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        
        <div className="right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9876543210</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
        <hr />
      </div>
      <p className="copyright">Copyright 2025 © - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
