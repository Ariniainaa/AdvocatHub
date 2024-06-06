import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { FaRegUserCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { TbDeviceIpadQuestion } from "react-icons/tb";
import { FaBookBookmark } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import "../Styles/Homepage/Navbar.css";

const Navbar = ({description}) => {
  const location = useLocation();

console.log();
  return (
    <nav className="navbar">
      <div className="navbar-brand">Logo</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}>
            <IoHome className="icon-nav" />
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/document" className={`nav-link ${location.pathname === "/document" ? "active" : ""}`}>
            <FaFileLines className="icon-nav" />
            Document
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/lbc" className={`nav-link ${location.pathname === "/lbc" ? "active" : ""}`}>
            <FaBookBookmark className="icon-nav" />
            LBC/FT
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/faq" className={`nav-link ${location.pathname === "/faq" ? "active" : ""}`}>
            <TbDeviceIpadQuestion className="icon-nav" />
            FAQ
          </Link>
        </li>
      </ul>
      <div>
        <p className="txt">
        {description}
          <FaRegUserCircle className="nav-user" />
        </p>
        <button className="btn-nav">Log out</button>
      </div>
    </nav>
  );
};

export default Navbar;
