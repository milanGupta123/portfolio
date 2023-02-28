import React from "react";
import "./About.css";
import ME from "../../assets/photo.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About imag" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"></FaAward>
              <h5>Experience</h5>
              <small>6+ months working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon"></FiUsers>
              <h5>Clints</h5>
              <small>300</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon"></VscFolderLibrary>
              <h5>Projects</h5>
              <small>4+ Completed Projects</small>
            </article>
          </div>

          <p>
            I want to implement my knowledge & to secure a distinct position in
            the progressive and prestigious organisation, where my skills are
            utilized in a best way with a scope of learning, innovation and
            all-round career development.
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
