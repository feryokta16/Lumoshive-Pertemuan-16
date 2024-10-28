import React from "react";
import "./Hero.css";
import hero from "../../assets/image.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-left">
        <img className="img" src={hero} alt="" />
      </div>
      <div className="hero-right">
        <p className="p-1">\About us\</p>
        <h1>One of the Fastest Way to Business Growth</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed
        </p>
        <div className="card">
          <div className="card-left">
            <img className="img-bulet" src={hero} alt="" />
          </div>
          <div className="card-right container">
            <h2>Get Instant Professional Advice</h2>
            <p>
              Ready to Help : <span>+1 356 678 7897</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
