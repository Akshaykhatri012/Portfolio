import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_7 from "../Cards/Card7";
import slide_image_1 from "../Cards/Card1";
import slide_image_2 from "../Cards/Card2";
import slide_image_3 from "../Cards/Card3";
import slide_image_4 from "../Cards/Card4";
import slide_image_5 from "../Cards/Card5";
// import slide_image_6 from "../Cards/Card6";

function Projects() {
  return (
    <div className="container-slider" id="projects">
      <h1 className="heading">My Projects</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>{slide_image_7}</SwiperSlide>
        <SwiperSlide>{slide_image_1}</SwiperSlide>
        <SwiperSlide>{slide_image_2}</SwiperSlide>
        <SwiperSlide>{slide_image_3}</SwiperSlide>
        <SwiperSlide>{slide_image_4}</SwiperSlide>
        <SwiperSlide>{slide_image_5}</SwiperSlide>
        {/* <SwiperSlide>{slide_image_6}</SwiperSlide> */}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </Swiper>
    </div>
  );
}

export default Projects;
