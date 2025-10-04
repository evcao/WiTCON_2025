import "./index.css";
import React from "react";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Background></Background>
      <main className="relative z-10">{children}</main>
    </div>
  );
};

const Background = () => {
  return (
    <div className="absolute inset-0 bg-black -z-10">
      <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-fuchsia-600 rounded-full blur opacity-70"></div>
      <div className="absolute top-1/4 right-0 w-[30%] h-[30%] bg-green-500 rounded-full blur opacity-70"></div>
      <div className="absolute bottom-1/4 left-0 w-[30%] h-[30%] bg-violet-700 rounded-full filter blur opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-blue-700 rounded-full filter blur opacity-70"></div>
    </div>
  );
};

export default Layout;
