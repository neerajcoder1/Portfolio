import { useState, useEffect } from "react";
import CyberBackground from "./components/CyberBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsGrid from "./components/SkillsGrid";
import ProjectsCarousel from "./components/ProjectsCarousel";
import AchievementsGrid from "./components/AchievementsGrid";
import ContactSection from "./components/ContactSection";
import { PERSONAL_INFO } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "dark" | "light") || "dark";
    }
    return "dark";
  });

  // Track theme to toggle class on <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Track scroll position to update active navbar item
  useEffect(() => {
    const sections = ["home", "about", "experience", "skills", "projects", "achievements", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${
      theme === "light" 
        ? "bg-slate-50 text-slate-800 selection:bg-indigo-500 selection:text-white" 
        : "bg-[#080710] text-gray-100 selection:bg-cyan-500 selection:text-black"
    }`}>
      {/* Interactive Cyber grid particle background canvas */}
      <CyberBackground />

      {/* Primary Sticky Header Nav */}
      <Navbar 
        activeSection={activeSection} 
        theme={theme} 
        toggleTheme={() => setTheme(prev => prev === "dark" ? "light" : "dark")} 
      />

      {/* Main Single Page Layout Container */}
      <main className="relative z-10 w-full overflow-x-hidden">
        
        {/* HERO SHOWCASE */}
        <Hero />

        {/* OVERVIEW SECTION */}
        <About />

        {/* WORK JOURNEY */}
        <ExperienceTimeline />

        {/* CORE TECH GRID */}
        <SkillsGrid />

        {/* PROJECTS CAROUSEL DECK */}
        <ProjectsCarousel />

        {/* CREDENTIALS MASONRY */}
        <AchievementsGrid />

        {/* CONTACT CHANNEL */}
        <ContactSection />

      </main>

      {/* Immersive Cyberpunk themed footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-slate-900 bg-[#080710]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start space-y-2">
            <span className="text-sm font-display font-extrabold tracking-widest bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              {PERSONAL_INFO.name.toUpperCase()} PORTFOLIO
            </span>
            <span className="text-gray-500 text-xs font-mono">
              Designed with VS code // © 2026.
            </span>
          </div>

          <p className="text-gray-600 text-[11px] font-mono leading-relaxed text-center sm:text-right">
            Powered by Neeraj Gahlout
          </p>
        </div>
      </footer>
    </div>
  );
}
