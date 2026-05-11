import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Users,
  GraduationCap,
} from "lucide-react";

function LoginPage() {
  const [activeTab, setActiveTab] = useState("student");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // future login backend logic

    navigate("/");
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-6 py-20">
      {/* Desktop Logo */}
      <div className="absolute top-8 left-8 z-30 hidden md:block">
        <NavLink to="/" className="flex items-center">
          <img
            src="./assets/logo.png"
            alt="CampusOrigin Logo"
            className="w-44 object-contain"
          />
        </NavLink>
      </div>

      {/* Background */}
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
      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
        {/* LEFT */}
        <div className="relative p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-cyan-300" />

              <span className="text-sm text-cyan-300 font-medium">
                CampusOrigin Access Portal
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-light text-white leading-tight">
              Welcome
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Back.
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-lg">
              Continue your journey inside the CampusOrigin ecosystem and stay
              connected with students, seniors, mentors, communities, and campus
              opportunities.
            </p>

            {/* Features */}
            <div className="space-y-5 mt-12">
              {[
                {
                  icon: ShieldCheck,
                  text: "Verified Student Access",
                },

                {
                  icon: Users,
                  text: "Community Networking",
                },

                {
                  icon: GraduationCap,
                  text: "Senior Mentorship Support",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-300" />
                    </div>

                    <p className="text-gray-300">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative p-10 lg:p-14">
          {/* Glow */}
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10">
            {/* Tabs */}
            <div className="flex items-center gap-3 mb-10">
              <button
                type="button"
                onClick={() => setActiveTab("student")}
                className={`flex-1 py-4 rounded-2xl border transition-all duration-300 ${
                  activeTab === "student"
                    ? "border-cyan-400/40 bg-cyan-500/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-gray-400"
                }`}
              >
                Junior Login
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("senior")}
                className={`flex-1 py-4 rounded-2xl border transition-all duration-300 ${
                  activeTab === "senior"
                    ? "border-purple-400/40 bg-purple-500/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-gray-400"
                }`}
              >
                Senior Login
              </button>
            </div>

            {/* Title */}
            <div className="mb-10">
              <h2 className="text-4xl font-semibold text-white">
                Login To Continue
              </h2>

              <p className="text-gray-400 mt-3">
                Access your CampusOrigin account securely.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Email */}
              <div className="space-y-3">
                <label className="text-sm text-gray-300">College Email</label>

                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                  <input
                    type="email"
                    required
                    placeholder="Enter your college email"
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
                    required
                    minLength={6}
                    placeholder="Enter your password"
                    className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition"
                  />
                </div>
              </div>

              {/* Forgot */}
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="text-sm text-cyan-300 hover:text-cyan-200 transition"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-2xl p-[1px] mt-6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>

                <div className="relative h-16 rounded-2xl bg-black flex items-center justify-center gap-3 text-white font-medium text-lg group-hover:bg-black/90 transition">
                  Login Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                </div>
              </button>
            </form>

            {/* Footer */}
            <p className="text-gray-500 text-sm text-center mt-8">
              Don&apos;t have an account?
              <NavLink
                to="/register"
                className="text-cyan-300 ml-2 hover:text-cyan-200 transition"
              >
                Create Account
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
