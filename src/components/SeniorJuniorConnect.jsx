import React from "react";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Users,
  MessageCircle,
  BookOpen,
  Rocket,
  CheckCircle2,
  Code2,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function SeniorJuniorConnect() {
  const seniors = [
    {
      name: "Arjun Mehta",
      role: "Frontend Developer",
      company: "SDE Intern @ Startup",
      year: "4th Year CSE",
      location: "SVU Campus",
      skills: ["React", "DSA", "Projects"],
      help: "Frontend + Placement Guidance",
    },

    {
      name: "Rahul Verma",
      role: "Placement Preparation",
      company: "Not Placed Yet",
      year: "4th Year IT",
      location: "SVU Campus",
      skills: ["Aptitude", "Core CS", "DSA"],
      help: "Placement Preparation",
    },

    {
      name: "Kunal Sharma",
      role: "UI/UX Designer",
      company: "Freelancer",
      year: "3rd Year CSE",
      location: "SVU Campus",
      skills: ["Figma", "Branding", "UI"],
      help: "Design + Portfolio Review",
    },

    {
      name: "Dev Patel",
      role: "Backend Developer",
      company: "Node.js Learner",
      year: "4th Year CSE",
      location: "SVU Campus",
      skills: ["Node.js", "MongoDB", "APIs"],
      help: "Backend + Projects",
    },

    {
      name: "Aditya Singh",
      role: "ML Enthusiast",
      company: "Open Source Contributor",
      year: "3rd Year AI & DS",
      location: "SVU Campus",
      skills: ["Python", "AI", "ML"],
      help: "AI + Python Roadmaps",
    },

    {
      name: "Rohit Nair",
      role: "Android Developer",
      company: "Internship Seeker",
      year: "4th Year CSE",
      location: "SVU Campus",
      skills: ["Android", "Firebase", "Java"],
      help: "Android + Internship Tips",
    },

    {
      name: "Yash Raj",
      role: "Cyber Security Learner",
      company: "Student",
      year: "3rd Year IT",
      location: "SVU Campus",
      skills: ["Linux", "Security", "Networking"],
      help: "Cyber Security Basics",
    },

    {
      name: "Nikhil Joshi",
      role: "Full Stack Developer",
      company: "Freelancer",
      year: "4th Year CSE",
      location: "SVU Campus",
      skills: ["React", "Node", "MongoDB"],
      help: "Fullstack Projects",
    },
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: "Senior Mentorship",
      desc: "Learn directly from seniors who already faced placements, projects, internships, and academics.",
    },

    {
      icon: Code2,
      title: "Coding Guidance",
      desc: "Get support for DSA, development, projects, freelancing, hackathons, and technical growth.",
    },

    {
      icon: Rocket,
      title: "Career Growth",
      desc: "Build stronger career direction with roadmap guidance and real student experiences.",
    },
  ];

  const helps = [
    "Resume Reviews",
    "Placement Preparation",
    "DSA Roadmaps",
    "Project Guidance",
    "Hackathon Teams",
    "Internship Help",
    "LinkedIn Optimization",
    "Freelancing Guidance",
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
          <div className="text-center mb-32">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-cyan-300" />

              <span className="text-sm text-cyan-300 font-medium tracking-wide">
                Senior-Junior Ecosystem
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
              Learn Faster With
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-3">
                Senior Guidance
              </span>
            </h1>

            <p className="max-w-4xl mx-auto text-gray-400 text-lg md:text-xl mt-8 leading-relaxed">
              Connect with seniors from your campus for placements, internships,
              projects, coding guidance, freelancing support, resume reviews,
              and real student mentorship.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
              <NavLink
                to="/register"
                className="group relative overflow-hidden rounded-full p-[1px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"></div>

                <div className="relative px-8 py-4 rounded-full bg-black text-white font-medium flex items-center gap-3">
                  Join As Junior
                  <ArrowRight className="w-5 h-5" />
                </div>
              </NavLink>

              <NavLink
                to="/register"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white hover:border-cyan-400/30 transition"
              >
                Join As Senior
              </NavLink>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="grid lg:grid-cols-3 gap-8 mb-32">
            {benefits.map((item, index) => {
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

          {/* SECTION TITLE */}
          <div className="flex items-center justify-between mb-14">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white">
                Featured Seniors
              </h2>

              <p className="text-gray-400 mt-3">
                Verified student mentors from SVU Campus.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10">
              <ShieldCheck className="w-4 h-4 text-green-300" />

              <span className="text-sm text-green-300">Verified Students</span>
            </div>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {seniors.map((senior, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-8 hover:border-cyan-400/20 transition-all duration-500"
              >
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-52 h-52 bg-cyan-500/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10">
                  {/* TOP */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-5">
                      {/* Avatar */}
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-500 p-[1px]">
                        <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center">
                          <span className="text-2xl font-semibold text-white">
                            {senior.name.charAt(0)}
                          </span>
                        </div>
                      </div>

                      {/* INFO */}
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {senior.name}
                        </h3>

                        <p className="text-cyan-300 mt-1">{senior.role}</p>

                        <p className="text-gray-500 text-sm mt-2">
                          {senior.company}
                        </p>
                      </div>
                    </div>

                    <div className="px-3 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-green-300 text-xs">
                      Verified
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className="grid md:grid-cols-2 gap-5 mt-8">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center gap-3 text-gray-300">
                        <GraduationCap className="w-5 h-5 text-purple-300" />
                        {senior.year}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center gap-3 text-gray-300">
                        <MapPin className="w-5 h-5 text-pink-300" />
                        {senior.location}
                      </div>
                    </div>
                  </div>

                  {/* SKILLS */}
                  <div className="mt-7">
                    <p className="text-gray-500 text-sm mb-4">
                      Skills & Expertise
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {senior.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/[0.03] text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* HELP */}
                  <div className="mt-7 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/[0.05] to-purple-500/[0.05] p-6">
                    <p className="text-gray-500 text-sm mb-2">Can Help With</p>

                    <p className="text-white text-lg">{senior.help}</p>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4 mt-8">
                    <button className="flex-1 h-14 rounded-2xl border border-white/10 bg-white/[0.03] text-white hover:border-cyan-400/30 transition">
                      View Profile
                    </button>

                    <button className="group relative flex-1 overflow-hidden rounded-2xl p-[1px]">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"></div>

                      <div className="relative h-14 rounded-2xl bg-black text-white flex items-center justify-center gap-3">
                        Message
                        <MessageCircle className="w-5 h-5" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* HELP SECTION */}
          <div className="mt-32">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-light text-white">
                What Juniors Can
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                  Learn From Seniors
                </span>
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-relaxed">
                Seniors already experienced the same academic struggles,
                placement pressure, confusion, and learning journey. Their
                guidance helps juniors avoid mistakes and grow faster.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
              {helps.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-purple-500/[0.03]"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 p-[1px] mb-6">
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-lg text-white font-semibold leading-relaxed">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl mt-32 p-14 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-purple-500/[0.05] to-pink-500/[0.05]"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-8">
                <Users className="w-4 h-4 text-cyan-300" />

                <span className="text-sm text-cyan-300">
                  Student Driven Community
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
                Grow With
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                  Real Student Connections
                </span>
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-relaxed">
                Build meaningful campus connections, learn directly from
                seniors, collaborate on projects, and prepare for placements
                together inside one connected student ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
                <NavLink
                  to="/register"
                  className="group relative overflow-hidden rounded-full p-[1px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"></div>

                  <div className="relative px-8 py-4 rounded-full bg-black text-white font-medium flex items-center gap-3">
                    Join As Junior
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </NavLink>

                <NavLink
                  to="/register"
                  className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] text-white hover:border-cyan-400/30 transition"
                >
                  Join As Senior
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SeniorJuniorConnect;
