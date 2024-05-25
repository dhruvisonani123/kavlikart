import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import navimg from "../images/navimg.png";
import logo from '../images/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        
        <li>
            <NavLink exact to="/" activeClassName="active" onClick={() => { setMenuOpen(false); scrollToTop(); }}>Home</NavLink>
          </li>
          
          <li>
            <NavLink to="/AboutUs " activeClassName="active" onClick={() => { setMenuOpen(false); scrollToTop(); }}>About Us </NavLink>
          </li>
          <li>
            <NavLink to="/Products" activeClassName="active" onClick={() => { setMenuOpen(false); scrollToTop(); }}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs" activeClassName="active" onClick={() => { setMenuOpen(false); scrollToTop(); }}>Contact Us</NavLink>
          </li>
         
      
         
        <img src={navimg} alt="" srcset="" />
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
