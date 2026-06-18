import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Linkedin, Github, Sun, Moon } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface NavbarProps {
  activeSection: string;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Navbar({ activeSection, theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080710]/80 backdrop-blur-md border-b border-indigo-500/20 py-4 shadow-lg shadow-indigo-950/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo with Cyber Glow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <span className="text-xl font-display font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,243,255,0.4)]">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
          </motion.div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 outline-none">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 font-display text-sm font-medium tracking-wide transition-colors duration-200 outline-none cursor-pointer ${
                  activeSection === item.id
                    ? "text-[#00f3ff]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#00f3ff] shadow-[0_0_8px_#00f3ff]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Socials / Action button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:text-[#00f3ff] transition-all cursor-pointer rounded-lg hover:bg-slate-300/10 border border-transparent hover:border-slate-500/20"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-gray-400 hover:text-[#00f3ff] transition-colors p-2 cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 drop-shadow-[0_0_5px_currentColor]" />
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-gray-400 hover:text-[#ff007f] transition-colors p-2 cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 drop-shadow-[0_0_5px_currentColor]" />
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("contact")}
              className="relative px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#00f3ff] border border-[#00f3ff]/40 rounded bg-cyan-950/20 shadow-[0_0_10px_rgba(0,243,255,0.1)] hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:border-[#00f3ff] transition-all cursor-pointer"
            >
              Initiate Contact
            </motion.button>
          </div>

          {/* Mobile Theme Toggle & Hamburguer */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:text-[#00f3ff] transition-all cursor-pointer rounded-lg hover:bg-slate-300/10"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>
            <button
              id="hamburger-btn"
              onClick={() => setIsOpen(true)}
              className="text-gray-300 hover:text-[#00f3ff] transition-colors p-1"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Screen Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#080710]/95 backdrop-blur-lg flex flex-col justify-center"
          >
            <div className="absolute top-6 right-6">
              <button
                id="close-drawer-btn"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-[#ff007f] p-2 transition-colors cursor-pointer"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollTo(item.id)}
                  className={`text-2xl font-display font-bold px-6 py-3 tracking-widest uppercase transition-all cursor-pointer ${
                    activeSection === item.id
                      ? "text-[#00f3ff] neon-glow-cyan"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="flex space-x-6 pt-8">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="p-3 bg-slate-900 border border-slate-700 rounded-full text-indigo-400 hover:text-white"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="p-3 bg-slate-900 border border-slate-700 rounded-full text-pink-500 hover:text-white"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
