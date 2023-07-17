import React from "react";
import "./Header.css";
import CTA from "./CTA";
import photo from "../../assets/photo.jpeg";
import Headersocial from "./Headersocial";
const Header = () => {
  return (
    <header>
      {/* <div className="container header_container">
        <h5>Hello I'm</h5>
        <h2>Milan kumar</h2>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA></CTA>
        <Headersocial></Headersocial>
        <div className='me'>
          <img src={photo} className="image" alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div> */}

      <div className="container">
        <div className="header_con">
            <div className="col-md-6">
              <h5>Hello I'm</h5>
              <h2>Milan kumar</h2>
              <h5 className="text-light">Frontend Developer</h5>
              <CTA></CTA>
              <Headersocial></Headersocial>
            </div>
            <div className="col-md-6">
           
              <div className="me">
                <img src={photo} className="image" alt="me" />
              </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
