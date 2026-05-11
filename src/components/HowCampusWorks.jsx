import React from "react";
import {
  UserPlus,
  ShieldCheck,
  Users,
  GraduationCap,
  Rocket,
} from "lucide-react";

function HowCampusWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Join CampusOrigin",
      desc: "Create your student profile and become part of your verified campus ecosystem.",
    },

    {
      icon: ShieldCheck,
      title: "Verify Your Campus",
      desc: "Students connect inside trusted and authentic campus communities.",
    },

    {
      icon: Users,
      title: "Explore Communities",
      desc: "Join tech, design, startup, gaming, art, music, and skill based communities.",
    },

    {
      icon: GraduationCap,
      title: "Connect With Seniors",
      desc: "Get mentorship, placement guidance, project support, and internship help.",
    },

    {
      icon: Rocket,
      title: "Grow Together",
      desc: "Collaborate, network, learn faster, and build your future together.",
    },
  ];

  return (
    <section className="relative py-36 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-purple-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-28">
          <h2 className="text-5xl md:text-7xl font-light text-white">
            How CampusOrigin
            <span className="block mt-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8">
            A seamless student ecosystem designed to help students connect,
            learn, collaborate, and grow together.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/20 via-purple-500/30 to-pink-500/20"></div>

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={index} className="relative text-center">
                  <div className="w-20 h-20 mx-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center mb-8 relative z-10">
                    <Icon className="w-8 h-8 text-cyan-300" />
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7 h-full">
                    <div className="text-cyan-300 text-sm mb-3">
                      Step {index + 1}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowCampusWorks;
