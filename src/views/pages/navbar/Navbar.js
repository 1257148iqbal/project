import React from "react";
import "../../../style/nav.css";
import { Link } from "react-router-dom";
import Logo from '../../../assets/images/React.png';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
       <img src={Logo} alt="Logo"/>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/">Test</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
