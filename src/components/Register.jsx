import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  GraduationCap,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function RegisterPage() {
  const [activeTab, setActiveTab] = useState("senior");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Future backend logic here

    navigate("/");
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-6 py-20">
      {/* Desktop Logo */}
      <div className="absolute top-8 left-8 z-30 hidden md:block">
        <NavLink to="/" className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="CampusOrigin Logo"
            className="w-44 object-contain"
          />
        </NavLink>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

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

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
        {/* LEFT SIDE */}
        <div className="relative p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-cyan-300" />

              <span className="text-sm text-cyan-300 font-medium">
                CampusOrigin
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-light text-white leading-tight">
              Connect.
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Collaborate.
              </span>
              <span className="block text-white">Grow Together.</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-lg">
              Join CampusOrigin and become part of a verified student ecosystem
              built for mentorship, collaboration, innovation, and growth.
            </p>

            {/* Feature Points */}
            <div className="space-y-5 mt-12">
              {[
                "Verified Student Network",
                "Senior-Junior Mentorship",
                "Skill Based Communities",
                "AI Powered Lost & Found",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-cyan-300" />
                  </div>

                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative p-10 lg:p-14">
          {/* Glow */}
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10">
            {/* Tabs */}
            <div className="flex items-center gap-3 mb-10">
              <button
                type="button"
                onClick={() => setActiveTab("senior")}
                className={`flex-1 py-4 rounded-2xl border transition-all duration-300 ${
                  activeTab === "senior"
                    ? "border-cyan-400/40 bg-cyan-500/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-gray-400"
                }`}
              >
                Senior Register
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("junior")}
                className={`flex-1 py-4 rounded-2xl border transition-all duration-300 ${
                  activeTab === "junior"
                    ? "border-purple-400/40 bg-purple-500/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-gray-400"
                }`}
              >
                Junior Register
              </button>
            </div>

            {/* Title */}
            <div className="mb-10">
              <h2 className="text-4xl font-semibold text-white">
                {activeTab === "senior"
                  ? "Create Senior Account"
                  : "Create Junior Account"}
              </h2>

              <p className="text-gray-400 mt-3">
                Join the verified campus community today.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="space-y-3">
                <label className="text-sm text-gray-300">Full Name</label>

                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label className="text-sm text-gray-300">College Email</label>

                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                  <input
                    type="email"
                    placeholder="Enter college email"
                    required
                    className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition"
                  />
                </div>
              </div>

              {/* Department */}
              <div className="space-y-3">
                <label className="text-sm text-gray-300">Department</label>

                <div className="relative">
                  <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                  <input
                    type="text"
                    placeholder="Enter department"
                    required
                    className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition"
                  />
                </div>
              </div>

              {/* Year */}
              <div className="space-y-3">
                <label className="text-sm text-gray-300">
                  {activeTab === "senior" ? "Passing Year" : "Current Year"}
                </label>

                <div className="relative">
                  <GraduationCap className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                  <input
                    type="text"
                    required
                    placeholder={
                      activeTab === "senior"
                        ? "Enter passing year"
                        : "Enter current year"
                    }
                    className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-3">
                <label className="text-sm text-gray-300">Password</label>

                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                  <input
                    type="password"
                    placeholder="Create password"
                    required
                    minLength={6}
                    className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-2xl p-[1px] mt-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>

                <div className="relative h-16 rounded-2xl bg-black flex items-center justify-center gap-3 text-white font-medium text-lg group-hover:bg-black/90 transition">
                  Create Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                </div>
              </button>
            </form>

            {/* Footer */}
            <p className="text-gray-500 text-sm text-center mt-8">
              Already have an account?
              <NavLink
                to="/login"
                className="text-cyan-300 ml-2 hover:text-cyan-200 transition"
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
