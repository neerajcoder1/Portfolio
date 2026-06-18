import { motion } from "motion/react";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function About() {
  const points = [
    "Data Analytics & Modeling using Power BI",
    "Full-Stack Web Architecturing with React/Next",
    "Co-Founding, Agile Planning & Team Leadership",
    "Iterative Hackathon Prototyping (10+ Events)"
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-[#00f3ff] font-mono text-sm uppercase tracking-widest font-bold">
            <span className="w-8 h-[2px] bg-[#00f3ff]" />
            <span>01 // Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            About <span className="text-[#00f3ff]">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text / Info */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cyber-blur-card p-8 rounded-2xl relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00f3ff] to-transparent" />
              <p className="text-gray-300 text-lg leading-relaxed">
                {PERSONAL_INFO.aboutMe}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Education & Target Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Board */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="cyber-blur-card p-8 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-[#ff007f] opacity-10 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-32 h-32" />
              </div>

              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-500 to-transparent" />

              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-pink-950/30 border border-pink-500/20 rounded-xl text-pink-500 shadow-[0_0_10px_rgba(255,0,127,0.1)]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-500 text-xs uppercase tracking-widest">Education</h3>
                  <h4 className="font-display font-extrabold text-white text-lg">Degree Pathway</h4>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="font-display font-bold text-gray-100 text-base">
                    {PERSONAL_INFO.education.institution}
                  </h5>
                  <p className="text-[#ff007f] font-mono text-sm font-bold mt-1">
                    {PERSONAL_INFO.education.degree}
                  </p>
                </div>
                
                <div className="flex items-center justify-between border-t border-slate-800/80 pt-4">
                  <span className="text-gray-400 text-xs font-mono">Graduation Horizon</span>
                  <span className="bg-pink-950/40 border border-pink-500/30 text-pink-400 text-xs px-2.5 py-1 rounded font-mono font-bold">
                    Class of {PERSONAL_INFO.education.period}
                  </span>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed italic mt-2">
                  "{PERSONAL_INFO.education.details}"
                </p>
              </div>
            </motion.div>

            {/* Micro achievement showcase */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 p-5 bg-slate-900/60 border border-indigo-500/10 rounded-xl"
            >
              <div className="p-2.5 bg-indigo-950/40 border border-indigo-400/20 rounded-lg text-[#00f3ff]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-sm">
                  10+ Certified Awards
                </h4>
                <p className="text-gray-500 text-xs">
                  Acknowledge honors from Microsoft, FreeCodeCamp & IIT Delhi
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
