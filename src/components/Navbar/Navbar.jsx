// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="container">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>About</li>
        <li>Our Service</li>
        <li>Portofolio</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <button className="btn">Get In Touch</button>
    </nav>
  );
};

export default Navbar;
