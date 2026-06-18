import { motion } from "motion/react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { EXPERIENCES } from "../data";

export default function ExperienceTimeline() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "pink":
        return {
          text: "text-pink-500",
          border: "border-pink-500/20 hover:border-pink-500",
          bg: "bg-pink-950/20",
          badge: "bg-pink-950/40 border-pink-500/30 text-pink-400",
          glow: "shadow-[0_0_15px_rgba(255,0,127,0.15)]",
          bullet: "bg-pink-500 shadow-[0_0_10px_#ff007f]",
          line: "from-pink-500"
        };
      case "cyan":
        return {
          text: "text-cyan-400",
          border: "border-cyan-500/20 hover:border-cyan-500",
          bg: "bg-cyan-950/20",
          badge: "bg-cyan-950/40 border-cyan-500/30 text-cyan-400",
          glow: "shadow-[0_0_15px_rgba(0,243,255,0.15)]",
          bullet: "bg-cyan-400 shadow-[0_0_10px_#00f3ff]",
          line: "from-cyan-400"
        };
      case "violet":
      default:
        return {
          text: "text-violet-400",
          border: "border-violet-500/20 hover:border-violet-500",
          bg: "bg-violet-950/20",
          badge: "bg-violet-950/40 border-violet-500/30 text-violet-400",
          glow: "shadow-[0_0_15px_rgba(142,45,226,0.15)]",
          bullet: "bg-violet-500 shadow-[0_0_10px_#8e2de2]",
          line: "from-violet-500"
        };
    }
  };

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-[#00f3ff] font-mono text-sm uppercase tracking-widest font-bold">
            <span className="w-8 h-[2px] bg-[#00f3ff]" />
            <span>02 // Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
        </div>

        {/* Timeline Path Structure */}
        <div className="relative border-l-2 border-slate-800/80 pl-6 sm:pl-10 ml-2 sm:ml-6 space-y-12">
          
          {EXPERIENCES.map((exp, idx) => {
            const colors = getColorClasses(exp.color);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Custom Timeline Indicator node */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full ${colors.bullet} z-10 transition-transform duration-300 hover:scale-125`} />

                {/* Main Card */}
                <div className={`cyber-blur-card p-6 sm:p-8 rounded-2xl border ${colors.border} ${colors.glow} transition-all duration-300 relative group`}>
                  
                  {/* Decorative glowing gradient path border top */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${colors.line} to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-display font-black text-white ${colors.text}`}>
                        {exp.role}
                      </h3>
                      <h4 className="text-gray-300 font-display font-bold text-sm sm:text-base flex items-center mt-1">
                        <Briefcase className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{exp.company}</span>
                      </h4>
                    </div>

                    <div className="shrink-0">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono font-bold ${colors.badge}`}>
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        <span>{exp.period}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Skills tags list */}
                  <div className="border-t border-slate-800/60 pt-4">
                    <h5 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Core Applied Modules</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 text-xs font-mono bg-slate-950/50 border border-slate-800 rounded-lg text-gray-300 hover:text-white hover:border-slate-700 transition-colors flex items-center"
                        >
                          <ChevronRight className="w-3 h-3 text-cyan-400 mr-0.5" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
