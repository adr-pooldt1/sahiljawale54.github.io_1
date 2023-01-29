import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay ,Pagination} from "swiper";
import "swiper/css/pagination";
import codechef from "../../img/codechefjpg.jpg";
import hackerrank from "../../img/hackerrank.png";
import hacktoberfest from "../../img/hacto.svg";
import google from "../../img/google.png";

const Testimonial = () => {
  const clients = [
    {
      img: codechef,
      review:
        "Highest rated 4 ⭐ on CodeChef.",
    },
    {
      img: hackerrank,
      review:
        "Gold Badge 5 ⭐ on Hackerrank in Problem Solving, C++ & Java",
    },
    {
      img: hacktoberfest,
      review:
        "Contributed to Open Source projects under HACKTOBERFEST 2022",
    },
    {
      img: google,
      review:
        "Qualified Google Code Jam 22 Qualification round and Participated in Google Kickstart and got a global rank 7k ",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Let's see what I have </span>
        <span>Achieved </span>
        <span>so far...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
        loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;