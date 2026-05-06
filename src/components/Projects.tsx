import { useEffect, useRef } from "react";
import { projects } from "../data/portfolioContent";

// const projects = [
//   {
//     number: '01',
//     title: 'Meridian Dashboard',
//     description: 'A data analytics platform for e-commerce teams. Features real-time sales tracking, cohort analysis, and automated reporting. Built from scratch as a solo project.',
//     tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
//     links: { live: '#', github: '#' },
//     featured: true,
//     accentColor: 'var(--accent)',
//   },
//   {
//     number: '02',
//     title: 'Quill CMS',
//     description: 'An open-source headless CMS with a focus on developer experience. Supports Markdown, MDX, and custom schemas. 200+ GitHub stars.',
//     tags: ['Next.js', 'Prisma', 'SQLite', 'tRPC'],
//     links: { live: '#', github: '#' },
//     featured: true,
//     accentColor: 'var(--accent-warm)',
//   },
//   {
//     number: '03',
//     title: 'Tempo',
//     description: 'A minimalist time-tracking app for freelancers. Offline-first PWA with sync. Built to scratch my own itch — I use it daily.',
//     tags: ['Vue.js', 'IndexedDB', 'PWA', 'Tailwind'],
//     links: { live: '#', github: '#' },
//     featured: false,
//     accentColor: 'var(--accent)',
//   },
//   {
//     number: '04',
//     title: 'Spellcheck CLI',
//     description: 'A fast, configurable CLI tool for spell-checking documentation and codebases. Supports custom dictionaries and CI integration.',
//     tags: ['Rust', 'CLI', 'Open Source'],
//     links: { live: null, github: '#' },
//     featured: false,
//     accentColor: 'var(--accent-warm)',
//   },
// ]

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // const featured = projects.filter(p => p.featured)
  // const others = projects.filter(p => !p.featured)

  return (
    <section
      id="projects"
      ref={ref}
      className="section-reveal"
      style={{
        padding: "7rem 2rem",
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <span
          style={{
            display: "block",
            fontSize: "0.75rem",
            fontWeight: "600",
            letterSpacing: "0.12em",
            color: "var(--accent)",
            marginBottom: "1rem",
          }}
        >
          PROJECTS
        </span>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "3rem",
          }}
        >
          Things I've <span style={{ fontStyle: "italic" }}>built.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {projects.map((p, i) => (
            <div
              key={p.name}
              style={{
                padding: "2rem",
                borderRadius: "16px",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 8px 30px var(--shadow)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "4rem",
                  fontStyle: "italic",
                  color: "var(--border)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </div>

              <div
                style={{
                  width: "32px",
                  height: "3px",
                  borderRadius: "2px",
                  // backgroundColor: p.accentColor,
                  marginBottom: "1.25rem",
                }}
              />

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}
              >
                {p.name}
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                }}
              >
                {p.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "1.5rem",
                }}
              >
                {p.techStack.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "0.25rem 0.65rem",
                      borderRadius: "100px",
                      backgroundColor: "var(--tag-bg)",
                      color: "var(--tag-text)",
                      fontSize: "0.72rem",
                      fontWeight: "500",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a
                  href={p.githubLink}
                  onClick={(e) => e.preventDefault()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    fontWeight: "500",
                    textDecoration: "none",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
