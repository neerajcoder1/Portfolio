import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Github, ExternalLink, Code } from "lucide-react";
import { PROJECTS } from "../data";

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const getThemeClass = (color: string) => {
    switch (color) {
      case "pink":
        return {
          glow: "shadow-[0_0_20px_rgba(255,0,127,0.2)]",
          border: "border-pink-500/30 hover:border-pink-500",
          text: "text-pink-400",
          badge: "bg-pink-950/40 border-pink-500/20 text-pink-400"
        };
      case "green":
        return {
          glow: "shadow-[0_0_20px_rgba(57,255,20,0.2)]",
          border: "border-emerald-500/30 hover:border-emerald-500",
          text: "text-emerald-400",
          badge: "bg-emerald-950/40 border-emerald-500/20 text-emerald-400"
        };
      case "violet":
        return {
          glow: "shadow-[0_0_20px_rgba(142,45,226,0.2)]",
          border: "border-violet-500/30 hover:border-violet-500",
          text: "text-violet-400",
          badge: "bg-violet-950/40 border-violet-500/20 text-violet-400"
        };
      case "cyan":
      default:
        return {
          glow: "shadow-[0_0_20px_rgba(0,243,255,0.2)]",
          border: "border-cyan-500/30 hover:border-cyan-500",
          text: "text-cyan-400",
          badge: "bg-cyan-950/40 border-cyan-500/20 text-cyan-400"
        };
    }
  };

  const currentProject = PROJECTS[index];
  const theme = getThemeClass(currentProject.color);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2 text-[#00f3ff] font-mono text-sm uppercase tracking-widest font-bold">
              <span className="w-8 h-[2px] bg-[#00f3ff]" />
              <span>04 // Deliveries</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
              Featured <span className="text-[#00f3ff]">Projects</span>
            </h2>
          </div>

          {/* Slider Controllers */}
          <div className="flex space-x-3">
            <button
              onClick={prev}
              className="p-3 rounded-xl bg-slate-900 border border-slate-850 hover:border-[#00f3ff] text-gray-400 hover:text-white transition-all shadow-md cursor-pointer"
              aria-label="Previous Project"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-xl bg-slate-900 border border-slate-850 hover:border-[#00f3ff] text-gray-400 hover:text-white transition-all shadow-md cursor-pointer"
              aria-label="Next Project"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic sliding block */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              
              {/* Card visual preview */}
              <div className="lg:col-span-6">
                <div className={`relative rounded-2xl overflow-hidden bg-slate-950 aspect-[16/10] border-2 ${theme.border} ${theme.glow} transition-all duration-500 group`}>
                  
                  {/* Neon overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#080710]/95 via-[#080710]/40 to-transparent z-10" />

                  {/* Glass grid background if image fails */}
                  <div className="absolute inset-0 bg-transparent opacity-10 flex items-center justify-center">
                    <Code className="w-20 h-20 text-white" />
                  </div>

                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover relative z-0 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Highlight bar top */}
                  <div className="absolute top-4 left-4 z-10 bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider text-gray-300">
                    Project {index + 1} of {PROJECTS.length}
                  </div>
                </div>
              </div>

              {/* Data text descriptions side */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {currentProject.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${theme.badge}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                  {currentProject.title}
                </h3>

                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Direct buttons */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-850">
                  <a
                    href={currentProject.demoUrl}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="px-5 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 font-display font-bold text-sm text-white rounded-lg shadow-md hover:shadow-cyan-950/40 transition-all flex items-center space-x-2 border border-cyan-400/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Deployment</span>
                  </a>

                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="px-5 py-3.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-gray-300 hover:text-white font-display font-medium text-sm rounded-lg transition-all flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Repository</span>
                  </a>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Pagination indicators */}
        <div className="flex justify-center space-x-2.5 mt-12">
          {PROJECTS.map((_, pIdx) => (
            <button
              key={pIdx}
              onClick={() => setIndex(pIdx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === pIdx
                  ? "w-8 bg-[#00f3ff] shadow-[0_0_8px_#00f3ff]"
                  : "w-2.5 bg-slate-800 hover:bg-slate-700"
              }`}
              aria-label={`Go to slide ${pIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
