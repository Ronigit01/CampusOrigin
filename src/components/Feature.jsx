import React from "react";
import { NavLink } from "react-router-dom";

import {
  ShieldCheck,
  Search,
  ArrowRight,
  Network,
  GraduationCap,
} from "lucide-react";

function FeaturesSection() {
  const features = [
    {
      icon: GraduationCap,
      title: "Senior-Junior Connect",
      description:
        "Verified mentorship ecosystem where juniors can connect with experienced seniors for academics, placements, projects, internships, coding guidance, and real campus support.",
      gradient: "from-cyan-400 via-purple-400 to-pink-500",
      glow: "bg-cyan-500/10",
      size: "lg:col-span-2 lg:row-span-2",
      link: "/register",
    },

    {
      icon: Search,
      title: "AI Lost & Found",
      description:
        "Upload lost or found items and let AI intelligently match belongings across the campus ecosystem.",
      gradient: "from-cyan-400 to-blue-500",
      glow: "bg-cyan-500/10",
      link: "/lostandfound",
    },

    {
      icon: Network,
      title: "Skill Communities",
      description:
        "Join coding, design, startup, and AI communities to collaborate and grow together.",
      gradient: "from-pink-400 to-fuchsia-500",
      glow: "bg-pink-500/10",
      link: "/communities",
    },

    {
      icon: ShieldCheck,
      title: "Anonymous Complaint Box",
      description:
        "Safe and secure reporting platform for student issues with complete privacy protection.",
      gradient: "from-green-400 to-cyan-500",
      glow: "bg-green-500/10",
      size: "lg:col-span-2",
      link: "/complaint",
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full"></div>

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
        {/* Heading */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

            <span className="text-sm text-cyan-300 font-medium tracking-wide">
              Platform Features
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight">
            Everything Students Need
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
              Inside One Platform
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-relaxed">
            CampusOrigin combines mentorship, collaboration, communication,
            safety, and AI-powered tools into one intelligent campus ecosystem.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 auto-rows-[320px]">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <NavLink
                to={feature.link}
                key={index}
                className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-[1px] hover:scale-[1.02] transition-all duration-500 block ${
                  feature.size || ""
                }`}
              >
                {/* Animated Border */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${feature.gradient}`}
                ></div>

                {/* Inner */}
                <div className="relative h-full rounded-[32px] bg-black/80 backdrop-blur-2xl overflow-hidden p-8 flex flex-col justify-between">
                  {/* Glow */}
                  <div
                    className={`absolute -top-20 -right-20 w-52 h-52 ${feature.glow} blur-[120px] rounded-full`}
                  ></div>

                  {/* Small Glow */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/[0.03] blur-3xl rounded-full"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-8 shadow-2xl`}
                    >
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-white mb-5 leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="relative z-10 flex items-center justify-between mt-10">
                    <div
                      className={`h-px flex-1 bg-gradient-to-r ${feature.gradient} opacity-20`}
                    ></div>

                    <div className="ml-5 w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center group-hover:translate-x-1 transition duration-300">
                      <ArrowRight className="w-5 h-5 text-gray-300" />
                    </div>
                  </div>

                  {/* Noise */}
                  <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                </div>
              </NavLink>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: "24/7", label: "Student Connectivity" },
            { value: "AI", label: "Powered Recovery" },
            { value: "100%", label: "Verified Campus" },
            { value: "Real-Time", label: "Communication" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-purple-500/[0.03]"></div>

              <div className="relative z-10">
                <h4 className="text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  {item.value}
                </h4>

                <p className="text-gray-400 text-sm mt-2">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
