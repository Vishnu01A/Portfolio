import { useState, useEffect } from "react";
import { about } from "../data/portfolioContent";
import { navbarItems } from "../data/siteContents";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navbarItems.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      // className={`fixed top-0 inset-x-0 z-100 transition-all duration-300 ease-in-out border-b ${
      //   scrolled
      //   ? 'bg-surface/50 border-border backdrop-blur-md shadow-nav'
      //   : 'bg-surface border-transparent shadow-none backdrop-blur-none'
      // }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled
          ? "color-mix(in srgb, var(--surface) 50%, transparent)"
          : "var(--surface)",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? `0 2px 20px var(--shadow)` : "none",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              fontStyle: "italic",
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            {about.name}
          </a>

          <nav
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
            className="desktop-nav"
          >
            {navbarItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  padding: "0.4rem 0.75rem",
                  fontSize: "0.875rem",
                  fontWeight:
                    activeSection === link.href.slice(1) ? "600" : "400",
                  color:
                    activeSection === link.href.slice(1)
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  textDecoration: "none",
                  borderRadius: "6px",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor =
                    "var(--surface-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor =
                    "transparent";
                }}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              style={{
                marginLeft: "0.5rem",
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--text-secondary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--surface-hover)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--surface)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-secondary)";
              }}
            >
              {theme === "light" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
          </nav>

          <div
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            className="mobile-controls"
          >
            <button
              onClick={toggleTheme}
              title="Toggle theme"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--text-secondary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {theme === "light" ? (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--text-secondary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {menuOpen ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="animate-slide-down"
            style={{
              borderTop: "1px solid var(--border)",
              padding: "0.75rem 0 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {navbarItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  padding: "0.6rem 0.75rem",
                  fontSize: "0.9rem",
                  color:
                    activeSection === link.href.slice(1)
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  fontWeight:
                    activeSection === link.href.slice(1) ? "600" : "400",
                  textDecoration: "none",
                  borderRadius: "6px",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
      <style>{`
        @media (min-width: 640px) {
          .desktop-nav { display: flex !important; }
          .mobile-controls { display: none !important; }
        }
        @media (max-width: 639px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
