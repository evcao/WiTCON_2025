"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

// Images (same six from WhatIsWitCon)
import slide1 from "../assets/WicsPic1.jpg";
import slide2 from "../assets/WicsPic3.jpg";
import slide3 from "../assets/WicsPic5.jpg";
import slide4 from "../assets/WicsPic6.jpg";
import slide5 from "../assets/WicsPic7.jpg";
import slide6 from "../assets/WicsPic8.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

export default function WitconCarousel() {
  return (
    <div className="swiper-container">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={2}
        initialSlide={3}
        slideToClickedSlide
        loop
        speed={10000}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 40,
          depth: 200,
          scale: 0.85,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
