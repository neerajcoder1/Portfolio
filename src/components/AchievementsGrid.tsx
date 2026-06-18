import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Calendar, Bookmark, Eye, X } from "lucide-react";
import { ACHIEVEMENTS } from "../data";

export default function AchievementsGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tabs = ["All", "Competition", "Certification", "Leadership"];

  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    if (activeTab === "All") return true;
    return item.category === activeTab;
  });

  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2 text-[#00f3ff] font-mono text-sm uppercase tracking-widest font-bold">
              <span className="w-8 h-[2px] bg-[#00f3ff]" />
              <span>05 // Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
              Honors & <span className="text-emerald-400">Achievements</span>
            </h2>
          </div>

          {/* Tab filters layout */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-mono font-bold tracking-wider rounded-lg border transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#00f3ff]/10 border-[#00f3ff] text-[#00f3ff] shadow-[0_0_12px_rgba(0,243,255,0.2)]"
                    : "bg-slate-900 border-slate-800 text-gray-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry or Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item, idx) => (
              <motion.div
                layout
                key={item.title + idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="cyber-blur-card rounded-2xl overflow-hidden border border-slate-800/80 group hover:border-[#39ff14]/50 transition-all duration-300 flex flex-col h-full"
              >
                {/* Visual Image container with hover zooms */}
                <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-black/40 z-10 opacity-30 group-hover:opacity-0 transition-opacity" />
                  
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Icon hover view trigger */}
                  <div className="absolute inset-0 bg-[#080710]/80 z-20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <button
                      onClick={() => setSelectedImage(item.image)}
                      className="p-3.5 bg-emerald-500 rounded-xl text-white shadow-xl shadow-emerald-950/40 hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Micro label bottom */}
                  <div className="absolute top-4 left-4 z-10 flex space-x-2">
                    <span className="bg-[#080710]/95 border border-[#39ff14]/20 text-[#39ff14] text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content description card */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-500 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-display font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs font-mono text-gray-600 border-t border-slate-850 mt-5 pt-3 shrink-0">
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Verified Academic Pathway</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Popup Modal for zoom view */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-[#080710]/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            >
              <div className="relative max-w-4xl max-h-[85vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white hover:text-red-500 hover:border-red-500/50 transition-colors cursor-pointer z-50"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={selectedImage}
                  alt="Certificate Zoom"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl max-w-full max-h-[80vh] object-contain border border-slate-850"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
