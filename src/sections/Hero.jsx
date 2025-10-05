import React from "react";
import heroComputer from "../assets/heroComputer.jpg";
import Title from "../components/text/Title";
import Subtitle from "../components/text/Subtitle";
import Text from "../components/text/Text";

const Hero = () => {
  return (
    <section className="my-10 grid grid-cols-2 items-center gap-y-10 max-xl:grid-cols-1 w-[90%] max-w-screen-2xl mx-auto px-6 md:px-14 sm:pt-2 md:pt-4 lg:pt-6 xl:pt-8">
      <div className="flex flex-col justify-center">
        <Subtitle>WOMEN IN TECHNOLOGY CONFERENCE</Subtitle>
        <div className="flex gap-x-3">
          <Text className="font-[font-ari]">GRAHAM CENTER</Text>
          <Text className="font-[font-ari]">03/28/2025</Text>
          <Text className="font-[font-ari]">9AM-7PM</Text>
        </div>
        <Title className="text-7xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          WiTCON <br /> 2025
        </Title>
        <Text>Florida’s largest student-led women in tech conference</Text>
        <Text>Hosted by Women in Computer Science at Florida International University</Text>
        <a href="https://lu.ma/hwyplw5v">
          <button className="bg-pink-500 hover:bg-pink-700 active:bg-pink-400 text-white font-[Pixelify_Sans] py-2 px-4 rounded max-w-50 mt-4">
            Register now!
          </button>
        </a>
      </div>
      <div>
        <img
          className="relative object-cover rounded-4xl"
          src={heroComputer}
          alt="Computer in the foreground of a crowd with the words Welcome to WiTCON"
        />
      </div>
    </section>


  );
};

export default Hero;
