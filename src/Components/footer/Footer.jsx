import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <button className="watch-btn">
          ▶ Watch Intro
        </button>
      </div>

      <div className="footer-content">
        <div className="footer-col">
          <img
            src="https://appsocity.vercel.app/assets/footerlogo-CnMSHknp.png"
            alt="Anchorstone"
            className="footer-logo"
          />

          <p>© 2024 - ANCHORSTONE SOFTWARE SOLUTIONS PVT. LTD.</p>
          <p>All rights reserved - Enc By SNHL</p>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>Product Features</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Further Information</h3>
          <ul>
            <li>Terms & Privacy Policy</li>
            <li>AppSociety Payments</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Download the App</h3>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="store-btn"
          />

          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="store-btn"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;