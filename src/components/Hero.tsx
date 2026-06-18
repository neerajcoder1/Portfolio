import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FileText, ArrowRight, Sparkles, Send } from "lucide-react";
import { PERSONAL_INFO, STATS } from "../data";

export default function Hero() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentString = PERSONAL_INFO.typingStrings[typingIndex];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const typingSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && displayText === currentString) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % PERSONAL_INFO.typingStrings.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.substring(0, prev.length - 1)
            : currentString.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentString, typingIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Information text */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 border border-cyan-500/30 px-3 py-1.5 rounded-full bg-cyan-950/20 text-cyan-400 font-mono text-xs w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span className="tracking-wider uppercase">Systems Fully Active</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#00f3ff] via-[#8e2de2] to-[#ff007f] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                {PERSONAL_INFO.name}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-display text-gray-300 flex items-center h-10"
            >
              <span>A dedicated&nbsp;</span>
              <span className="text-[#00f3ff] font-bold border-r-2 border-[#00f3ff] pr-1 animate-pulse min-w-[12px]">
                {displayText}
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {PERSONAL_INFO.aboutMe}
          </motion.p>

          {/* Buttons Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 font-display font-bold text-sm text-white rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center space-x-2 border border-cyan-400/20 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="px-6 py-3.5 bg-[#121020]/80 hover:bg-[#121020] border border-pink-500/30 text-pink-500 font-display font-bold text-sm rounded-lg hover:shadow-[0_0_20px_rgba(255,0,127,0.3)] hover:border-pink-500 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3.5 bg-transparent border border-slate-700 hover:border-[#00f3ff]/50 text-gray-300 hover:text-white font-display font-bold text-sm rounded-lg transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Message Me</span>
            </button>
          </motion.div>
        </div>

        {/* Right Side: Visual Artwork Component / Cyber Avatar */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-85 sm:h-85 flex items-center justify-center.5 group"
          >
            {/* Ambient neon backdrop light glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00f3ff]/30 to-[#ff007f]/30 rounded-full filter blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Spin cyber rings */}
            <div className="absolute w-[110%] h-[110%] rounded-full border border-[#00f3ff]/20 border-dashed animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[105%] h-[105%] rounded-full border border-pink-500/20 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Glowing neon rings surrounding avatar */}
            <div className="absolute inset-0 border-2 border-indigo-400/20 rounded-full p-2 animate-pulse" />
            
            {/* Avatar frame */}
            <div className="relative w-full h-full rounded-full overflow-hidden p-1.5 bg-gradient-to-r from-cyan-400 via-indigo-600 to-pink-500 z-10 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#080710]/95 flex items-center justify-center">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid Stats Block */}
      <div className="max-w-7xl mx-auto w-full mt-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="cyber-blur-card p-6 rounded-xl relative group overflow-hidden"
            >
              {/* Highlight board top glow border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent group-hover:via-cyan-400 transition-all duration-300" />
              
              <div className="flex flex-col space-y-2">
                <h3 className="text-3xl sm:text-4xl font-display font-black text-white group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </h3>
                <h4 className="text-sm font-bold font-display text-gray-200">
                  {stat.label}
                </h4>
                <p className="text-xs font-mono text-gray-500">
                  {stat.subValue}
                </p>

                {stat.link && (
                  <a
                    href={stat.link}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="mt-3 inline-flex items-center space-x-1.5 text-xs font-bold uppercase text-purple-400 group-hover:text-[#00f3ff] transition-colors"
                  >
                    <span>Launch Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
