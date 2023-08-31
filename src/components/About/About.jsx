import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p>
            I have 3+ years of experience in working on Front End React
            Development with in-depth knowledge of HTML, CSS, Bootstrap,
            Material UI, Javascript/ES6, Typescript, Redux(Middleware as Saga).
            Used testing libraries such as React testing library, Enzyme in JEST
            framework. Also have experience using Cypress for end to end
            testing.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
