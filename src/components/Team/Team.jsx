// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Team.css";
import user1 from "../../assets/user-1.png";

const Team = () => {
  return (
    <div className="container">
      <p className="subtitle">\Team\</p>
      <h1 className="tittle">Our Leader</h1>
      <div className="kartu">
        <div className="kartu-item">
          <img src={user1} alt="" />
          <h3>Larry F. Burnett</h3>
          <p>CEO</p>
        </div>
        <div className="kartu-item">
          <img src={user1} alt="" />
          <h3>Larry F. Burnett</h3>
          <p>CEO</p>
        </div>
        <div className="kartu-item">
          <img src={user1} alt="" />
          <h3>Larry F. Burnett</h3>
          <p>CEO</p>
        </div>
        <div className="kartu-item">
          <img src={user1} alt="" />
          <h3>Larry F. Burnett</h3>
          <p>CEO</p>
        </div>
      </div>
      <div className="kartu">
        <div className="kartu-item">
          <img src={user1} alt="" />
          <h3>Larry F. Burnett</h3>
          <p>CEO</p>
        </div>
        <div className="kartu-item">
          <img src={user1} alt="" />
          <h3>Larry F. Burnett</h3>
          <p>CEO</p>
        </div>
        <div className="kartu-item">
          <img src={user1} alt="" />
          <h3>Larry F. Burnett</h3>
          <p>CEO</p>
        </div>
        <div className="kartu-item">
          <img src={user1} alt="" />
          <h3>Larry F. Burnett</h3>
          <p>CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
