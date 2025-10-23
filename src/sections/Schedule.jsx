"use client";

import React from "react";
import Subtitle from "../components/text/Subtitle";
import Text from "../components/text/Text";
import "../Schedule.css";
import WiTCONCarousel from "../components/WiTCONCarousel";
import Footer from "../sections/Footer";
import Title from "../components/text/Title";

const scheduleData = [
  { time: "9 AM - 1 PM", event: "Priority Check-In", description: "GC Ballrooms Lobby" },
  { time: "10 AM", event: "Opening Ceremony", description: "GC Westballrooms" },
  { time: "11 AM", event: "Women in Tech Panel - Redefining the Standard: Women in Tech Today", description: "GC 140" },
  { time: "12 PM", event: "Lunch + Tabling With Student Orgs", description: "GC Pit" },
  { time: "1 PM - 3 PM", event: "LinkedIn Headshot Photoshoot With CodePath", description: "GC Ballrooms Lobby" },
  { time: "1 PM - 4 PM", event: "Sponsorship Fair", description: "GC Main Ballrooms" },
  { time: "2 PM", event: "UKG: Technical Side Projects", description: "West Ballrooms" },
  { time: "2 PM", event: "Akamai: You too can be a Cyber Analyst!", description: "GC 140" },
  { time: "3 PM", event: "Capital One: Transitioning Into Your Job", description: "West Ballrooms" },
  { time: "3 PM", event: "CodePath: Networking + Elevator Pitches", description: "GC 140" },
  { time: "3 PM", event: "Kaseya: From Beginner to Expert: Essential Soft + Hard Skills for a Tester", description: "GC 243" },
  { time: "4 PM", event: "SWE: Mentorship Session", description: "West Ballrooms" },
  { time: "4 PM", event: "WiCyS: Cyber Quest", description: "GC 140" },
  { time: "4 PM", event: "INIT: Karaoke + Mocktails", description: "GC 243" },
  { time: "5 PM - 7 PM", event: "Social Hour Featuring DJ + Drag Show by PSU", description: "GC Main Ballrooms" },
];

const Schedule = () => {
  return (
    <>
      <section className="schedule-section">
        <div className="schedule-container mx-auto max-w-5xl">
          <div className="text-center">
            <Title className="schedule-title">S c h e d u l e</Title>
            <Subtitle className="schedule-time-range">From 9:00 AM - 7:00 PM</Subtitle>
          </div>

          <div className="schedule-box mt-6 md:mt-12">
            {scheduleData.map((item, index) => (
              <div key={index} className="schedule-row">
                <Text className="schedule-time">{item.time}</Text>
                <Text className="schedule-event">{item.event}</Text>
                <Text className="schedule-description">{item.description}</Text>
              </div>
            ))}
          </div>
          {/* Spacer to push below fixed navbar */}
          <div className="h-24 md:h-32" />

          <WiTCONCarousel />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Schedule;
