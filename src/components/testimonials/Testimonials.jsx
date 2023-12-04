import React from "react";
import "./testimonials.css";
import certificate from "../../assets/certificate.pdf"


const testimonials = () => {
  return (
    <section id="testimonials">   
      <h2>Testimonials</h2>
      <div className="container testimonials_container">
        <div className="testimonial">

        We found you extremely inquisitive and hardworking. you were very much intrested in learning the functions of our Core Division 
        and also putting your best efforts into Understanding and getting an in-depth idea of our company's processes.
          
          <hr /> 
          Your association was very fruitful to us and we wish you all the very best in your future endeavors.
          <hr /> <br />
          <a href={certificate} download className='btn'>Certificate</a>
          </div>
        
        </div>
    
    </section>
  );
};

export default testimonials;
