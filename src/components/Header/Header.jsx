import React from "react";
import "./header.css";
import CV from "../../assets/cv.pdf";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sujit Samal</h1>
        <h5 className="text-light">Frontend React Developer</h5>
        <div className="cta">
          <a href={CV} download className="btn">
            Download Resume
          </a>
          <a href="#contacts" className="btn">
            Connect With Me
          </a>
        </div>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
