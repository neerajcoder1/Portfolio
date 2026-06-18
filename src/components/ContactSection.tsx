import { motion } from "motion/react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 space-y-3 text-center items-center">
          <div className="flex items-center space-x-2 text-[#00f3ff] font-mono text-sm uppercase tracking-widest font-bold">
            <span className="w-8 h-[2px] bg-[#00f3ff]" />
            <span>06 // Connection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Get In <span className="bg-gradient-to-r from-violet-400 to-[#00f3ff] bg-clip-text text-transparent">Touch</span>
          </h2>
        </div>

        {/* Info panel */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cyber-blur-card p-8 sm:p-12 rounded-2xl relative overflow-hidden group max-w-2xl mx-auto"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00f3ff] to-purple-500" />
          
          <h3 className="text-2xl font-display font-extrabold text-white mb-4 text-center">
            Let's discuss new horizons!
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 text-center max-w-md mx-auto">
            Are you interested in collaborating on Data Analytics setups, modern Web Applications, or high-growth Startup integrations? Drop a line or connect via LinkedIn and let's decode the solutions together.
          </p>

          <div className="space-y-4">
            
            {/* Email Address */}
            <div className="flex items-center space-x-3.5 p-4 bg-slate-950/40 border border-slate-850 rounded-xl hover:border-indigo-500/30 transition-colors">
              <div className="p-2.5 bg-indigo-950/40 border border-indigo-500/20 text-[#00f3ff] rounded-lg shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden flex-1">
                <h4 className="text-gray-500 text-[10px] font-mono uppercase tracking-wider">Email Communication</h4>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-white text-sm sm:text-base font-bold hover:underline transition-all block truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* LinkedIn link */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-between p-4 bg-slate-950/40 border border-slate-850 rounded-xl hover:border-[#00f3ff]/40 transition-colors group"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 rounded-lg shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] font-mono uppercase tracking-wider">Professional Space</h4>
                  <span className="text-white font-bold text-sm sm:text-base">LinkedIn Network</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#00f3ff] transition-colors" />
            </a>

            {/* Github link */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-between p-4 bg-slate-950/40 border border-slate-850 rounded-xl hover:border-pink-500/40 transition-colors group"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-pink-950/40 border border-pink-500/20 text-pink-400 rounded-lg shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] font-mono uppercase tracking-wider">Open Source Hub</h4>
                  <span className="text-white font-bold text-sm sm:text-base">GitHub Repositories</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-pink-400 transition-colors" />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
