import React from "react";
import "./Footer.css";
import Github from "../../../assets/github.png";
import Instagram from "../../../assets/instagram.png";
import LinkedIn from "../../../assets/linkedin.png";
import Logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github}></img>
          <img src={Instagram}></img>
          <img src={LinkedIn}></img>
        </div>
        <div className="logo-f">
          <img src={Logo} alt=""></img>
        </div>
      </div>
      <div className="host">
        <h4>
          Created by VV <span className="heart">&hearts;</span>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
