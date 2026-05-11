import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ProblemSolution from "../components/Problem";
import FeaturesSection from "../components/Feature";

function Home() {
  return (
    <div className="relative">
      {/* Hero Section with its own background */}
      <section className="min-h-screen relative">
        <Hero />
        <ProblemSolution/>
        <FeaturesSection/>
      </section>

      {/* About Section with its own background */}
     
    </div>
  );
}

export default Home;
