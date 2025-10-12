import { Routes, Route } from "react-router-dom";
import Team from "../sections/Team";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import FAQs from "./FAQs";
import Schedule from "./Schedule";

const Navigation = () => {
  return (
    <>
    <Navbar />
    <div>
    <Routes>
        <Route path="" element={<Home />} />
        <Route path="/faq-section" element={<Schedule />} />
        <Route path="/team" element={<Team />} />
    </Routes>
    </div>
     
    </>
   
  );
};

export default Navigation;