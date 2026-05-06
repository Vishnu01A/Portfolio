import { useEffect, useRef, useState } from "react";
import { workExperiences } from "../data/portfolioContent";
import { numberToMonth } from "../utilities/numberToMonth";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [mobileIsOpen, setMobileIsOpen] = useState(
    `${workExperiences[0].companyName}-${0}`,
  );

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

  const exp = workExperiences[active];

  return (
    <section
      id="experience"
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
          WORK EXPERIENCE
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
          Where I've <span style={{ fontStyle: "italic" }}>been.</span>
        </h2>

        <div
          className="desktop-view"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {workExperiences.map((e, i) => (
              <button
                key={`${e.companyName}-${i}`}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "left",
                  padding: "1rem 1.25rem",
                  borderRadius: "12px",
                  border: "1px solid",
                  borderColor: active === i ? "var(--accent)" : "var(--border)",
                  backgroundColor:
                    active === i ? "var(--accent-light)" : "var(--surface)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0.25rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color:
                        active === i ? "var(--accent)" : "var(--text-primary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {e.companyName}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color:
                        active === i ? "var(--accent)" : "var(--text-primary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {e.position}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    {numberToMonth(e.fromMonth)} {e.fromYear} –{" "}
                    {numberToMonth(e.toMonth)} {e.toYear}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div
            key={active}
            style={{
              padding: "2rem",
              borderRadius: "16px",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              animation: "fadeIn 0.3s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    color: "var(--text-primary)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {exp.position}
                </h3>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--accent)",
                    fontWeight: "500",
                  }}
                >
                  {exp.companyName}&ensp;[{exp.type}]
                </span>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {numberToMonth(exp.fromMonth)} {exp.fromYear} –{" "}
                  {numberToMonth(exp.toMonth)} {exp.toYear}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {exp.location}
                </div>
              </div>
            </div>

            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "var(--border)",
                margin: "1.25rem 0",
              }}
            />

            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                fontSize: "0.9rem",
                marginBottom: "1.25rem",
              }}
            >
              {exp.description}
            </p>

            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                paddingLeft: 0,
                listStyle: "none",
              }}
            >
              {exp.bullets.map((b, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
                      marginTop: "0.35rem",
                      flexShrink: 0,
                    }}
                  >
                    ▸
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "1.5rem",
              }}
            >
              {exp.techStack.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "0.3rem 0.75rem",
                    borderRadius: "100px",
                    backgroundColor: "var(--tag-bg)",
                    color: "var(--tag-text)",
                    fontSize: "0.75rem",
                    fontWeight: "500",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          className="mobile-view"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {workExperiences.map((e, i) => (
              <>
                <button
                  key={`${e.companyName}-${i}`}
                  onClick={() => setMobileIsOpen(`${e.companyName}-${i}`)}
                  style={{
                    textAlign: "left",
                    padding: "1rem 1.25rem",
                    borderRadius: "12px",
                    border: "1px solid",
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color:
                        mobileIsOpen === `${e.companyName}-${i}`
                          ? "var(--accent)"
                          : "var(--text-primary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {e.companyName}
                  </div>
                  <div
                    style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}
                  >
                    <p>{e.position}</p>
                    <p>
                      {numberToMonth(e.fromMonth)} {e.fromYear} –{" "}
                      {numberToMonth(e.toMonth)} {e.toYear}
                    </p>
                  </div>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      mobileIsOpen && mobileIsOpen === `${e.companyName}-${i}`
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div>
                        <p
                          style={{
                            color: "var(--text-secondary)",
                            lineHeight: 1.75,
                            fontSize: "0.9rem",
                            marginBottom: "1.25rem",
                          }}
                        >
                          {e.description}
                        </p>

                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.6rem",
                            paddingLeft: 0,
                            listStyle: "none",
                          }}
                        >
                          {e.bullets.map((b, i) => (
                            <li
                              key={i}
                              style={{
                                display: "flex",
                                gap: "0.75rem",
                                alignItems: "flex-start",
                                color: "var(--text-secondary)",
                                fontSize: "0.875rem",
                                lineHeight: 1.6,
                              }}
                            >
                              <span
                                style={{
                                  color: "var(--accent)",
                                  marginTop: "0.35rem",
                                  flexShrink: 0,
                                }}
                              >
                                ▸
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>

                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.5rem",
                            marginTop: "1.5rem",
                          }}
                        >
                          {e.techStack.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                padding: "0.3rem 0.75rem",
                                borderRadius: "100px",
                                backgroundColor: "var(--tag-bg)",
                                color: "var(--tag-text)",
                                fontSize: "0.75rem",
                                fontWeight: "500",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .desktop-view { display: grid !important; }
          .mobile-view { display: none !important; }
        }
        @media (max-width: 639px) {
          .desktop-view { display: none !important; }
          .mobile-view { display: grid !important; }
        }
      `}</style>
    </section>
  );
}
