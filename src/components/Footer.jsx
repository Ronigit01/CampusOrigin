import React from "react";

import { GraduationCap, Mail, MapPin, ArrowUpRight } from "lucide-react";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Footer() {
  const platformLinks = [
    {
      name: "Senior-Junior Connect",
      path: "/seniorjuniorconnect",
    },

    {
      name: "Communities",
      path: "/communities",
    },

    {
      name: "Lost & Found",
      path: "/lostandfound",
    },

    {
      name: "Complaint Box",
      path: "/complaint",
    },

    {
      name: "About Us",
      path: "/about",
    },
  ];

  const communityLinks = [
    {
      name: "Frontend Developers",
      path: "/communities",
    },

    {
      name: "UI/UX Designers",
      path: "/communities",
    },

    {
      name: "Backend Developers",
      path: "/communities",
    },

    {
      name: "AI Community",
      path: "/communities",
    },

    {
      name: "Startup Club",
      path: "/communities",
    },
  ];

  const supportLinks = [
    {
      name: "Privacy Policy",
      path: "/about",
    },

    {
      name: "Terms & Conditions",
      path: "/about",
    },

    {
      name: "Help Center",
      path: "/about",
    },

    {
      name: "Student Safety",
      path: "/complaint",
    },

    {
      name: "Contact Us",
      path: "/about",
    },
  ];

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-20 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full"></div>

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
        {/* Top CTA */}
        <div className="py-20 border-b border-white/10">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-10 md:p-14 text-center">
            {/* Glow */}
            <div className="absolute -top-20 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto rounded-3xl border border-white/10 bg-white/[0.03] flex items-center justify-center mb-8">
                <GraduationCap className="w-10 h-10 text-cyan-300" />
              </div>

              <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
                Build Your
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Campus Network
                </span>
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-relaxed">
                Connect with seniors, join communities, recover lost items,
                collaborate with talented students, and grow together inside one
                intelligent campus ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
                <NavLink
                  to="/register"
                  className="group relative overflow-hidden rounded-full p-[1px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"></div>

                  <div className="relative px-8 py-4 rounded-full bg-black text-white font-medium flex items-center gap-3 group-hover:bg-black/90 transition">
                    Join CampusOrigin
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </NavLink>

                <NavLink
                  to="/communities"
                  className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] text-white hover:border-cyan-400/30 transition"
                >
                  Explore Communities
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14 py-20">
          {/* Brand */}
          <div>
            <NavLink to="/" className="inline-block">
              <img src="./assets/logo.png" alt="CampusOrigin" className="w-44" />
            </NavLink>

            <p className="text-gray-400 leading-relaxed mt-8">
              CampusOrigin is a smart campus ecosystem helping students connect,
              collaborate, grow, and build meaningful relationships through
              mentorship and communities.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-cyan-400/30 transition"
              >
                <FaGithub className="w-5 h-5 text-white" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/campus-origin-5826a240a/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-cyan-400/30 transition"
              >
                <FaLinkedinIn className="w-5 h-5 text-white" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-pink-400/30 transition"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-8">Platform</h3>

            <div className="space-y-5">
              {platformLinks.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className="block text-gray-400 hover:text-cyan-300 transition"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Communities */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-8">
              Communities
            </h3>

            <div className="space-y-5">
              {communityLinks.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className="block text-gray-400 hover:text-cyan-300 transition"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-8">
              Contact & Support
            </h3>

            <div className="space-y-5">
              {supportLinks.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className="block text-gray-400 hover:text-cyan-300 transition"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-300" />
                support@campusorigin.com
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-300" />
                India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 CampusOrigin. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm text-center md:text-right">
            Built for students, mentorship, communities & campus growth.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
