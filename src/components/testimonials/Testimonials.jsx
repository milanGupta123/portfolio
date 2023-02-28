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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione nesciunt veritatis similique illum molestias. Non possimus est ea atque quaerat dignissimos hic, minima impedit eaque provident itaque, aliquam assumenda.",
  },
  {
    avatar: Avatar2,
    name: "nitesh",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione nesciunt veritatis similique illum molestias. Non possimus est ea atque quaerat dignissimos hic, minima impedit eaque provident itaque, aliquam assumenda.",
  },
  {
    avatar: Avatar3,
    name: "ravi",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione nesciunt veritatis similique illum molestias. Non possimus est ea atque quaerat dignissimos hic, minima impedit eaque provident itaque, aliquam assumenda.",
  },
  {
    avatar: Avatar4,
    name: "anup",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione nesciunt veritatis similique illum molestias. Non possimus est ea atque quaerat dignissimos hic, minima impedit eaque provident itaque, aliquam assumenda.",
  },
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
