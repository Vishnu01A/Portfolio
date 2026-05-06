import type {
  About,
  Experience,
  Skill,
  Project,
  socialMedia,
} from "./interfaces";

export const about: About = {
  name: "Vishnu R Kumar",
  description:
    "\tI am a Full-Stack developer with over three years of experience in both fintech (which demands the very complex backend) and productivity applications (that require an extremely simple and intuitive frontend). The contrast between these two domains is the main driver of my growth as a developer!\n\n The code I write bridges the gap between backend complexity and frontend usability. This is why I value clean architecture so much. It's not just because it's the correct way to develop applications.  I think this because I have seen how developed applications can fail and I do not want anyone to have to deal with that.\n\nEach piece of code I develop includes a single question: Will this perform well when it really counts?",
  YoE: 3,
  projects: 10,
};

export const aboutStats = [
  { value: about.YoE + "+", label: "Years of experience" },
  { value: about.projects + "+", label: "Major projects worked on" },
];

export const workExperiences: Experience[] = [
  {
    companyName: "RedBlackTree Technologies Pvt. Ltd.",
    position: "Software Engineer",
    type: "Full Time",
    fromMonth: 3,
    fromYear: 2024,
    toMonth: 10,
    toYear: 2024,
    location: "Remote",
    description:
      "Developed backend logic for productivity applications and a learning management system, with a focus on integrating advanced AI tools to streamline recruitment workflows.",
    bullets: [
      "Leveraged Google Cloud's Vertex AI to build a resume parser, significantly reducing manual data entry for HR processes.",
      "Improved the stability and performance of five distinct applications by implementing robust backend functionality and resolving critical bug fixes.",
    ],
    techStack: ["JavaScript", "Angular", "node.js", "PostgreSQL", "Python"],
  },
  {
    companyName: "DigiiGo Technologies",
    position: "Full Stack Developer",
    type: "Full Time",
    fromMonth: 7,
    fromYear: 2023,
    toMonth: 3,
    toYear: 2024,
    location: "Bengaluru",
    description:
      "Contributed to the end-to-end development of web projects, managing both the design of user interfaces and the architecture of backend data systems.",
    bullets: [
      "Enhanced the reliability of multiple projects by resolving over 200 bugs across the full technology stack.",
      "Designed and deployed several SQL-compliant databases, ensuring high performance and data consistency for complex application requirements.",
      "Developed and refined UI systems for multiple client-facing projects to improve overall user engagement.",
    ],
    techStack: [
      "JavaScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Database Architecture",
      "UI/UX Design",
    ],
  },
  {
    companyName: "Treflo (Ardour Labs Private Limited)",
    position: "Software Development Engineer",
    type: "Full Time",
    fromMonth: 3,
    fromYear: 2022,
    toMonth: 6,
    toYear: 2023,
    location: "Bengaluru",
    description:
      "Focused on building and maintaining the core infrastructure of the Treflo web application, specifically targeting features that drive user growth and financial reporting.",
    bullets: [
      "Facilitated a 30% increase in application usage by developing automated e-invoice generation, GSTR reports, and subscription infrastructure.",
      "Maintained high code quality standards by processing 300+ change requests with zero defects and authoring test cases for 20+ major features.",
      "Conducted research and developed POCs for a proprietary token-based Dapp on the Ethereum blockchain.",
    ],
    techStack: [
      "Typescript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "API Design",
    ],
  },
  {
    companyName: "Vocuni (Prodigio Learnings Pvt. Ltd.)",
    position: "Application Developer",
    type: "Internship",
    fromMonth: 9,
    fromYear: 2021,
    toMonth: 2,
    toYear: 2022,
    location: "Bengaluru",
    description:
      "Refactored the company's employment and learning portals to improve user flow and digital security.",
    bullets: [
      "Increased site usability by 30% through a comprehensive restructuring of the onboarding and job application UI.",
      "Digitized workshop operations for 25+ courses by building an independent student-registration and attendee-tracking system, providing stakeholders with actionable datasets.",
      "Protected organizational data by implementing standardized security measures and safeguards to prevent malware attacks.",
    ],
    techStack: ["JavaScript", "PHP", "Golang", "UI/UX Design", "Web Security"],
  },
  {
    companyName: "DigiiGo Technologies",
    position: "Frontend Developer",
    type: "Internship",
    fromMonth: 4,
    fromYear: 2021,
    toMonth: 5,
    toYear: 2021,
    location: "Bengaluru",
    description:
      "Specialized in creating fluid, data-driven user interfaces within complex frontend frameworks.",
    bullets: [
      "Developed 15+ responsive UI screens, ensuring a seamless visual experience across various web projects.",
      "Streamlined frontend state management by implementing React-Redux, resulting in more predictable and efficient data handling.",
    ],
    techStack: ["React", "Redux", "CSS", "HTML5"],
  },
];

export const skills: Skill[] = [
  {
    name: "JavaScript",
    YoE: 3,
    type: "Language",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    YoE: 2,
    type: "Language",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    YoE: 1,
    type: "Language",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  // {
  //   name: "Golang",
  //   YoE: 1,
  //   type: "Language",
  //   logoLink:
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
  // },
  // {
  //   name: "Java",
  //   YoE: 1,
  //   type: "Language",
  //   logoLink:
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  // },
  {
    name: "Bash",
    YoE: 3,
    type: "Language",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
  },
  {
    name: "React",
    YoE: 3,
    type: "Framework",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    YoE: 1,
    type: "Framework",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Next.js",
    YoE: 2,
    type: "Framework",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    YoE: 3,
    type: "Framework",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    YoE: 3,
    type: "Framework",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "FastAPI",
    YoE: 1,
    type: "Framework",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "PostgreSQL",
    YoE: 1,
    type: "Database",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    YoE: 2,
    type: "Database",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Vite",
    YoE: 1,
    type: "Misc",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Jest",
    YoE: 1,
    type: "Misc",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  },
  {
    name: "Docker",
    YoE: 1,
    type: "Misc",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    YoE: 3,
    type: "Misc",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Postman",
    YoE: 3,
    type: "Misc",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    name: "vscode",
    YoE: 3,
    type: "Misc",
    logoLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
];

export const projects: Project[] = [
  {
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and experience in a clean and responsive design.",
    techStack: ["React", "Tailwind CSS", "Vite"],
    githubLink: "",
  },
  {
    name: "GunnerGraphs",
    description:
      "A comprehensive analytics dashboard for Arsenal FC, providing real-time statistical insights, player performance metrics, and historical competition data.",
    techStack: ["React", "Vite", "Node.js", "PostgreSQL"],
    githubLink: "",
  },
  {
    name: "MDux",
    description:
      "A sophisticated Markdown editor featuring a UI-driven formatting toolkit that allows users to create .md files with a seamless, word-processor-style experience.",
    techStack: ["React", "Node.js", "Tailwind CSS"],
    githubLink: "",
  },
  {
    name: "Tradigami",
    description:
      "A simulated market environment for risk-free paper trading, allowing users to test financial strategies using virtual capital and live market data feeds.",
    techStack: ["React", "FastAPI", "PostgreSQL"],
    githubLink: "",
  },
];

export const socials: socialMedia[] = [
  {
    name: "GitHub",
    handle: "@Vishnu01A",
    href: "https://github.com/Vishnu01A",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "LinkedIn",
    handle: "vishnurkumar01",
    href: "https://www.linkedin.com/in/vishnurkumar01/",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
  },
];
