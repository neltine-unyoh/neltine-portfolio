import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        <section className={styles.hero}>
          <p className={styles.eyebrow}>ABOUT</p>

          <h1 className={styles.heroTitle}>
            I&apos;m a Product Manager who enjoys turning ambiguous problems
            into focused product decisions.
          </h1>

          <p className={styles.heroDescription}>
            I work across product discovery, strategy, and execution, with a
            background in software engineering and hands-on experience building
            digital products.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionGrid}>
            <p className={styles.sectionLabel}>MY APPROACH</p>

            <div className={styles.content}>
              <h2>
                I care more about solving the right problem than simply
                building more features.
              </h2>

              <p>
                My approach starts with understanding the problem, the people
                experiencing it, and the outcome the product needs to create.
                From there, I use evidence, prioritization, and clear
                trade-offs to decide what should be built — and what should
                not.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionGrid}>
            <p className={styles.sectionLabel}>BACKGROUND</p>

            <div className={styles.content}>
              <p>
                I have a background in Software Engineering and experience
                working across product management, technology, and digital
                product development.
              </p>

              <p>
                Working close to both business and technical teams has shaped
                how I approach product decisions. I can think about the user
                problem, business value, and technical constraints at the same
                time.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionGrid}>
            <p className={styles.sectionLabel}>WHAT I BRING</p>

            <div className={styles.skills}>
              <div className={styles.skill}>
                Product discovery &amp; problem framing
              </div>

              <div className={styles.skill}>
                Product strategy &amp; prioritization
              </div>

              <div className={styles.skill}>
                User-centered product thinking
              </div>

              <div className={styles.skill}>
                Cross-functional collaboration
              </div>

              <div className={styles.skill}>
                Technical understanding
              </div>

              <div className={styles.skill}>
                Product execution &amp; delivery
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
  <div className={styles.sectionGrid}>
    <p className={styles.sectionLabel}>CORE COMPETENCIES</p>

    <div className={styles.competencies}>
      <div className={styles.competency}>
        <h3>Product Strategy & Discovery</h3>
        <p>
          Product discovery, user research, market research, competitive
          analysis, problem definition, and MVP definition.
        </p>
      </div>

      <div className={styles.competency}>
        <h3>Product Requirements</h3>
        <p>
          PRDs, product specifications, product briefs, user stories,
          acceptance criteria, user flows, and requirements definition.
        </p>
      </div>

      <div className={styles.competency}>
        <h3>Prioritization & Decision Making</h3>
        <p>
          Roadmapping, backlog prioritization, feature prioritization,
          trade-off analysis, hypothesis validation, and data-informed
          decision making.
        </p>
      </div>

      <div className={styles.competency}>
        <h3>Product Analytics</h3>
        <p>
          Product metrics, KPI definition, user behavior analysis, funnel
          analysis, feature adoption, and A/B testing.
        </p>
      </div>

      <div className={styles.competency}>
        <h3>Delivery & Collaboration</h3>
        <p>
          Agile, Scrum, backlog management, sprint planning, backlog
          refinement, release planning, QA, and stakeholder management.
        </p>
      </div>
    </div>
  </div>
</section>

<section className={styles.section}>
  <div className={styles.sectionGrid}>
    <p className={styles.sectionLabel}>WORK TOOLS</p>

    <div className={styles.tools}>
      <span>Jira</span>
      <span>Mixpanel</span>
      <span>Metabase</span>
      <span>Figma</span>
      <span>Notion</span>
      <span>Google Sheets</span>
      <span>Trello</span>
      <span>GitHub</span>
      <span>ChatGPT</span>
      <span>AI / LLM Tools</span>
    </div>
  </div>
</section>

        <section className={styles.section}>
          <div className={styles.sectionGrid}>
            <p className={styles.sectionLabel}>BEYOND THE TITLE</p>

            <div className={styles.content}>
              <h2>
                I&apos;m constantly learning how products earn trust, create
                value, and become part of people&apos;s everyday lives.
              </h2>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}