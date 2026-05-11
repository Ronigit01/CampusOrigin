import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ProblemSolution from "../components/Problem";
import FeaturesSection from "../components/Feature";
import WhyCampusDifferent from "../components/WhyCampusDifferent";
import HowCampusWorks from "../components/HowCampusWorks";
import StudentBenefits from "../components/StudentBenefits";

function Home() {
  return (
    <div className="relative">
      {/* Hero Section with its own background */}
      <section className="min-h-screen relative">
        <Hero />
        <ProblemSolution/>
        <FeaturesSection/>
        <WhyCampusDifferent/>
        <HowCampusWorks/>
        <StudentBenefits/>
      </section>

      {/* About Section with its own background */}
     
    </div>
  );
}

export default Home;
