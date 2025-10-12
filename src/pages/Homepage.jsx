import React from "react";
import Subtitle from "../components/text/Subtitle";
import wicsLogo from "../assets/wicsLogo.svg";
import FAQs from "../sections/FAQs";

const Homepage = () => {
  return (
    <>
     <div id="faq-section">
        <FAQs />
      </div>
      
      <div className="flex flex-col items-center justify-center text-center">
        <img className="max-w-50 max-h-50 my-10" src={wicsLogo} />
      </div>
    </>
  );
};

export default Homepage;
