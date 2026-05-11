import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

import {
  Sparkles,
  GraduationCap,
  ShieldCheck,
  BrainCircuit,
  Orbit,
  Globe,
  Rocket,
  ArrowRight,
  Users,
  Layers3,
  Cpu,
  MessagesSquare,
  Stars,
  BadgeCheck,
} from "lucide-react";

function About() {
  const canvasRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const stars = [];

    for (let i = 0; i < 140; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.3,
      });
    }

    const animate = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y += star.speed;

        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();

        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const features = [
    {
      icon: Orbit,
      title: "Connected Student Ecosystem",
      desc: "A smart environment where students collaborate, discover opportunities, and grow together beyond classrooms.",
    },
    {
      icon: ShieldCheck,
      title: "Verified & Secure Community",
      desc: "CampusOrigin ensures authentic student interaction with trust, safety, and verified participation.",
    },
    {
      icon: BrainCircuit,
      title: "AI Powered Experiences",
      desc: "From Lost & Found matching to intelligent networking, AI improves the student journey seamlessly.",
    },
    {
      icon: Globe,
      title: "Future Focused Innovation",
      desc: "We are building scalable technology solutions designed for the next generation of campuses.",
    },
  ];

  const teamMembers = [
    "Suchana Chowdhury",
    "Souvik Porey",
    "Ayan Sarkar",
    "Kiran Jana",
    "Sajib Saha",
    "Roni Shil",
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white">
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 z-0 bg-black">
        <canvas ref={canvasRef} className="absolute inset-0" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"></div>

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

      {/* Main Content */}
      <div className="relative z-10 pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HERO */}
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-cyan-300" />

              <span className="text-sm tracking-wide text-cyan-300 font-medium">
                About CampusOrigin
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              Reimagining the Future of
              <span className="block mt-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Student Collaboration
              </span>
            </h1>

            <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-400 mt-10 leading-relaxed">
              CampusOrigin is a modern student ecosystem designed to transform
              how students connect, collaborate, communicate, and grow within
              campuses. We believe that every student deserves access to a
              smarter, safer, and more connected digital campus experience.
            </p>
          </div>

          {/* STORY SECTION */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">
            {/* LEFT */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-purple-500/[0.04]"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 p-[1px] mb-8">
                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h2 className="text-4xl font-semibold leading-tight mb-6">
                    A Premium Digital Platform Built For Modern Campuses
                  </h2>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    CampusOrigin started with a simple vision — students should
                    never feel disconnected inside a campus full of
                    opportunities.
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    In many colleges and universities, students struggle to
                    connect with seniors, discover communities, recover lost
                    belongings, collaborate on projects, or even communicate
                    effectively outside their classroom environment.
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    We wanted to solve this by creating a premium student
                    platform that combines intelligent networking, secure
                    communication, AI-powered systems, and collaborative campus
                    tools — all in one ecosystem.
                  </p>

                  <p className="text-gray-400 leading-relaxed">
                    CampusOrigin is not just another student website. It is a
                    future-ready digital campus experience where technology
                    empowers students to build stronger connections, share
                    knowledge, discover opportunities, and grow together.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid gap-6">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7 hover:border-cyan-500/30 transition duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition"></div>

                    <div className="relative z-10 flex gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-300" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* WHY CAMPUS ORIGIN */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light">
                Why Students Choose
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mt-3">
                  CampusOrigin
                </span>
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 mt-8 text-lg leading-relaxed">
                We focus on creating meaningful digital experiences that improve
                communication, collaboration, and student engagement within
                campuses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Senior-Junior Connections",
                  desc: "Helping students learn, connect, and grow through meaningful mentorship and guidance.",
                },
                {
                  icon: Cpu,
                  title: "AI Smart Systems",
                  desc: "Advanced AI matching for Lost & Found and intelligent recommendations.",
                },
                {
                  icon: MessagesSquare,
                  title: "Community Collaboration",
                  desc: "Join communities, communicate with peers, and participate in campus activities.",
                },
                {
                  icon: Layers3,
                  title: "Unified Platform",
                  desc: "Everything students need in one modern and organized ecosystem.",
                },
                {
                  icon: Stars,
                  title: "Modern Experience",
                  desc: "Beautiful, responsive, and immersive user experiences built for students.",
                },
                {
                  icon: BadgeCheck,
                  title: "Verified Environment",
                  desc: "Safe and trusted interactions across the campus community.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-purple-500/[0.02]"></div>

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 mb-6">
                        <Icon className="w-6 h-6 text-cyan-300" />
                      </div>

                      <h3 className="text-2xl font-semibold mb-4">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* TEAM SECTION */}
          <div className="mt-36">
            {/* Heading */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-7">
                <Users className="w-4 h-4 text-cyan-300" />

                <span className="text-sm text-cyan-300 tracking-wide font-medium">
                  Core Team
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-light leading-tight">
                The People Behind
                <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  CampusOrigin
                </span>
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-relaxed">
                A collaborative team focused on building premium digital
                experiences that improve campus communication, connection, and
                student growth.
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
              {[
                "Suchana Chowdhury",
                "Souvik Porey",
                "Ayan Sarkar",
                "Kiran Jana",
                "Sajib Saha",
                "Roni Shil",
              ].map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-[1px] transition duration-500 hover:-translate-y-1"
                >
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-80"></div>

                  {/* Hover Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>

                  {/* Inner */}
                  <div className="relative rounded-[30px] bg-black/80 backdrop-blur-3xl px-7 py-8 h-full overflow-hidden">
                    {/* subtle bottom glow */}
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 blur-[70px] rounded-full"></div>

                    {/* Top Small Line */}
                    <div className="relative z-10 flex items-center justify-between mb-8">
                      <div className="w-10 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"></div>

                      <div className="text-[10px] tracking-[0.25em] text-gray-500 uppercase">
                        Team
                      </div>
                    </div>

                    {/* Profile */}
                    <div className="relative z-10 flex items-center gap-5">
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/40 to-purple-500/40 blur-md opacity-70"></div>

                        <div className="relative w-16 h-16 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/15 to-purple-500/15 backdrop-blur-xl flex items-center justify-center">
                          <span className="text-2xl font-light bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                            {member.charAt(0)}
                          </span>
                        </div>
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="text-xl font-medium text-white leading-snug">
                          {member}
                        </h3>

                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>

                          <p className="text-xs tracking-wide uppercase text-gray-400">
                            CampusOrigin Team
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="relative z-10 mt-8 flex items-center gap-2">
                      <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-cyan-400"></div>

                      <Orbit className="w-3.5 h-3.5 text-cyan-300" />

                      <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-purple-400"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* CTA */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl mt-36 p-14 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-purple-500/[0.04]"></div>

            <div className="absolute -top-32 -left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

            <div className="absolute -bottom-32 -right-20 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-500 p-[1px] mx-auto mb-8">
                <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center">
                  <Rocket className="w-9 h-9 text-white" />
                </div>
              </div>

              <h2 className="text-5xl font-light leading-tight">
                Ready To Experience The
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-3">
                  Future Of Campus Life?
                </span>
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-relaxed">
                Join CampusOrigin today and become part of a smarter, safer, and
                more connected student ecosystem designed for collaboration,
                innovation, and growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
                <NavLink
                  to="/register"
                  className="group relative overflow-hidden rounded-2xl p-[1px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>

                  <div className="relative px-10 h-16 rounded-2xl bg-black flex items-center justify-center gap-3 text-white font-medium text-lg group-hover:bg-black/90 transition">
                    Join CampusOrigin
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                  </div>
                </NavLink>

                <button className="h-16 px-10 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-cyan-400/30 text-white text-lg transition">
                  Explore Features
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
