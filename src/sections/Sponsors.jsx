import React from 'react';
import Subtitle from '../components/text/Subtitle.jsx';
import Akamai from '../assets/Company logos/Akamai.png';
import CapitalOne from '../assets/Company logos/CapitalOne.png';
import BreakThroughTech from '../assets/Company logos/BreakThroughTech.png';
import Cisco from '../assets/Company logos/Cisco.png';
import Google from '../assets/Company logos/Google.png';
import UKG from '../assets/Company logos/UKG.png';
import Microsoft from '../assets/Company logos/Microsoft.png';
import CodePath from '../assets/Company logos/CodePath.png';
import FIUCEC from '../assets/Company logos/FIUCEC.png';
import RewriteTheCode from '../assets/Company logos/RewriteTheCode.png';
import Kaseya from '../assets/Company logos/Kaseya.png';
import Celsius from '../assets/Company logos/Celsius.png';
import wicsLogo from "../assets/wicsLogo.svg";

const sponsors = [
  { name: "Akamai", logo: Akamai },
  { name: "Capital One", logo: CapitalOne },
  { name: "Google", logo: Google },
  { name: "Microsoft", logo: Microsoft },
  { name: "Cisco", logo: Cisco },
  { name: "UKG", logo: UKG },
  { name: "Kaseya", logo: Kaseya },
];

const communitySponsors = [
  { name: "Break Through Tech", logo: BreakThroughTech },
  { name: "Code Path Org", logo: CodePath },
  { name: "Rewriting the Code", logo: RewriteTheCode },
  { name: "FIU College of Engineering and Computing", logo: FIUCEC },
  { name: "Celsius", logo: Celsius },
];

export default function SponsorsSection() {
  return (
    <section className="mb-10 max-w-screen-xl mx-auto pt-6">
      <div className="grid place-items-center">
        <Subtitle className="py-10 text-center">Our Sponsors</Subtitle>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 items-center justify-center">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-52 h-52 flex items-center justify-center overflow-hidden">
              <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain" />
            </div>
          </div>
        ))}
      </div>
      
<div className="grid place-items-center mt-24 md:mt-32 pb-8 md:pb-12">
  <Subtitle className="text-center mb-0">Our Community Partners</Subtitle>
</div>

<div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-20 items-center justify-center">
  {communitySponsors.map((sponsor, index) => (
    <div key={index} className="flex justify-center">
      <div className="w-52 h-52 flex items-center justify-center overflow-hidden">
        <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain" />
      </div>
    </div>
  ))}
</div>


      {/* WiCS logo at the very bottom */}
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src={wicsLogo}
          alt="WiCS (Women in Computer Science) logo"
          className="w-40 md:w-48 lg:w-56 h-auto my-12 object-contain"
        />
      </div>
    </section>
  );
}
