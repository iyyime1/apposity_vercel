import React, { useState } from "react";
import "./Sections.css";

const Sections = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Desktop Menu */}
      <div className="sections desktop-menu">
        <div className="sec"><h1>Home</h1></div>
        <div className="sec"><h1>Features</h1></div>
        <div className="sec"><h1>FAQs</h1></div>
        <div className="sec"><h1>Online Accounting Services</h1></div>
        <div className="sec"><h1>AppSociety Payments</h1></div>
        <div className="sec"><h1>Added Services</h1></div>
        <div className="sec"><h1>Articles</h1></div>
        <div className="sec"><h1>Services</h1></div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="sec"><h1>Home</h1></div>
        <div className="sec"><h1>Features</h1></div>
        <div className="sec"><h1>FAQs</h1></div>
        <div className="sec"><h1>Online Accounting Services</h1></div>
        <div className="sec"><h1>AppSociety Payments</h1></div>
        <div className="sec"><h1>Added Services</h1></div>
        <div className="sec"><h1>Articles</h1></div>
        <div className="sec"><h1>Services</h1></div>
      </div>
    </div>
  );
};

export default Sections;