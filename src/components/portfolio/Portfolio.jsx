import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.webp";
import IMG2 from "../../assets/portfolio2.webp";
import IMG3 from "../../assets/portfolio3.webp";
import IMG4 from "../../assets/portfolio4.webp";
import IMG5 from "../../assets/portfolio5.webp";
import IMG6 from "../../assets/portfolio6.webp";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is the Portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is the Portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is the Portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is the Portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is the Portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is the Portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;