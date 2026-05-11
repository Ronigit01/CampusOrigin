import React from "react";
import {
  Briefcase,
  GraduationCap,
  Users,
  ShieldCheck,
  SearchCheck,
  BrainCircuit,
} from "lucide-react";

function StudentBenefits() {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Senior Mentorship",
      desc: "Get real guidance from experienced seniors for placements, coding, projects, and internships.",
    },

    {
      icon: Users,
      title: "Strong Student Network",
      desc: "Build valuable connections with students across different skills and interests.",
    },

    {
      icon: SearchCheck,
      title: "AI Lost & Found",
      desc: "Recover lost items faster using AI powered matching and campus tracking.",
    },

    {
      icon: ShieldCheck,
      title: "Safe Campus Environment",
      desc: "Report issues anonymously with complete privacy and trust.",
    },

    {
      icon: Briefcase,
      title: "Career Growth",
      desc: "Access placement support, resume reviews, interview tips, and internship guidance.",
    },

    {
      icon: BrainCircuit,
      title: "Collaborative Learning",
      desc: "Learn faster by collaborating with peers, mentors, and campus communities.",
    },
  ];

  return (
    <section className="relative py-36 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[130px] rounded-full"></div>

        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-500/10 blur-[130px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-light text-white">
            Benefits For
            <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Every Student
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-relaxed">
            CampusOrigin is designed to improve student life through mentorship,
            collaboration, networking, AI tools, and trusted campus systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-cyan-400/20 transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/[0.05] to-purple-500/[0.04]"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center mb-8">
                    <Icon className="w-7 h-7 text-cyan-300" />
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StudentBenefits;
