import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import navimg from "../images/navimg.png";
import logo from '../images/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState();
  

  const handletoggleclick = () =>{
    setMenuOpen(!menuOpen);
  }


  const navmenuclick =(scrollposition)=> {
    setMenuOpen(false)
    window.scrollTo(0,scrollposition);
  }
  
  return (
    
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={()=> navmenuclick(0)}>
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={handletoggleclick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        
        <li>
        <a href="#home" onClick={() => navmenuclick(0)}>Home</a>
            {/* <NavLink exact to="/" activeClassName="active" onClick={() => { setMenuOpen(false); scrollToTop(); }}>Home</NavLink> */}
          </li>
          
          <li>
          <a href="about" onClick={() => navmenuclick(10000)}>About</a>
            {/* <NavLink to="#about" activeClassName="active" onClick={() => { setMenuOpen(false); scrollToTop(); }}>About Us </NavLink> */}
          </li>

          <li>
          <NavLink to="/Product" activeClassName="active" onClick={() => navmenuclick(2000)}>Products</NavLink>
          </li>
          <li>
          <NavLink to="/ContactUs" activeClassName="active" onClick={() => navmenuclick(3800)}>Contact Us</NavLink>
          </li>
         
      
         
        <img src={navimg} alt="" srcset="" className='nav-img' />
        </ul>

      </div>

    </nav>
  );
};

export default Navbar;
