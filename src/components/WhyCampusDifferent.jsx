
import React from "react";
import {
  ShieldCheck,
  Users,
  GraduationCap,
  BrainCircuit,
  CheckCircle2,
  XCircle,
} from "lucide-react";

function WhyCampusDifferent() {
  const comparisons = [
    {
      normal: "Random WhatsApp / Telegram Groups",
      campus: "Structured & Verified Campus Ecosystem",
    },

    {
      normal: "No Proper Mentorship",
      campus: "Verified Senior-Junior Guidance",
    },

    {
      normal: "Lost Items Rarely Recovered",
      campus: "AI Powered Lost & Found System",
    },

    {
      normal: "Unsafe Reporting Process",
      campus: "Anonymous & Privacy First Complaint Box",
    },

    {
      normal: "Disconnected Student Communities",
      campus: "Skill Based Communities & Collaboration",
    },

    {
      normal: "No Career Direction",
      campus: "Placement, Internship & Career Support",
    },
  ];

  return (
    <section className="relative py-36 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-white/[0.03] mb-8">
            <ShieldCheck className="w-4 h-4 text-cyan-300" />

            <span className="text-sm text-cyan-300">
              Why Students Trust CampusOrigin
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight">
            Why CampusOrigin
            <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Is Different
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-relaxed">
            Built specifically for modern campus life with mentorship,
            collaboration, safety, AI systems, and verified student
            interactions.
          </p>
        </div>

        {/* Comparison */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="p-10 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <XCircle className="w-7 h-7 text-red-300" />
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-white">
                    Traditional Platforms
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Limited & disconnected systems
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {comparisons.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-black/40 p-5"
                  >
                    <p className="text-gray-300">{item.normal}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="p-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-cyan-300" />
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-white">
                    CampusOrigin
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Intelligent campus ecosystem
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {comparisons.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.03] p-5"
                  >
                    <p className="text-gray-200">{item.campus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyCampusDifferent;





