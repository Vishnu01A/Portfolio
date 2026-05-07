import { useEffect, useRef, useState } from "react";
import { socials } from "../data/portfolioContent";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

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

  const handleCopy = () => {
    navigator.clipboard
      .writeText("vishnu.r.kumar.official@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  return (
    <section
      id="contact"
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
        CONTACT
      </span>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "var(--text-primary)",
          marginBottom: "1rem",
        }}
      >
        Let's work <span style={{ fontStyle: "italic" }}>together.</span>
      </h2>
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "1rem",
          lineHeight: 1.75,
          maxWidth: "480px",
          marginBottom: "3rem",
        }}
      >
        I'm currently open to new opportunities — freelance projects, full-time
        roles, or just a good conversation about tech. My inbox is always open.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          alignItems: "start",
        }}
      >
        <div
          style={{
            padding: "1.5rem",
            borderRadius: "12px",
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: "600",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              marginBottom: "1rem",
            }}
          >
            FIND ME ON
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.6rem 0.75rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--surface-hover)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-secondary)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  {s.svg && (
                    <img
                      src={s.svg}
                      alt={s.name}
                      style={{ width: "1.5rem", height: "1.5rem" }}
                    />
                  )}
                  <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                    {s.name}
                  </span>
                </div>
                <span
                  style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}
                >
                  {s.handle}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1.25rem 1.5rem",
              borderRadius: "12px",
              backgroundColor: "var(--accent-light)",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "0.2rem",
                }}
              >
                Email
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "var(--accent)",
                  fontWeight: "500",
                }}
              >
                vishnu.r.kumar.official@gmail.com
              </div>
            </div>
            <button
              onClick={handleCopy}
              title="Copy email"
              style={{
                padding: "0.4rem 0.875rem",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--text-secondary)",
                fontSize: "0.75rem",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}
            >
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </div>

          <div
            style={{
              padding: "1rem 1.25rem",
              borderRadius: "10px",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#4ade80",
                boxShadow: "0 0 0 3px rgba(74, 222, 128, 0.2)",
                flexShrink: 0,
              }}
            />
            <div>
              <div
                style={{
                  fontSize: "0.83rem",
                  fontWeight: "500",
                  color: "var(--text-primary)",
                }}
              >
                Available for work
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                Typically responds within 24h
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
