import { motion } from "motion/react";
import { HardDrive, Monitor, ShieldCheck, Terminal, Heart } from "lucide-react";
import { SKILL_CATEGORIES } from "../data";

export default function SkillsGrid() {
  const getCategoryTheme = (color: string) => {
    switch (color) {
      case "pink":
        return {
          header: "text-pink-500",
          border: "border-pink-500/10 hover:border-pink-500/30",
          glow: "group-hover:shadow-[0_0_20px_rgba(255,0,127,0.15)]",
          icon: <Monitor className="w-5 h-5 text-pink-500" />,
          cardBg: "bg-pink-500/5 hover:bg-pink-500/10",
          tagTxt: "text-pink-300"
        };
      case "cyan":
        return {
          header: "text-cyan-400",
          border: "border-cyan-500/10 hover:border-cyan-500/30",
          glow: "group-hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]",
          icon: <Terminal className="w-5 h-5 text-cyan-400" />,
          cardBg: "bg-cyan-500/5 hover:bg-cyan-500/10",
          tagTxt: "text-cyan-300"
        };
      case "green":
        return {
          header: "text-emerald-400",
          border: "border-emerald-500/10 hover:border-emerald-500/30",
          glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
          icon: <HardDrive className="w-5 h-5 text-emerald-400" />,
          cardBg: "bg-emerald-500/5 hover:bg-emerald-500/10",
          tagTxt: "text-emerald-300"
        };
      case "violet":
      default:
        return {
          header: "text-violet-400",
          border: "border-violet-500/10 hover:border-violet-500/30",
          glow: "group-hover:shadow-[0_0_20px_rgba(142,45,226,0.15)]",
          icon: <ShieldCheck className="w-5 h-5 text-violet-400" />,
          cardBg: "bg-violet-500/5 hover:bg-violet-500/10",
          tagTxt: "text-violet-300"
        };
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-[#00f3ff] font-mono text-sm uppercase tracking-widest font-bold">
            <span className="w-8 h-[2px] bg-[#00f3ff]" />
            <span>03 // Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Technical <span className="text-pink-500">Skills</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const theme = getCategoryTheme(category.color);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`cyber-blur-card p-6 sm:p-8 rounded-2xl border ${theme.border} ${theme.glow} transition-all duration-300 group`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3.5 mb-6">
                  <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl">
                    {theme.icon}
                  </div>
                  <h3 className={`text-xl font-display font-extrabold tracking-wide ${theme.header}`}>
                    {category.name}
                  </h3>
                </div>

                {/* Tags Layout Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.03 }}
                      className={`p-3 rounded-xl border border-slate-800/80 bg-slate-950/40 hover:border-slate-700/80 transition-all flex flex-col justify-center`}
                    >
                      <span className="text-gray-200 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-mono mt-1 ${theme.tagTxt} tracking-wider uppercase opacity-65`}>
                        {category.color}-tier
                      </span>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Core methodology box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-950/20 to-purple-950/20 border border-indigo-500/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-950/40 border border-indigo-500/20 rounded-xl text-indigo-400">
              <Heart className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-white text-base">
                Engineering Philosophy
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5 max-w-xl">
                Combining rigorous business-driven data insights with modern elegant full stack execution. Dedicated to clean, optimized codebases and accessible UI design.
              </p>
            </div>
          </div>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 py-2.5 bg-[#121020] hover:bg-[#121020]/80 border border-indigo-500/20 hover:border-[#00f3ff] text-indigo-300 hover:text-white rounded-lg transition-all text-sm font-display font-bold cursor-pointer whitespace-nowrap"
          >
            Review Operations
          </button>
        </motion.div>

      </div>
    </section>
  );
}
