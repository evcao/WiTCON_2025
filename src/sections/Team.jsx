import React from "react";
import "../Team.css";
import Subtitle from "../components/text/Subtitle";
import Text from "../components/text/Text";
import Layout from "../Layout";
import Footer from "../sections/Footer.jsx";
// Importing images for each role
import PresidentImg from "../assets/President.png";
import VicePresidentImg from "../assets/VicePresident.png";
import WitconDirectorImg from "../assets/WitconDirector.png";
import WitconCoDirectorImg from "../assets/WitconCoDirector.png";
import WitconIndustry1Img from "../assets/WitconIndustry1.png";
import WitconIndustry2Img from "../assets/WitconIndustry2.png";
import WitconCreativeImg from "../assets/WitconCreative.png";
import WitconWebDevImg from "../assets/WitconWebDev.png";
import WitconLogisticsImg from "../assets/WitconLogistics.png";
import WitconCommsChairImg from "../assets/WitconCommsChair.png";
import WitconTreasurerImg from "../assets/WitconTreasurer.png";
import WitconMarketingImg from "../assets/WitconMarketing.png";

import WICsCreativeDirectorImg from "../assets/WICsCreativeDirector.png";
import WICsCommsDirectorImg from "../assets/WICsCommsDirector.png";
import WICsIndustryRelationsImg from "../assets/WICsIndustryRelations.png";
import WICsLogisticsImg from "../assets/WICsLogistics.png";
import WICsDigitalMediaImg from "../assets/WICsDigitalMedia.png";
import WICsSocialMediaImg from "../assets/WICsSocialMedia.png";
import WICsRSORepImg from "../assets/WICsRSORep.png";
import WICsOutreachDirectorImg from "../assets/WICsOutreachDirector.png";
import WICsCommunityManagerImg from "../assets/WICsCommunityManager.png";
import WICsCreativeChairImg from "../assets/WICsCreativeChair.png";
import WICsWebDeveloperImg from "../assets/WICsWebDeveloper.png";
import WICsWebDeveloper2Img from "../assets/WICsWebDeveloper2.png";
import WICsIndustryRelations2Img from "../assets/WICsIndustryRelations2.png";
import WICsCommsChairImg from "../assets/WICsCommsChair.png";
import WICsFacultyAdvisorImg from "../assets/WICsFacultyAdvisor.png";
import WICsTechLead1Img from "../assets/WICsTechLead1.png";
import WICsTechLead2Img from "../assets/WICsTechLead2.png";
import WICsOutreachChairImg from "../assets/WICsOutreachChair.png";
import WICsAlumniAdvisorImg from "../assets/WICsAlumniAdvisorImg.png";
import WICsMarketingImg from "../assets/WICsMarketing.png";
import WICSIndustryRelationImg from '../assets/WICSIndustryRelation.png';
import DefaultImg from "../assets/WicsPic1.jpg";


// Role-to-image mapping
const witconTeam = [
  { role: "WiTCON Director", name: "Fer Pacheco", image: WitconDirectorImg },
  { role: "WiTCON Co-Director", name: "Meagan Alfaro", image: WitconCoDirectorImg },
  { role: "WiTCON Industry Relations", name: "Devin Diaz", image: WitconIndustry1Img },
  { role: "WiTCON Logistics", name: "Alyaa Mossa", image: WitconLogisticsImg },
  { role: "WiTCON Comms Chair", name: "Alessandra Ortega", image: WitconCommsChairImg },
  { role: "WiTCON Marketing", name: "Natalia Boodhram", image: WitconMarketingImg },
  { role: "WiTCON Treasurer", name: "Helen Gomez", image: WitconTreasurerImg },
  { role: "WiTCON Industry Relations", name: "Gillian Garcia", image: WitconIndustry2Img },
  { role: "WiTCON WebDev", name: "Huong Huynh", image: WitconWebDevImg },
  { role: "WiTCON Tech Lead", name: "Agatha Gonzalez", image: WICsTechLead1Img },
  { role: "WiTCON Mentor", name: "Evelyn Cao", image: WitconCreativeImg },
];

const wicsTeam = [
  { role: "President", name: "Kesia Oliveros", image: PresidentImg },
  { role: "Vice President", name: "Margarita Gutierrez", image: VicePresidentImg },
  { role: "WiCs Creative Director", name: "Anusha Raju", image: WICsCreativeDirectorImg },
  { role: "WiCs Comms Director", name: "Allison Romero", image: WICsCommsDirectorImg },
  { role: "WiCs Industry Relations Director", name: "Emily Salgueiros", image: WICsIndustryRelationsImg },
  { role: "WiCs Logistics Director", name: "Zaya Dixon", image: WICsLogisticsImg },
  { role: "WiCs Digital Media", name: "Laiba Mahmud", image: WICsDigitalMediaImg },
  { role: "WiCs Social Media", name: "Mahi Patel", image: WICsSocialMediaImg },
  { role: "WiCs RSO Rep", name: "Amber Garcia", image: WICsRSORepImg },
  { role: "WiCs Outreach Director", name: "Angela Cruz", image: WICsOutreachDirectorImg },
  { role: "WiCs Community Manager", name: "Gabriela Lopez", image: WICsCommunityManagerImg },
  { role: "WiCs Creative Chair", name: "Pooja Lad", image: WICsCreativeChairImg },
  { role: "WiCs Web Developer", name: "Alex Smith", image: WICsWebDeveloperImg },
  { role: "WiCs Web Developer", name: "Shatoya Gardner", image: WICsWebDeveloper2Img },
  { role: "WiCs Industry Relations", name: "Kemely Alfonso", image: WICsIndustryRelations2Img },
  { role: "WiCs Comms Chair", name: "Manar Alhamad", image: WICsCommsChairImg },
  { role: "WiCs Faculty Advisor", name: "Dr. Agoritsa Polyzou ", image: WICsFacultyAdvisorImg  },
  { role: "WiCs Tech Lead", name: "Jernai Bennett", image: WICsTechLead2Img },
  { role: "WiCs Outreach Chair", name: "Bielky Ruiz", image: WICsOutreachChairImg },
  { role: "WiCs Alumni Advisor", name: "Mareline Ramirez", image: WICsAlumniAdvisorImg },
  { role: "WiCs Marketing", name: "Yana Kostenko", image: WICsMarketingImg },
  { role: "WiCs Industry Relation", name: "Felix Jarquin", image: WICSIndustryRelationImg },

];
{/* <section className="witcon-section">
  <div className="w-full flex justify-center -mt-10 md:-mt-16">
    <Subtitle className="text-center">
      What is WiTCON?
    </Subtitle>
  </div> */}

const Team = () => {
return (
  <Layout>
    <div className="team-container">
      {/* WITCON Team */}
      <div className="team-section">
        <Subtitle> WiTCON Team</Subtitle>

        <div className="team-grid">
          {witconTeam.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image || DefaultImg} alt={member.role} />
              <Text>{member.role}</Text>
              <Text className="team-name">{member.name}</Text>
            </div>
          ))}
        </div>
      </div>

        {/* WiCS Team */}
        <div className="team-section">
          <Subtitle>WiCS Team</Subtitle>
          <div className="team-grid">
            {wicsTeam.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={member.image || DefaultImg} alt={member.role} />
                <Text>{member.role}</Text>
                <Text className="team-name">{member.name}</Text> {/* Display Name */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Team;
