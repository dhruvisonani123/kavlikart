import React from 'react'
import "../styles/Footer.css"
import logo from "../images/logo.png"
const Footer = () => {
  return (
    <>
    

      <div className="footer-container">
        <div className="footer">
        <div className="footer-list">

<img src={logo} alt="" srcset="" />
<div className="list">
    <li>Home</li>
    <li>About Us</li>
    <li>Product</li>
    <li>Contact us</li>
</div>
<p className="copyright">Copyrights © 2024 Kavlikart All rights reserved.</p>
        </div>

      </div>
      </div>

    </>
  )
}

export default Footer
