import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules"; // Removed Navigation & Pagination
import "../WhatIsWitCon.css";
import slide1 from "../assets/WicsPic1.jpg";
import slide2 from "../assets/WicsPic3.jpg";
import slide3 from "../assets/WicsPic5.jpg";
import slide4 from "../assets/WicsPic6.jpg";
import slide5 from "../assets/WicsPic7.jpg";
import slide6 from "../assets/WicsPic8.jpg";

import WicsPanel from "../assets/WicsPanel.png";
import Subtitle from "../components/text/Subtitle";

const WhatIsWitCon = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
  
  return (
<section className="witcon-section">
  <div className="w-full flex justify-center -mt-10 md:-mt-16">
    <Subtitle className="text-center">
      What is WiTCON?
    </Subtitle>
  </div>

  <div className="content-container mt-[40px]">
    <div className="image-box">
      <img src={WicsPanel} alt="Panel of women in computing" />
    </div>

        <div className="text-box">
          <p>
            WiTCON 2025 is the signature Women in Technology Conference at
            Florida International University.
          </p>
          <br />
          <p>
            Join us at the Graham Center Ballrooms at FIU’s Modesto Maidique Campus
            for a full day of opportunity, learning, networking, 
            and empowerment for underrepresented local talent in tech!
            The event will take place on March 28th, 2025, from 9:00 AM to 7:00 PM.
            We hope to see you there—come support our community, connect with others, 
            and enjoy an inspiring and fun experience with the FIU Tech community!
          </p>
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="swiper-container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          initialSlide={3}
          slideToClickedSlide={true} 
          loop={true}
          speed={10000}
          autoplay={{
            delay:500
          }}
          
          coverflowEffect={{
            rotate: 0,
            stretch: 40,
            depth: 200,
            scale: 0.85,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]} 
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatIsWitCon;
