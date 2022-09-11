/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const projects = [
  { image: IMG1, title: "Basic Form App" },
  { image: IMG2, title: "Basic Todo App" },
  { image: IMG3, title: "Basic Table App" },
  { image: IMG4, title: "Basic Redux App" },
  { image: IMG5, title: "Basic React App" },
  { image: IMG6, title: "Basic E-Commerce App" },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((item) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href="https://github.com" className="btn" target="_blank">
                  Github
                </a>
                <a href="https://google.com" className="btn" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
