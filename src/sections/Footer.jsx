import React from "react";
import "../Footer.css"; // Ensure this CSS file exists
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Twitter from "../assets/Twitter.png";

const Footer = () => {
  return (
    <div className="footer-container text-base text-white font-[public/fonts/ari/ari-w9500-condensed-bold.ttf]">
      <div className="footer-content">
        <a href="#" className="footer-link">
          Stay Up To Date with our News and Notifications
        </a>
        <div className="social-icons">
          <a href="https://www.instagram.com/wicsfiu/?hl=en">
            <img className="icon-img" src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/wicsatfiu/">
            <img className="icon-img" src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://x.com/WICSFIU">
            <img className="icon-img" src={Twitter} alt="Twitter" />
          </a>
        </div>
        <div className="footer-coc mt-4">
          By registering for WiTCON, all attendees agree to abide by our  
          <a href="https://www.canva.com/design/DAGiAeroyRg/sgw_B4YqYS8Cp9nukjTMRA/view?utm_content=DAGiAeroyRg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he6a830c535).%22" className="underline text-white hover:text-[#AC05FF]"> Code of Conduct
          </a>.
        </div>
      </div>
    </div>
  );
};

export default Footer;
