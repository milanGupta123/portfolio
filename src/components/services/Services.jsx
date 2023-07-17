import React from "react";
import "./Services.css";
import { BsCheck2 } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Electronics Projects</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck2 className="service_list-icon"></BsCheck2>
              <p>Robotic Car, using Arduino</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon"></BsCheck2>
              <p>Motion detector, using Arduino</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon"></BsCheck2>
              <p>Mini Radar, using Arduino</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck2 className="service_list-icon"></BsCheck2>
              <p>Dice game, using HTML,CSS and java script</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon"></BsCheck2>
              <p>Music Player, using python</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon"></BsCheck2>
              <p>Real Estate Dashboard, using Angular and Firebase</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon"></BsCheck2>
              <p>Atri Resturant App, using Atri Framework</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon"></BsCheck2>
              <p>E-learning portal using HTML,CSS and java script</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Content</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck2 className="service_list-icon"></BsCheck2>
              <p>Update Soon</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon"></BsCheck2>
              <p>Update Soon</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon"></BsCheck2>
              <p>Update Soon</p>
            </li>
           
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
