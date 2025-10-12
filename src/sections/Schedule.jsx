"use client";

import React from "react";
import Subtitle from "../components/text/Subtitle";
import Text from "../components/text/Text";
import "../Schedule.css";
import WiTCONCarousel from "../components/WiTCONCarousel"; // <— import the new component

const scheduleData = [
  { time: "9AM-1PM", event: "Priority Check-In", description: "GC Ballrooms Lobby" },
  { time: "10AM", event: "Opening Ceremony", description: "GC Westballrooms" },
  { time: "11AM", event: "Women in Tech Panel - Redefining the Standard: Women in Tech Today", description: "GC 140" },
  { time: "12PM", event: "Lunch + Tabling With Student Orgs", description: "GC Pit" },
  { time: "1PM-3PM", event: "LinkedIn Headshot Photoshoot With CodePath", description: "GC Ballrooms Lobby" },
  { time: "1PM-4PM", event: "Sponsorship Fair", description: "GC Main Ballrooms" },
  { time: "2PM", event: "UKG: Technical Side Projects", description: "West Ballrooms" },
  { time: "2PM", event: "Akamai: You too can be a Cyber Analyst!", description: "GC 140" },
  { time: "3PM", event: "Capital One: Transitioning Into Your Job", description: "West Ballrooms" },
  { time: "3PM", event: "CodePath: Networking + Elevator Pitches", description: "GC 140" },
  { time: "3PM", event: "Kaseya: From Beginner to Expert: Essential Soft + Hard Skills for a Tester", description: "GC 243" },
  { time: "4PM", event: "SWE: Mentorship Session", description: "West Ballrooms" },
  { time: "4PM", event: "WiCyS: Cyber Quest", description: "GC 140" },
  { time: "4PM", event: "INIT: Karaoke + Mocktails", description: "GC 243" },
  { time: "5PM-7PM", event: "Social Hour Featuring DJ + Drag Show by PSU", description: "GC Main Ballrooms" },
];

const Schedule = () => {
  return (
    <>
      {/* Carousel on top */}
      <WiTCONCarousel />

      {/* Schedule below */}
      <section className="schedule-section">
        <div className="schedule-container">
          <Subtitle className="schedule-title">Schedule</Subtitle>
          <Text className="schedule-time-range">From 9:00 AM - 7:00 PM</Text>

          <div className="schedule-box">
            {scheduleData.map((item, index) => (
              <div key={index} className="schedule-row">
                <Text className="schedule-time">{item.time}</Text>
                <Text className="schedule-event">{item.event}</Text>
                <Text className="schedule-description">{item.description}</Text>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
