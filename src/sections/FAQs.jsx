import React, { useState } from "react";
import Subtitle from "../components/text/Subtitle";
import Text from "../components/text/Text";
import "../FAQs.css"; // Adjust the path if needed


const FAQs = () => {
  const faqs = [
    { question: "Who can attend?", answer: "The conference is free and open to all students interested in technology, networking, and empowerment, with a focus on celebrating and supporting women in the tech field" },
    { question: "Where can I register?", answer: (
      <>
        You can register for the event by clicking on the following link:{" "}
        <a href="https://lu.ma/hwyplw5v" target="_blank" rel="noopener noreferrer" className="faq-link">
          https://lu.ma/hwyplw5v
        </a>
      </>
    ), },
    { question: "When and where will the event be held?", answer: (
      <>
        When: March 28th, 2025, from 9AM to 7PM <br/>
        Where: Graham Center Ballrooms <br/><br/>
               10955 SW 15th St <br/>
               Miami, FL 33199 <br/>
               FIU Modesto Maidique Campus
      </>
    ),
  },
    { question: "Where do I park?", answer: (
      <>
      Not an FIU Student? Email us to register for parking at&nbsp;
      <a href="mailto:wics@fiu.edu" target="_blank" rel="noopener noreferrer" className="faq-link">
      wics@fiu.edu
      </a>
      <br /> <br/>
      <a href="https://maps.app.goo.gl/PdyrwhGaaGSaEqrX8?g_st=ic" target="_blank" rel="noopener noreferrer" className="faq-link">
      Blue Parking Garage
      </a>
      <br />
      10880 SW 16 ST, Miami, FL 33174
      <br />
      <br />
      <a href="https://maps.app.goo.gl/ZvGJMHQcLbBnGVQL9?g_st=ic" target="_blank" rel="noopener noreferrer" className="faq-link">
      Gold Parking Garage
      </a>
      <br />
      10720 SW 16 ST, Miami, FL 33165 <br></br>
      <br></br>Disclaimer: you will need to register for free parking before arriving to FIU. Parking registrations after the event will not be accepted. WiCS FIU is not responsible to parking reimbursement outside of the following allowed garages
    </>
    ),
  },
  { question: "Where can I update my resume?", answer: "Please check your email inbox for your registration confirmation email. In there will be a link to update/submit your resume!"},
    { question: "Do I need experience to participate?", answer: "Not at all! You do not have to have any experience in technology or be a tech major to attend and enjoy WiTCON. WiTCON will have engaging workshops and empowering panels that will be beneficial for all future professionals interested in learning!" },
    { question: "Do I have to stay at the event the entire time?", answer: "You are free to attend the parts of the event that most interest you. But make sure to arrive by 1 pm to secure your spot! After 1 pm, we will open up to attendees on the waitlist and we cannot guarantee you entrance."},
    { question: "What do I need to bring to the conference?", answer: (
      <ul>
        <li>- FIU ID / Official Identification</li>
        <li>- Note-taking Materials</li>
        <li>- Resume/Business Cards</li>
        <li>- Charged Electronic Devices</li>
        <li>- Comfortable Attire and Footwear</li>
        <li>- A Positive Attitude!</li>
      </ul>
    ),},
    { question: "Who is organizing WiTCON25?", answer: (
      <>
        WiTCON 2025 is organized by{' '}
        <a href="https://wics.cs.fiu.edu/" target="_blank" rel="noopener noreferrer" className="faq-link">
          Women in Computer Science&nbsp;
        </a>
        from Florida International University.
      </>
    ),},
    { question: "How can I stay updated about WiTCON?", answer: (
      <>
        For the latest updates, keep an eye on your email after registering, and follow our social media!{' '}
        <a href="https://linktr.ee/wicsfiu" target="_blank" rel="noopener noreferrer" className="faq-link">
          https://linktr.ee/wicsfiu
        </a>
      </>
    ),},
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<section className="faq-section">
  <div className="faq-container mx-auto max-w-10xl text-left space-y-16 md:space-y-10">
    {/* Title only */}
    <div className="w-full text-center">
      <Subtitle className="text-3xl font-bold mb-8 text-white">
        FAQs
      </Subtitle>
    </div>

    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
          <div className="flex justify-between items-center">
            <Text className="faq-question">{faq.question}</Text>
            <span className="text-xl text-white">{openIndex === index ? "−" : "+"}</span>
          </div>
          {openIndex === index && (
            <Text className="faq-answer">{faq.answer}</Text>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default FAQs;


