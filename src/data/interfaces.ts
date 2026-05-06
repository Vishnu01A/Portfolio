export interface NavbarLink {
  label: string;
  href: string;
}

export interface About {
  name: string;
  description: string;
  YoE: number;
  projects: number;
}

export type ExperienceType = "Full Time" | "Part Time" | "Internship";

export interface Experience {
  companyName: string;
  position: string;
  type: ExperienceType;
  location: string;
  fromMonth: number;
  fromYear: number;
  toMonth: number;
  toYear: number;
  description: string;
  bullets: string[];
  techStack: string[];
}

export interface Skill {
  name: string;
  YoE: number;
  type: "Language" | "Framework" | "Database" | "Misc";
  logoLink: string;
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
}

export interface socialMedia {
  name: string;
  handle: string;
  href: string;
  svg: string;
}
