import React from "react";
import "./header.css";
import CV from "../../assets/cv.pdf";
import ME from "../../assets/casual.jpg";
import HeaderSocials from "./HeaderSocials";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Header = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Developer", "Frontend React Developer"],
    });
  }, []);
  return (
    <header>
      <div className="container header__container">
        <h3>Hi There, I'm</h3>
        <h1>Sujit Samal</h1>
        <h3>
          <span style={{color: "pink"}} ref={textRef}></span>
        </h3>
        <div className="cta">
          <a href={CV} download className="btn">
            Download Resume
          </a>
          <a href="#contact" className="btn">
            Connect With Me
          </a>
        </div>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
