import "./Heroimg.css";
import React from "react";
import IntroImg from "../assets/lap.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="intro-img" />
      </div>
      <div className="content">
        <p> HI, WELCOME TO </p>
        <h1>Plus971</h1>

        <Link to="/About" className="btn">
          ABOUT
        </Link>
        <Link to="/Contact" className="btn">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Heroimg;
