// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className=" footer">
      <div className="left">
        <h1>About us</h1>
        <hr />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at
        </p>
        <div className="icon">
          <div className="icon-item">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="icon-item">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="icon-item">
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="icon-item">
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
      <div className="middle">
        <h1>Services</h1>
        <hr />
        <ul>
          <li>Web Design/Development</li>
          <li>Web Design/Development</li>
          <li>Web Design/Development</li>
          <li>Web Design/Development</li>
          <li>Web Design/Development</li>
        </ul>
      </div>
      <div className="middleeast">
        <h1>Career</h1>
        <hr />
        <div className="keahlian">
          <div className="icon-item">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="tulisan">
            <p>React</p>
            <p>tulisan</p>
          </div>
        </div>
        <div className="keahlian">
          <div className="icon-item">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="tulisan">
            <p>React</p>
            <p>tulisan</p>
          </div>
        </div>
        <div className="keahlian">
          <div className="icon-item">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="tulisan">
            <p>React</p>
            <p>tulisan</p>
          </div>
        </div>
      </div>
      <div className="right">
        <h1>subscribe Us</h1>
        <hr />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable
        </p>
        <input type="text" placeholder="Enter your email" />
        <br />
        <button className="btn-footer">Submit</button>
      </div>
    </div>
  );
};

export default Footer;
