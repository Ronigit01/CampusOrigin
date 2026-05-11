import React from "react";

function ProblemSolution() {
  const problems = [
    {
      icon: "😓",
      title: "Lost Items Everywhere",
      desc: "Students lose important belongings daily with no centralized recovery system.",
      color: "from-red-500 to-orange-400",
    },
    {
      icon: "📉",
      title: "No Proper Mentorship",
      desc: "Juniors struggle to find guidance for academics, placements, and growth.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "🤝",
      title: "Disconnected Communities",
      desc: "Talented students remain isolated despite shared skills and interests.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: "⚠️",
      title: "Unsafe Reporting",
      desc: "Students hesitate to report issues because of fear and lack of privacy.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const solutions = [
    {
      icon: "🔍",
      title: "AI Lost & Found",
      desc: "Smart AI-powered matching helps recover lost belongings quickly.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: "🎯",
      title: "Senior-Junior Connect",
      desc: "Verified mentorship system for guidance, growth, and collaboration.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: "👥",
      title: "Skill Communities",
      desc: "Join coding, design, startup, and AI communities inside your campus.",
      color: "from-pink-400 to-fuchsia-500",
    },
    {
      icon: "🛡️",
      title: "Anonymous Complaint Box",
      desc: "Safe and secure reporting platform with complete privacy support.",
      color: "from-green-400 to-cyan-500",
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-20 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full"></div>

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
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

            <span className="text-sm text-cyan-300 font-medium">
              Solving Real Campus Problems
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight">
            Turning Campus
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Problems Into Solutions
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-relaxed">
            CampusOrigin transforms disconnected student experiences into one
            powerful digital ecosystem built for mentorship, collaboration,
            safety, and growth.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/20 flex items-center justify-center backdrop-blur-xl">
                <span className="text-2xl">⚠️</span>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-white">
                  Campus Problems
                </h3>

                <p className="text-gray-400 mt-1">
                  Everyday struggles students face
                </p>
              </div>
            </div>

            <div className="space-y-7">
              {problems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-[1px] hover:scale-[1.02] transition-all duration-500"
                >
                  {/* Glow Border */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r ${item.color}`}
                  ></div>

                  {/* Inner Card */}
                  <div className="relative rounded-[30px] bg-black/80 backdrop-blur-2xl p-7 overflow-hidden">
                    {/* Glow Orb */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} opacity-10 blur-3xl rounded-full`}
                    ></div>

                    <div className="relative z-10 flex gap-5">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] shadow-lg`}
                      >
                        <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center text-2xl">
                          {item.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3">
                          {item.title}
                        </h4>

                        <p className="text-gray-400 leading-relaxed text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Line */}
                    <div
                      className={`mt-6 h-px w-full bg-gradient-to-r ${item.color} opacity-20`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER LINE */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative flex flex-col items-center">
              {/* Main Line */}
              <div className="w-px h-[760px] bg-gradient-to-b from-red-500 via-cyan-400 to-purple-500"></div>

              {/* Top Orb */}
              <div className="absolute top-0 w-6 h-6 rounded-full bg-red-400 blur-sm animate-pulse"></div>

              {/* Center Orb */}
              <div className="absolute top-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-32 h-32 rounded-full bg-cyan-500/20 blur-3xl"></div>

                  <div className="w-20 h-20 rounded-full border border-cyan-400/30 bg-black/70 backdrop-blur-2xl flex items-center justify-center">
                    <span className="text-3xl">✨</span>
                  </div>
                </div>
              </div>

              {/* Bottom Orb */}
              <div className="absolute bottom-0 w-6 h-6 rounded-full bg-purple-400 blur-sm animate-pulse"></div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/10 border border-cyan-500/20 flex items-center justify-center backdrop-blur-xl">
                <span className="text-2xl">🚀</span>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-white">
                  CampusOrigin Solutions
                </h3>

                <p className="text-gray-400 mt-1">
                  Smart features built for students
                </p>
              </div>
            </div>

            <div className="space-y-7">
              {solutions.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-[1px] hover:scale-[1.02] transition-all duration-500"
                >
                  {/* Glow Border */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r ${item.color}`}
                  ></div>

                  {/* Inner */}
                  <div className="relative rounded-[30px] bg-black/80 backdrop-blur-2xl p-7 overflow-hidden">
                    {/* Glow Orb */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} opacity-10 blur-3xl rounded-full`}
                    ></div>

                    <div className="relative z-10 flex gap-5">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] shadow-lg`}
                      >
                        <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center text-2xl">
                          {item.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3">
                          {item.title}
                        </h4>

                        <p className="text-gray-400 leading-relaxed text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Line */}
                    <div
                      className={`mt-6 h-px w-full bg-gradient-to-r ${item.color} opacity-20`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
