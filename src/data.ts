import { Stat, Experience, Project, Achievement, SkillCategory } from "./types";

const IMAGE_BASE_URL = "https://raw.githubusercontent.com/neerajcoder1/neeraj/main/";

export const PERSONAL_INFO = {
  name: "Neeraj Gahlout",
  title: "Data Analyst & Full Stack Developer",
  typingStrings: ["Data Analyst", "Web Developer", "Entrepreneur", "Co-Founder"],
  avatar: `${IMAGE_BASE_URL}Profile.png`,
  cvUrl: `${IMAGE_BASE_URL}Neeraj_Gahlout_Hackathon_CV.pdf`,
  linkedinUrl: "https://www.linkedin.com/in/neeraj-gahlout-b39993308",
  githubUrl: "https://github.com/neerajcoder1",
  email: "neerajgahlout36@gmail.com",
  aboutMe: "Current BCA student at Garden City University, expected to graduate in 2027. I have a strong interest in Data Analytics and Web Development, and a passion for learning new skills and technologies. My entrepreneurial mindset and leadership experience come from co-founding a startup.",
  education: {
    institution: "Garden City University, Bengaluru",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2024 - 2027",
    details: "Focusing on data structures, web architecture, statistical computing, and database systems."
  }
};

export const STATS: Stat[] = [
  {
    value: "4+",
    label: "Years Experience",
    subValue: "Business Insights & Dashboards"
  },
  {
    value: "10+",
    label: "Hackathons",
    subValue: "Competitive Coding & Building"
  },
  {
    value: "Multiple",
    label: "Internships",
    subValue: "Web Dev & Data Analytics"
  },
  {
    value: "Startup",
    label: "Co-Founder",
    subValue: "VisionX - Visit Platform",
    link: "https://visionx-v1.vercel.app/"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Data Analytics Specialist",
    company: "Freelance & Projects",
    period: "2022 - Present (4 Years Contact)",
    description: "4 Years Experience in analyzing business operations, creating high-level dashboard developments, professional data visualization, and reporting. Specialized in extracting actionable insights to fuel revenue and reduce operation costs.",
    skills: ["Power BI", "MySQL", "PostgreSQL", "Excel", "Data Modeling"],
    color: "cyan"
  },
  {
    role: "Full Stack Web Developer",
    company: "Tech Projects & Hackathons",
    period: "2023 - Present",
    description: "Frontend and full-stack web application development, with special attention to creating modern, responsive, lightning-fast web applications. Experienced in React, Next.js, tailwind layout engines, and API integrations.",
    skills: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js"],
    color: "pink"
  },
  {
    role: "Startup Co-Founder",
    company: "VisionX - IT Services Company",
    period: "2025 - Present",
    description: "Co-founded an IT Services company specializing in custom software solutions. Spearheading team collaboration, business development pitches, technology planning, and high-impact product leadership.",
    skills: ["Team Leadership", "Business Analytics", "Product Management", "Client Interfacing"],
    color: "violet"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    color: "pink",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    name: "Backend & Server",
    color: "cyan",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" }
    ]
  },
  {
    name: "Database Storage",
    color: "green",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Firebase" }
    ]
  },
  {
    name: "Tools & Core",
    color: "violet",
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Full Stack Dev" },
      { name: "API Integration" },
      { name: "Database Design" },
      { name: "Problem Solving" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Smart Clinic Queue Management",
    description: "A web application engineered to reduce patient waiting times, optimize doctor schedules, and streamline overall registration, queuing, and notification flows.",
    demoUrl: "https://smart-clinic-queue.vercel.app/",
    githubUrl: "https://github.com/NeerajGahlout/smart-clinic-queue",
    image: `${IMAGE_BASE_URL}Smart.png`,
    tech: ["React", "Node.js", "Express", "Database Scheduling"],
    color: "cyan"
  },
  {
    title: "Food Court Application",
    description: "A comprehensive digital platform for streamlined food ordering, merchant side queue management, live payment status tracking, and kitchen alerts.",
    demoUrl: "https://food-court-app-chi.vercel.app/",
    githubUrl: "https://github.com/NeerajGahlout/food-court-app-chi",
    image: `${IMAGE_BASE_URL}Food.png`,
    tech: ["Next.js", "Tailwind CSS", "Responsive UI", "Payment Proxy"],
    color: "pink"
  },
  {
    title: "AstroGuard AI",
    description: "A state-of-the-art interactive mission control dashboard for tracking satellite operations, orbital mechanics tracking, space hazard alerts, and real-time telemetry analytics.",
    demoUrl: "https://ais-pre-axz6tut6ntcwlysvuupfo6-858910391603.asia-east1.run.app/",
    githubUrl: "https://github.com/NeerajGahlout/astroguard-ai",
    image: `${IMAGE_BASE_URL}austro.png`,
    tech: ["React.js", "Framer Motion", "Real-time Telemetry", "Neon Canvas"],
    color: "violet"
  },
  {
    title: "TraceChain",
    description: "A decentralized traceable waste flow network to measure, log, and secure transparent supply chains for environmental audits and plastic credits.",
    demoUrl: "https://tracechain-psi.vercel.app/login",
    githubUrl: "https://github.com/NeerajGahlout/tracechain-psi",
    image: `${IMAGE_BASE_URL}trac.png`,
    tech: ["SolidJS / React", "Blockchain Registry", "Audit Dashboard"],
    color: "green"
  },
  {
    title: "Data Analytics Dashboard",
    description: "A complete professional Power BI business intelligence dashboard tracking core retail performance metrics, supply optimization, and sales projections.",
    demoUrl: "https://github.com/neerajcoder1/BlinkIT-PowerBI-Dashboard",
    githubUrl: "https://github.com/neerajcoder1/BlinkIT-PowerBI-Dashboard",
    image: `${IMAGE_BASE_URL}power.png`,
    tech: ["Power BI", "Data Modeling", "Business Intelligence", "DAX Formulas"],
    color: "cyan"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Hackathon Winner",
    description: "Secured Second Place in the 2026 Green Hack Hackathon for environmental waste networks.",
    image: `${IMAGE_BASE_URL}Winning%20hackathon.jpeg`,
    category: "Competition",
    date: "2026"
  },
  {
    title: "Hackathon Finalist",
    description: "Shortlisted for Final Round in the 2026 CSTC hosted by IIT Delhi Hackathon.",
    image: `${IMAGE_BASE_URL}cstcneerajsau.jpg`,
    category: "Competition",
    date: "2026"
  },
  {
    title: "Leadership Award",
    description: "Appointed as the prestigious Campus Ambassador at IIT Delhi in 2026.",
    image: `${IMAGE_BASE_URL}iitd.png`,
    category: "Leadership",
    date: "2026"
  },
  {
    title: "Web Design Certificate",
    description: "Completed the comprehensive Responsive Web Design program at FreeCodeCamp.",
    image: `${IMAGE_BASE_URL}webdes.png`,
    category: "Certification",
    date: "2025"
  },
  {
    title: "Hackathon Participant",
    description: "Competed and pitched smart solutions at the 2026 Bangalore Zone Hackathon.",
    image: `${IMAGE_BASE_URL}hacka.png`,
    category: "Competition",
    date: "2026"
  },
  {
    title: "Advanced AI Certificate",
    description: "Completed the Advanced Artificial Intelligence curriculum on Microsoft Learn.",
    image: `${IMAGE_BASE_URL}ach.png`,
    category: "Certification",
    date: "2026"
  },
  {
    title: "Power BI Certificate",
    description: "Earned Power BI Professional credentials via Cambridge University Learn pathways.",
    image: `${IMAGE_BASE_URL}powerbi.png`,
    category: "Certification",
    date: "2026"
  },
  {
    title: "IPL Data Hackathon",
    description: "Participated as a skill-based Data Analyst in the IPL Hackathon on Wooble.",
    image: `${IMAGE_BASE_URL}ipl.png`,
    category: "Competition",
    date: "2026"
  },
  {
    title: "Vibe Coding Winner",
    description: "Developed and shipped unique reactive solutions in the Hack The Matrix Hackathon.",
    image: `${IMAGE_BASE_URL}up.png`,
    category: "Competition",
    date: "2026"
  },
  {
    title: "Economic Times Hackathon",
    description: "Shortlisted for the Semi-final round in the Economic Times Hackathon.",
    image: `${IMAGE_BASE_URL}etaihac.png`,
    category: "Competition",
    date: "2026"
  }
];
