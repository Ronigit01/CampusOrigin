import React, { useState } from "react";
import {
  ShieldAlert,
  Sparkles,
  Send,
  Lock,
  FileWarning,
  User,
  Building2,
  MessageSquare,
  BadgeCheck,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Navbar from "./Navbar";

function ComplaintBox() {
  const [isAnonymous, setIsAnonymous] = useState(true);

  const complaintTypes = [
    "Ragging / Harassment",
    "Faculty Related Issue",
    "Hostel Problem",
    "Campus Safety",
    "Discrimination",
    "Mental Pressure",
    "Infrastructure Issue",
    "Other Complaint",
  ];

  const features = [
    {
      icon: Lock,
      title: "100% Anonymous",
      desc: "Students can report issues privately without revealing identity.",
    },

    {
      icon: BadgeCheck,
      title: "Verified Campus Access",
      desc: "Only verified university students can submit complaints.",
    },

    {
      icon: EyeOff,
      title: "Privacy Focused",
      desc: "Sensitive reports are handled securely and confidentially.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-black overflow-hidden py-32">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-red-500/10 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

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
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/20 bg-white/5 backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-red-300" />

              <span className="text-sm text-red-300 font-medium tracking-wide">
                Secure Student Complaint System
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
              Speak Up For A
              <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent mt-3">
                Better Campus
              </span>
            </h1>

            <p className="max-w-4xl mx-auto text-gray-400 text-lg md:text-xl mt-8 leading-relaxed">
              CampusOrigin provides a secure and anonymous complaint platform
              where students can safely report campus issues, harassment,
              academic pressure, hostel problems, discrimination, and other
              concerns without fear.
            </p>
          </div>

          {/* TOP FEATURES */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-cyan-500/[0.03]"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 to-cyan-500 p-[1px] mb-8">
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

          {/* MAIN LAYOUT */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
            {/* LEFT FORM */}
            <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-[1px]">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-cyan-500/20"></div>

              <div className="relative rounded-[38px] bg-black/80 backdrop-blur-3xl p-10 overflow-hidden">
                {/* Glow */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-500/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10">
                  {/* Title */}
                  <div className="mb-10">
                    <h2 className="text-4xl font-light text-white">
                      Submit Complaint
                    </h2>

                    <p className="text-gray-400 mt-4">
                      Share your concern safely and help improve the university
                      environment for everyone.
                    </p>
                  </div>

                  {/* FORM */}
                  <form className="space-y-7">
                    {/* Complaint Type */}
                    <div>
                      <label className="text-sm text-gray-300 mb-3 block">
                        Complaint Category
                      </label>

                      <div className="relative">
                        <FileWarning className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                        <select className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-gray-300 outline-none focus:border-red-400/40 transition appearance-none">
                          <option>Select complaint category</option>

                          {complaintTypes.map((type, index) => (
                            <option key={index}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="text-sm text-gray-300 mb-3 block">
                        Complaint Subject
                      </label>

                      <div className="relative">
                        <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                        <input
                          type="text"
                          placeholder="Enter complaint subject"
                          className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-red-400/40 transition"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="text-sm text-gray-300 mb-3 block">
                        Detailed Description
                      </label>

                      <div className="relative">
                        <MessageSquare className="absolute left-5 top-5 w-5 h-5 text-gray-500" />

                        <textarea
                          rows="7"
                          placeholder="Describe your issue clearly..."
                          className="w-full rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pt-5 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-red-400/40 transition resize-none"
                        ></textarea>
                      </div>
                    </div>

                    {/* Anonymous Toggle */}
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div>
                        <h4 className="text-white font-medium">
                          Submit Anonymously
                        </h4>

                        <p className="text-sm text-gray-400 mt-1">
                          Your identity will remain hidden.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsAnonymous(!isAnonymous)}
                        className={`relative w-14 h-8 rounded-full transition ${
                          isAnonymous ? "bg-cyan-500" : "bg-gray-700"
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-6 h-6 bg-white rounded-full transition ${
                            isAnonymous ? "left-7" : "left-1"
                          }`}
                        ></div>
                      </button>
                    </div>

                    {/* Optional Name */}
                    {!isAnonymous && (
                      <div>
                        <label className="text-sm text-gray-300 mb-3 block">
                          Your Name
                        </label>

                        <div className="relative">
                          <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                          <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition"
                          />
                        </div>
                      </div>
                    )}

                    {/* Submit */}
                    <button className="group relative w-full overflow-hidden rounded-2xl p-[1px] mt-5">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-400 to-cyan-500"></div>

                      <div className="relative h-16 rounded-2xl bg-black flex items-center justify-center gap-3 text-white font-medium text-lg group-hover:bg-black/90 transition">
                        Submit Complaint
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">
              {/* Safety Card */}
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 to-cyan-500 p-[1px] mb-8">
                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                      <ShieldAlert className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-semibold text-white leading-tight">
                    Why This Platform Matters
                  </h3>

                  <p className="text-gray-400 mt-5 leading-relaxed">
                    Many students hesitate to report issues because of fear,
                    pressure, or lack of proper reporting systems. CampusOrigin
                    provides a safer and student-focused complaint ecosystem.
                  </p>

                  {/* Points */}
                  <div className="space-y-5 mt-10">
                    {[
                      "Anonymous reporting support",
                      "Safer communication channel",
                      "Encourages student voices",
                      "Helps improve campus culture",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl border border-red-500/20 bg-red-500/10 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-red-300" />
                        </div>

                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    value: "100%",
                    label: "Anonymous Option",
                  },

                  {
                    value: "24/7",
                    label: "Secure Access",
                  },

                  {
                    value: "Safe",
                    label: "Reporting System",
                  },

                  {
                    value: "Verified",
                    label: "Campus Users",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-cyan-500/[0.03]"></div>

                    <div className="relative z-10">
                      <h4 className="text-3xl font-semibold bg-gradient-to-r from-red-300 to-cyan-300 bg-clip-text text-transparent">
                        {item.value}
                      </h4>

                      <p className="text-gray-400 text-sm mt-2">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl mt-32 p-14 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.05] via-orange-500/[0.05] to-cyan-500/[0.05]"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
                A Better Campus Starts
                <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                  When Students Speak Up
                </span>
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-relaxed">
                Your voice matters. By reporting issues responsibly, students
                can help create a safer, healthier, and more supportive campus
                environment for everyone.
              </p>

              <button className="group relative overflow-hidden rounded-full p-[1px] mt-12">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-400 to-cyan-500"></div>

                <div className="relative px-8 py-4 rounded-full bg-black text-white font-medium flex items-center gap-3">
                  Raise A Complaint
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ComplaintBox;
