import React from "react";
import "./Nav.css";
import logo from "../../images/logo.png";

const Nav = () => {
  return (
    <div className="contactpage">
      <div className="navbar">
        <div className="righthead">
          <img src={logo} alt="logo" />
        </div>
        <div className="list">
          <ul className="listelements">
            <li className="pages">Features</li>
            <li className="pages">About Us</li>
            <li className="pages">Blog</li>
            <li className="pages">Virat</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Nav;
