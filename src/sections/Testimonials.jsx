import React, { useState } from 'react';
import Subtitle from "../components/text/Subtitle";
import Text from "../components/text/Text";

const testimonials = [
    {
        name: "Jesse Cline",
        title: "UKG, Sponsor",
        quote: "I look forward to WiTCON all year! There is no other space the matches the energy in the room at WiTCON. It is truly an inspiration to see these women creating community and building space to uplift and empower each other.",
    },
    {
        name: "Karletty Medina",
        title: "CodePath, Community Partner",
        quote: "WiTCON offers an incredible opportunity to connect with students and expose them to what the tech industry seeks. As an organization committed to reprogramming CS education, CodePath values the chance to engage directly with students while collaborating with the amazing WiCS Team. This event plays a crucial role in bringing students together and bridging the gap between education and industry, and we’re grateful to be part of it!",
    },
    {
        name: "Agoritsa Polyzou",
        title: "FIU Professor, Advisor",
        quote: "Each year, WiTCON has been an incredible experience—filled with inspiring sessions, valuable networking, and unforgettable moments. This event is open to all, empowering all, and fostering a community where we can thrive, connect, and grow together!",
    },
    {
        name: "Keren Rivera",
        title: "FIU Student, Attendee",
        quote: "I’ve been going for two years and I love the energy this event brings. The participants are kind, the opportunities are abundant, and the workshops are incredibly valuable!",
    },
];

export default function TestimonialCarousel() {
    return (
<section className="mb-10 max-w-screen-lg mx-auto px-2 pt-6">
  <div className="grid place-items-center">
    <Subtitle className="py-10 text-center">Testimonials</Subtitle>
  </div>
            <div className="w-full max-w-30xl align-center mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 p-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index}
                         className="p-6 bg-white/10 bg-opacity-70 shadow-lg rounded-xl flex flex-col justify-center text-center items-center space-y-4 hover:scale-105 transition-transform duration-300">
                        <Text className="text-lg text-black-800 italic">"{testimonial.quote}"</Text>
                        <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
                        <Text className="text-black-600">{testimonial.title}</Text>
                    </div>
                ))}
            </div>
        </section>
    );
}
