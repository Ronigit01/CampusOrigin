import React from "react";
import {
  Code2,
  Palette,
  Database,
  Globe,
  Smartphone,
  Cpu,
  Camera,
  Music2,
  BookOpen,
  Briefcase,
  Rocket,
  Shield,
  PenTool,
  Brain,
  Users,
  ArrowRight,
  Sparkles,
  GraduationCap,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function Communities() {
  const communities = [
    {
      title: "Frontend Developers",
      desc: "React, Tailwind, UI animations, and frontend projects.",
      icon: Globe,
      members: "1.2K+ Students",
      gradient: "from-cyan-400 to-blue-500",
    },

    {
      title: "Backend Developers",
      desc: "Node.js, APIs, MongoDB, authentication, and server architecture.",
      icon: Database,
      members: "980+ Students",
      gradient: "from-purple-400 to-pink-500",
    },

    {
      title: "Full Stack Developers",
      desc: "Build complete web applications from frontend to backend.",
      icon: Code2,
      members: "1.5K+ Students",
      gradient: "from-pink-400 to-fuchsia-500",
    },

    {
      title: "UI/UX Designers",
      desc: "Design systems, Figma, prototyping, and user experience.",
      icon: Palette,
      members: "760+ Students",
      gradient: "from-orange-400 to-pink-500",
    },

    {
      title: "Java Developers",
      desc: "Java, Spring Boot, DSA, and backend engineering discussions.",
      icon: Cpu,
      members: "640+ Students",
      gradient: "from-yellow-400 to-orange-500",
    },

    {
      title: "Android Developers",
      desc: "Android Studio, Kotlin, Firebase, and mobile app projects.",
      icon: Smartphone,
      members: "850+ Students",
      gradient: "from-green-400 to-cyan-500",
    },

    {
      title: "Cyber Security",
      desc: "Ethical hacking, networking, Linux, and cyber awareness.",
      icon: Shield,
      members: "540+ Students",
      gradient: "from-red-400 to-orange-500",
    },

    {
      title: "AI & Machine Learning",
      desc: "Python, AI tools, machine learning, and GenAI discussions.",
      icon: Brain,
      members: "1K+ Students",
      gradient: "from-cyan-400 to-purple-500",
    },

    {
      title: "Startup Community",
      desc: "Build startups, pitch ideas, and connect with founders.",
      icon: Rocket,
      members: "470+ Students",
      gradient: "from-pink-400 to-rose-500",
    },

    {
      title: "Photography Club",
      desc: "Photography, editing, reels, and creative content creation.",
      icon: Camera,
      members: "390+ Students",
      gradient: "from-indigo-400 to-purple-500",
    },

    {
      title: "Music Community",
      desc: "Singers, musicians, bands, and campus music collaborations.",
      icon: Music2,
      members: "430+ Students",
      gradient: "from-fuchsia-400 to-pink-500",
    },

    {
      title: "Business & Finance",
      desc: "Business ideas, finance learning, and entrepreneurship talks.",
      icon: Briefcase,
      members: "510+ Students",
      gradient: "from-emerald-400 to-cyan-500",
    },

    {
      title: "Content Creators",
      desc: "YouTube, Instagram, editing, branding, and creator growth.",
      icon: PenTool,
      members: "620+ Students",
      gradient: "from-yellow-400 to-pink-500",
    },

    {
      title: "Study Community",
      desc: "Notes sharing, study groups, exams, and productivity.",
      icon: BookOpen,
      members: "1.8K+ Students",
      gradient: "from-blue-400 to-cyan-500",
    },

    {
      title: "Campus Events",
      desc: "Fest updates, hackathons, workshops, and campus activities.",
      icon: Users,
      members: "2K+ Students",
      gradient: "from-purple-400 to-indigo-500",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-black overflow-hidden py-32">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/10 blur-[160px] rounded-full"></div>

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* HERO */}
          <div className="text-center mb-28">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-cyan-300" />

              <span className="text-sm text-cyan-300 font-medium tracking-wide">
                Campus Communities
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
              Explore Student
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-3">
                Communities & Groups
              </span>
            </h1>

            <p className="max-w-4xl mx-auto text-gray-400 text-lg md:text-xl mt-8 leading-relaxed">
              Join communities based on your interests, skills, passion,
              academics, creativity, coding, startups, music, design, and more.
              Connect with students who think like you.
            </p>

            {/* CTA */}
            <div className="flex items-center justify-center mt-12">
              <NavLink
                to="/register"
                className="group relative overflow-hidden rounded-full p-[1px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"></div>

                <div className="relative px-8 py-4 rounded-full bg-black text-white font-medium flex items-center gap-3">
                  Join Communities
                  <ArrowRight className="w-5 h-5" />
                </div>
              </NavLink>
            </div>
          </div>

          {/* TOP INFO */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: Users,
                title: "Connect With Students",
                desc: "Meet students from different years, departments, and skills.",
              },

              {
                icon: GraduationCap,
                title: "Learn & Collaborate",
                desc: "Build projects, share ideas, and learn together in groups.",
              },

              {
                icon: Rocket,
                title: "Grow Faster",
                desc: "Communities help students grow faster through collaboration.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-purple-500/[0.03]"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 p-[1px] mb-8">
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COMMUNITY CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {communities.map((community, index) => {
              const Icon = community.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-8 hover:-translate-y-2 hover:border-cyan-400/20 transition-all duration-500"
                >
                  {/* Glow */}
                  <div
                    className={`absolute -top-20 -right-20 w-52 h-52 bg-gradient-to-br ${community.gradient} opacity-10 blur-[120px] rounded-full`}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${community.gradient} p-[1px] mb-8`}
                    >
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {community.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-gray-400 leading-relaxed">
                      {community.desc}
                    </p>

                    {/* Members */}
                    <div className="mt-7 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
                      <Users className="w-4 h-4 text-cyan-300" />

                      <span className="text-sm text-gray-300">
                        {community.members}
                      </span>
                    </div>

                    {/* Button */}
                    <button className="group/btn relative w-full overflow-hidden rounded-2xl p-[1px] mt-8">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${community.gradient}`}
                      ></div>

                      <div className="relative h-14 rounded-2xl bg-black flex items-center justify-center gap-3 text-white font-medium">
                        Join Community
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition" />
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM CTA */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl mt-32 p-14 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-purple-500/[0.05] to-pink-500/[0.05]"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
                Find Your
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                  Campus Tribe
                </span>
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-relaxed">
                Communities help students collaborate, build friendships, create
                projects, learn together, and grow beyond academics inside one
                connected campus ecosystem.
              </p>

              <div className="flex items-center justify-center mt-12">
                <NavLink
                  to="/register"
                  className="group relative overflow-hidden rounded-full p-[1px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"></div>

                  <div className="relative px-8 py-4 rounded-full bg-black text-white font-medium flex items-center gap-3">
                    Explore Communities
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Communities;
