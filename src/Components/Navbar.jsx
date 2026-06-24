import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./src/assets/logo-DgqCCVhU.png" alt="logo" />
      </div>
      <div className="buttons">
        <button className="but1">My Society</button>
        <button className="but2">Contact Us</button>
        <button className="but3">Free Subscription</button>
      </div>
    </div>
  )
}

export default Navbar
