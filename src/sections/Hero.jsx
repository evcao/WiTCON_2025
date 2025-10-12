import React from "react";
import heroComputer from "../assets/heroComputer.jpg";
import Title from "../components/text/Title";
import Subtitle from "../components/text/Subtitle";
import Text from "../components/text/Text";

const Hero = () => {
  return (
    <section className="my-0 grid grid-cols-1 w-[70%] max-w-screen-2xl mx-auto px-6 md:px-18 sm:pt-2 md:pt-4 lg:pt-6 xl:pt-8">
      {/* TOP: Title block centered */}
      <div className="flex flex-col items-center">
        {/* 2 line breaks worth of space */}
        <div className="h- 8 md:h-2" />

        <Title className="text-center text-7xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          WiTCON 2025
        </Title>

        {/* Subtitle on its own line */}
        <Subtitle className="mt-2 text-center">
          WOMEN IN TECHNOLOGY CONFERENCE
        </Subtitle>

        {/* 3 line breaks worth of space */}
        <div className="mt-6" />
      </div>

      {/* Between location and hosted-by: two columns (text left, image right) */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT column: body text + button */}
        <div className="flex flex-col">
          {/* 2 line breaks worth of space before this block */}
          <div className="h-0" />
          <Subtitle className="font-[font-ari] block">March 28th, 2025</Subtitle>
          <Subtitle className="font-[font-ari] block">From 9 AM - 7 PM EST</Subtitle>
          <Subtitle className="font-[font-ari] block">Ballrooms, Graham Center</Subtitle>
          
          <a href="https://lu.ma/hwyplw5v">
            <button className="bg-pink-500 hover:bg-pink-700 active:bg-pink-400 text-white font-[Pixelify_Sans] py-2 px-4 rounded max-w-50 mt-9">
              Register now!
            </button>
          </a>
          <div className="h-10" />
          <Text>Florida’s largest student-led women in tech conference</Text>
          <Text>Hosted by Women in Computer Science at Florida International University </Text>
          <div className="h-7" />

        </div>

        {/* RIGHT column: smaller image aligned to the right */}
        <div className="flex md:justify-end">
          <img
            className="object-cover rounded-4xl w-full max-w-lg md:max-w-lg"
            src={heroComputer}
            alt="Computer in the foreground of a crowd with the words Welcome to WiTCON"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
