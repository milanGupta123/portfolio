import React from "react";
import "./About.css";
import ME from "../../assets/photo.jpeg";
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

          <p>
          I am MILAN, a electronics & communication engrineering student at Punjab Technical University. Specialize in Frontend Development with experience in project creation. My interests include automation, web desiging. 
            {/* I want to implement my knowledge & to secure a distinct position in
            the progressive and prestigious organisation, where my skills are
            utilized in a best way with a scope of learning, innovation and
            all-round career development. */}
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
