import React from "react";
import {
  ShieldAlert,
  BrainCircuit,
  Users,
  SearchCheck,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  MessageSquareWarning,
  UserRoundSearch,
  Orbit,
  Cpu,
} from "lucide-react";

function ProblemSolution() {
  const problems = [
    {
      icon: UserRoundSearch,
      title: "Students Fail To Connect With Seniors",
      desc: "Many juniors struggle to find proper guidance, placement help, project support, and real mentorship inside campus.",
    },

    {
      icon: ShieldAlert,
      title: "Lost Items Everywhere",
      desc: "Students lose important belongings daily without any centralized and intelligent recovery platform.",
    },

    {
      icon: Users,
      title: "Disconnected Student Communities",
      desc: "Talented students remain isolated despite having shared goals, interests, and valuable skills.",
    },

    {
      icon: MessageSquareWarning,
      title: "Unsafe Reporting Systems",
      desc: "Students hesitate to report issues because existing systems lack privacy, safety, and trust.",
    },
  ];

  const solutions = [
    {
      icon: GraduationCap,
      title: "Senior-Junior Connect",
      desc: "The best mentors for students are experienced seniors from their own campus who truly understand the journey.",
    },

    {
      icon: SearchCheck,
      title: "AI Powered Lost & Found",
      desc: "Smart AI matching helps students recover lost belongings faster using intelligent detection systems.",
    },

    {
      icon: Orbit,
      title: "Skill Based Communities",
      desc: "Connect with designers, developers, founders, creators, and innovators inside your campus ecosystem.",
    },

    {
      icon: ShieldCheck,
      title: "Anonymous Complaint Box",
      desc: "A secure and privacy-first reporting system built to protect students and encourage safer campuses.",
    },
  ];

  return (
    <section className="relative py-36 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-500/10 blur-[140px] rounded-full"></div>

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
        <div className="text-center mb-28">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-8">
            <Sparkles className="w-4 h-4 text-cyan-300" />

            <span className="text-sm text-cyan-300 tracking-wide font-medium">
              Solving Real Student Problems
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight">
            Building A Smarter
            <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Campus Ecosystem
            </span>
          </h2>

          <p className="max-w-4xl mx-auto text-lg text-gray-400 mt-10 leading-relaxed">
            CampusOrigin transforms disconnected student experiences into one
            intelligent digital ecosystem focused on mentorship, collaboration,
            communication, safety, and growth.
          </p>
        </div>

        {/* Special Card */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl mb-28">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] via-purple-500/[0.03] to-transparent"></div>

          <div className="absolute -top-20 right-0 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full"></div>

          <div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center px-10 py-14">
            {/* Left */}
            <div>
              <div className="w-20 h-20 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center mb-8">
                <GraduationCap className="w-10 h-10 text-cyan-300" />
              </div>

              <h3 className="text-4xl md:text-5xl font-light text-white leading-tight">
                Senior-Junior
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Connect
                </span>
              </h3>
            </div>

            {/* Right */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Students often struggle because they don't have access to the
                right guidance at the right time.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mt-6">
                The best mentor for a student is usually a senior from the same
                college — someone who already understands academics,
                internships, projects, placements, coding culture, and campus
                life.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mt-6">
                CampusOrigin bridges this gap by helping juniors connect with
                verified seniors for mentorship, collaboration, and career
                growth inside one intelligent platform.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-cyan-300" />
                </div>

                <span className="text-cyan-300 text-sm md:text-base">
                  Smart student mentorship ecosystem
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center">
                <ShieldAlert className="w-7 h-7 text-cyan-300" />
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-white">
                  Problems Students Face
                </h3>

                <p className="text-gray-400 mt-1">
                  Real challenges across campuses
                </p>
              </div>
            </div>

            <div className="space-y-7">
              {problems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.025] backdrop-blur-3xl hover:border-cyan-400/20 transition-all duration-500"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/[0.05] via-purple-500/[0.03] to-transparent"></div>

                    <div className="relative rounded-[34px] bg-black/70 backdrop-blur-3xl p-7 overflow-hidden">
                      <div className="absolute -top-20 -right-20 w-56 h-56 bg-cyan-500/5 blur-[120px] rounded-full"></div>

                      <div className="relative z-10 flex gap-5">
                        <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-cyan-300" />
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            {item.title}
                          </h4>

                          <p className="text-gray-400 leading-relaxed text-[15px]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CENTER */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative flex flex-col items-center">
              <div className="w-px h-[820px] bg-gradient-to-b from-cyan-500/30 via-purple-500/40 to-pink-500/30"></div>

              {/* Top Dot */}
              <div className="absolute top-0 w-5 h-5 rounded-full bg-cyan-400 blur-sm animate-pulse"></div>

              {/* Center */}
              <div className="absolute top-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-40 h-40 rounded-full bg-cyan-500/10 blur-[100px]"></div>

                  <div className="w-24 h-24 rounded-full border border-white/10 bg-black/80 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.12)]">
                    <Cpu className="w-10 h-10 text-cyan-300" />
                  </div>
                </div>
              </div>

              {/* Bottom Dot */}
              <div className="absolute bottom-0 w-5 h-5 rounded-full bg-purple-400 blur-sm animate-pulse"></div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center">
                <BrainCircuit className="w-7 h-7 text-cyan-300" />
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-white">
                  CampusOrigin Solutions
                </h3>

                <p className="text-gray-400 mt-1">
                  Smart solutions for modern students
                </p>
              </div>
            </div>

            <div className="space-y-7">
              {solutions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.025] backdrop-blur-3xl hover:border-cyan-400/20 transition-all duration-500"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/[0.05] via-purple-500/[0.03] to-transparent"></div>

                    <div className="relative rounded-[34px] bg-black/70 backdrop-blur-3xl p-7 overflow-hidden">
                      <div className="absolute -top-20 -right-20 w-56 h-56 bg-cyan-500/5 blur-[120px] rounded-full"></div>

                      <div className="relative z-10 flex gap-5">
                        <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-cyan-300" />
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            {item.title}
                          </h4>

                          <p className="text-gray-400 leading-relaxed text-[15px]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
