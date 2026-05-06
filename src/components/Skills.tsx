import { useEffect, useRef } from "react";
import { skills } from "../data/portfolioContent";

const skillGroups = [
  {
    category: "Languages",
    icon: "◈",
    skills: [...skills.filter((s) => s.type === "Language")],
  },
  {
    category: "Frameworks & Databases",
    icon: "◉",
    skills: [
      ...skills.filter((s) => s.type === "Framework" || s.type === "Database"),
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "◎",
    skills: [...skills.filter((s) => s.type === "Misc")],
  },
];

const otherSkills = [
  "REST APIs",
  "WebSockets",
  "CI/CD",
  "System Design",
  "Performance Optimization",
  "Database Design",
  "Agile / Scrum",
  "Code Review",
  "Unit Testing",
];

export default function Skills() {
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

  return (
    <section
      id="skills"
      ref={ref}
      className="section-reveal"
      style={{ padding: "7rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
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
        SKILLS
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
        My <span style={{ fontStyle: "italic" }}>toolkit.</span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(auto-fit, minmax(18rem, 1fr))",
          gap: "1.5rem",
          marginBottom: "2.5rem",
        }}
      >
        {skillGroups.map((group) => (
          <div
            key={group.category}
            style={{
              padding: "1.75rem",
              borderRadius: "16px",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  color: "var(--accent)",
                  fontSize: "1.1rem",
                  paddingBottom: "4px",
                }}
              >
                {group.icon}
              </span>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "var(--text-primary)",
                  letterSpacing: "0.02em",
                }}
              >
                {group.category}
              </h3>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 110px))",
                // maxWidth: "30rem",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      width={75}
                      height={75}
                      src={skill.logoLink}
                      alt={`${skill.name} logo`}
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "1.5rem 1.75rem",
          borderRadius: "16px",
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h3
          style={{
            fontSize: "0.85rem",
            fontWeight: "600",
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            marginBottom: "1rem",
          }}
        >
          ALSO FAMILIAR WITH
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {otherSkills.map((skill) => (
            <span
              key={skill}
              style={{
                padding: "0.35rem 0.875rem",
                borderRadius: "100px",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                fontSize: "0.8rem",
                transition: "all 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--accent-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-secondary)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
