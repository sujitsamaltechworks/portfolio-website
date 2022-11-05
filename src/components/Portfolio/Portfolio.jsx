/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/weather-app.png";
import IMG2 from "../../assets/Technosocial App.png";

const projects = [
  {
    image: IMG2,
    title: "Technosocial App",
    gitHub: "https://github.com/sujitsamaltechworks/social-media-react",
  },
  {
    image: IMG1,
    title: "Weather App",
    gitHub: "https://github.com/sujitsamaltechworks/weather-app",
    liveDemo: "https://thriving-pika-49efa6.netlify.app/",
  },
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
                <a href={item.gitHub} className="btn" target="_blank">
                  Github
                </a>
                {item.liveDemo ? (
                  <a href={item.liveDemo} className="btn" target="_blank">
                    Live Demo
                  </a>
                ) : (
                  <div />
                )}
              </div>
              {!item.liveDemo ? (
                <h4 style={{ color: "red" }}>
                  Live Demo is down due to deployment issues. Please visit
                  github repo to access the code
                </h4>
              ) : (
                <div />
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
