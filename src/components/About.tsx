import { useEffect, useRef } from "react";
import { about, aboutStats } from "../data/portfolioContent";
import codingImg from "../assets/coding.svg";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="section-reveal"
      style={{ padding: "7rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        <div>
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
            ABOUT ME
          </span>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            A developer who
            <br />
            cares about the <span style={{ fontStyle: "italic" }}>craft</span>.
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {about.description.split("\n\n").map((para, i) => (
              <p
                key={i}
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          <a
            href="/Vishnu R Kumar (SDE-J).pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "2rem",
              padding: "0.6rem 1.25rem",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: "500",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-secondary)";
            }}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
            View Resume
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "4/3",
              borderRadius: "16px",
              backgroundColor: "var(--bg-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
              marginBottom: "1rem",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div />
            <img src={codingImg} alt="Coding" className="coding" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
            }}
          >
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: "1.25rem",
                  borderRadius: "12px",
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--text-primary)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
