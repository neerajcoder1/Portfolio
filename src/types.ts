export interface Stat {
  value: string;
  label: string;
  subValue?: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  color: string; // 'pink', 'cyan', 'green', 'violet'
}

export interface Project {
  title: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  image: string;
  tech: string[];
  color: string;
}

export interface Achievement {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export interface SkillCategory {
  name: string;
  color: string; // pink, cyan, green, violet
  skills: { name: string; iconClass?: string }[];
}
