import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontEndSkills = [
  { skill: "HTML", level: "INTERMEDIATE" },
  { skill: "CSS", level: "INTERMEDIATE" },
  { skill: "REACTJS", level: "INTERMEDIATE" },
  { skill: "JAVASCRIPT", level: "INTERMEDIATE" },
  { skill: "TYPESCRIPT", level: "INTERMEDIATE" },
  { skill: "BOOTSTRAP", level: "INTERMEDIATE" },
  { skill: "MATERIALUI", level: "INTERMEDIATE" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndSkills.map((items) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{items.skill}</h4>
                    <small className="text-light">{items.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {frontEndSkills.map((items) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{items.skill}</h4>
                    <small className="text-light">{items.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
