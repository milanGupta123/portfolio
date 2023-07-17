import React from "react";
import "./testimonials.css";
import Avatar1 from "../../assets/avatar.png";
import Avatar2 from "../../assets/avatar.png";
import Avatar3 from "../../assets/avatar.png";
import Avatar4 from "../../assets/avatar.png";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar1,
    name: "milan",
    review:
      "seeking a challenging position in a reputed organisation where i can learn new skill, expand myknowledge and leverage my learning.",
  }
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="clint_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
