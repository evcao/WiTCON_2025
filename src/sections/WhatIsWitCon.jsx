import React from "react";
import "../WhatIsWitCon.css";
import WicsPanel from "../assets/WicsPanel.png";
import Subtitle from "../components/text/Subtitle";

const WhatIsWitCon = () => {
  return (
    <section className="witcon-section">
      <div className="w-full flex justify-center -mt-10 md:-mt-16">
        <Subtitle className="text-center">What is WiTCON?</Subtitle>
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
            Join us at the Graham Center Ballrooms at FIU’s Modesto Maidique
            Campus for a full day of opportunity, learning, networking, and
            empowerment for underrepresented local talent in tech! The event
            will take place on March 28th, 2025, from 9:00 AM to 7:00 PM. We
            hope to see you there—come support our community, connect with
            others, and enjoy an inspiring and fun experience with the FIU Tech
            community!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsWitCon;
