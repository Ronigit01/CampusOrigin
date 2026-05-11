import React from "react";
import {
  ExternalLink,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Navbar from "./Navbar";

function ResultPortal() {
  const features = [
    {
      icon: GraduationCap,
      title: "Official Result Access",
      desc: "Check semester, internal, and academic examination results directly from the official university portal.",
    },

    {
      icon: ShieldCheck,
      title: "Secure & Verified",
      desc: "Students are redirected securely to the official university result checking platform.",
    },

    {
      icon: Sparkles,
      title: "Fast Student Access",
      desc: "Quick and seamless access to academic results without searching manually every time.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-black overflow-hidden py-32">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

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
          {/* HERO */}
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-cyan-300" />

              <span className="text-sm text-cyan-300 font-medium tracking-wide">
                Student Result Portal
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
              Check Your
              <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                University Results
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mt-10 max-w-4xl mx-auto">
              CampusOrigin provides quick access to the official university
              result portal so students can easily check semester results,
              academic performance, marksheets, and examination updates without
              hassle.
            </p>

            {/* CTA */}
            <div className="flex items-center justify-center mt-14">
              <a
                href="https://myapplonline.in.net/svu/reschecke"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full p-[1px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"></div>

                <div className="relative px-10 py-5 rounded-full bg-black flex items-center gap-4 text-white text-lg font-medium group-hover:bg-black/90 transition">
                  Check Result Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                </div>
              </a>
            </div>
          </div>

          {/* MAIN PREMIUM CARD */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl mt-28 p-[1px]">
            {/* Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>

            {/* Inner */}
            <div className="relative rounded-[40px] bg-black/80 backdrop-blur-3xl overflow-hidden p-10 lg:p-16">
              {/* Glow */}
              <div className="absolute -top-20 right-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full"></div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">
                {/* LEFT */}
                <div>
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-500 p-[1px] mb-10">
                    <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center">
                      <GraduationCap className="w-11 h-11 text-white" />
                    </div>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                    Academic Results
                    <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Made Easy
                    </span>
                  </h2>

                  <p className="text-gray-400 text-lg leading-relaxed mt-8">
                    Students no longer need to search through multiple portals
                    and confusing websites. CampusOrigin provides a direct and
                    trusted pathway to the official university result platform.
                  </p>

                  <p className="text-gray-500 leading-relaxed mt-6">
                    Access semester marks, examination updates, performance
                    records, and official academic information quickly and
                    securely.
                  </p>
                </div>

                {/* RIGHT FEATURES */}
                <div className="space-y-6">
                  {features.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-purple-500/[0.03]"></div>

                        <div className="relative z-10 flex gap-5">
                          {/* Icon */}
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 p-[1px] flex-shrink-0">
                            <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                          </div>

                          {/* Content */}
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-3">
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
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-24">
            <p className="text-gray-500 text-lg mb-8">
              Redirecting students securely to the official university portal.
            </p>

            <a
              href="https://myapplonline.in.net/svu/reschecke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white hover:border-cyan-400/30 transition"
            >
              Open Official Result Website
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResultPortal;
