import styles from "./page.module.css";

const experience = [
  {
    role: "Product Manager",
    company: "Mihma Corporation",
    period: "Aug 2025 — Present",
    description:
      "Working across product strategy, discovery, execution, and technology to build and improve digital products.",
  },
  {
    role: "Product Manager",
    company: "Stayverse Nigeria",
    period: "Jan 2026 — May 2026",
    description:
      "Contributed to product development, translating user and business needs into product decisions and execution priorities.",
  },
  {
    role: "Frontend Developer",
    company: "Maviance PLC",
    period: "6-month internship",
    description:
      "Worked on frontend development within a digital financial services and technology environment.",
  },
];

const skills = [
  "Product Discovery",
  "Problem Framing",
  "Product Strategy",
  "Prioritization",
  "Roadmapping",
  "User Research",
  "Product Analytics",
  "Agile / Scrum",
  "Stakeholder Management",
  "Technical Product Management",
];

export default function ResumePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>RESUME</p>

            <h1 className={styles.title}>
              Product Manager focused on turning problems into products.
            </h1>

            <p className={styles.description}>
              Product Manager with a Software Engineering background and
              experience working across product discovery, strategy,
              execution, and technology.
            </p>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.download}
          >
            Download Resume ↗
          </a>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionGrid}>
            <p className={styles.sectionLabel}>EXPERIENCE</p>

            <div className={styles.entries}>
              {experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <h2>{item.role}</h2>
                      <p className={styles.company}>{item.company}</p>
                    </div>

                    <span className={styles.period}>{item.period}</span>
                  </div>

                  <p className={styles.entryDescription}>
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionGrid}>
            <p className={styles.sectionLabel}>EDUCATION</p>

            <div className={styles.entry}>
              <div className={styles.entryHeader}>
                <div>
                  <h2>Bachelor of Science in Software Engineering</h2>
                  <p className={styles.company}>
                    Institute of Management and Engineering
                  </p>
                </div>

                <span className={styles.period}>Aug 2025</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionGrid}>
            <p className={styles.sectionLabel}>PRODUCT SKILLS</p>

            <div className={styles.skills}>
              {skills.map((skill) => (
                <span key={skill} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionGrid}>
            <p className={styles.sectionLabel}>TRAINING</p>

            <div className={styles.content}>
              <h2>Product Management Training</h2>

              <p>
                Product Management training through Prodefied Nigeria,
                strengthening my understanding of product discovery, strategy,
                prioritization, and execution.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.closing}>
          <p className={styles.sectionLabel}>LET&apos;S TALK</p>

          <h2>
            Looking for a Product Manager who can bridge product thinking and
            technical execution?
          </h2>
        </section>
      </div>
    </main>
  );
}