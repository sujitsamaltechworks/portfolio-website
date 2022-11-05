import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experience</h4>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUser className="about__icon" />
              <h4>Clients</h4>
              <small>3+ Clients Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h4><a href="#portfolio">Projects</a></h4>
              <small>4+ Projects</small>
            </article>
          </div>
          <p>
            I have 2+ years of experience in working on Front End React
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
