import Hero from "../sections/Hero.jsx";
import Homepage from '../pages/Homepage'
import Layout from '../Layout'
import '../navBar.css';
import Countdown from '../sections/Countdown.jsx';
import WhatIsWitcon from '../sections/WhatIsWitCon';
import Testimonials from '../sections/Testimonials.jsx';
import Sponsors from '../sections/Sponsors.jsx';
import Footer from "../sections/Footer.jsx";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="navbar text-base text-white font-[Pixelify_Sans]">
        <div className="nav-content">
          <a href="#main-content" className="nav-link">Home</a>
          <Link to="/Schedule-section" className="nav-link">Schedule</Link>
          <Link to="/team" className="nav-link">Team</Link>
          <a
            href="https://airtable.com/appE94lSN4LzuVA8T/pag9913jUMrtO3XF1/form"
            className="nav-link"
          >
            Volunteer
          </a>

          {/* "Register" styled as a button but same structure as others */}
          <a
            href="https://lu.ma/hwyplw5v"
            className="nav-link get-started-btn"
            role="button"
            rel="noopener noreferrer"
          >
            Register
          </a>
        </div>
      </div>

      <Layout>
        <div id="main-content" className="main-content">
          <Hero/>
          <div className="Countdown text-base text-white font-[Pixelify_Sans]"><Countdown/></div>
          <div className="WhatIsWitCon text-base text-white font-[Pixelify_Sans]">
            <WhatIsWitcon/>
          </div>
          <div className="Testimonials text-base text-white font-[Pixelify_sans]"><Testimonials/></div>
          <div className="Sponsors text-base text-white font-[Pixelify_sans]"><Sponsors/></div>
          <Homepage/>
        </div>
        <div>

        </div>

      </Layout>
        <Footer></Footer>
    </>
  );
}

export default App; 