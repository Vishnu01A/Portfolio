export default function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent-light) 0%, transparent 70%)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          {/* <div
            className="animate-fade-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
              padding: '0.35rem 0.875rem',
              borderRadius: '100px',
              backgroundColor: 'var(--accent-light)',
              border: '1px solid var(--border)',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '500', letterSpacing: '0.05em' }}>
              Open to opportunities
            </span>
          </div> */}

          <h1
            className="animate-fade-up-delay-1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Building digital experiences that matter.
          </h1>

          <p
            className="animate-fade-up-delay-2"
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              marginBottom: "2.5rem",
              maxWidth: "540px",
            }}
          >
            I'm a full-stack developer with a focus on thoughtful design and
            clean architecture. I build products that are fast, accessible, and
            a joy to use.
          </p>

          <div
            className="animate-fade-up-delay-3"
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "#projects")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "10px",
                backgroundColor: "var(--text-primary)",
                color: "var(--bg)",
                fontWeight: "500",
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.85";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              View my work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.75rem 1.5rem",
                borderRadius: "10px",
                border: "1px solid var(--border)",
                backgroundColor: "transparent",
                color: "var(--text-secondary)",
                fontWeight: "500",
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--surface)";
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
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
