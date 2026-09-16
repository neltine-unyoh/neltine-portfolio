import styles from "./page.module.css";

const principles = [
  {
    number: "01",
    title: "Start with the problem.",
    description:
      "I don't start by asking what feature we should build. I start by understanding what is actually going wrong, who is affected, and why the problem matters.",
  },
  {
    number: "02",
    title: "Separate symptoms from root causes.",
    description:
      "A visible problem is not always the real problem. I break down the situation until I understand the behavior, constraint, or underlying cause that is creating the friction.",
  },
  {
    number: "03",
    title: "Prioritize outcomes, not feature volume.",
    description:
      "When everything looks important, I evaluate opportunities based on user value, business impact, evidence, strategic fit, and the effort required to learn or deliver.",
  },
  {
    number: "04",
    title: "Make trade-offs explicit.",
    description:
      "Product decisions always involve constraints. I make the trade-offs visible so the team understands what we are choosing, what we are giving up, and why.",
  },
  {
    number: "05",
    title: "Treat MVP as a learning tool.",
    description:
      "An MVP should be the smallest intervention capable of testing an important assumption or delivering meaningful value. Smaller does not automatically mean better.",
  },
  {
    number: "06",
    title: "Measure behavior and outcomes.",
    description:
      "I want metrics to answer a product question. I look beyond activity and vanity metrics to understand whether users changed their behavior and whether the product created the intended outcome.",
  },
];

export default function HowIThinkPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>HOW I THINK</p>

          <h1 className={styles.title}>
            When a product problem is messy, I make the thinking visible.
          </h1>

          <p className={styles.description}>
            My product process is not about following a checklist. It is about
            asking better questions, making informed decisions, and reducing
            uncertainty before committing resources.
          </p>
        </section>

        <section className={styles.intro}>
          <p className={styles.sectionLabel}>MY PRODUCT MINDSET</p>

          <div className={styles.introContent}>
            <h2>
              Good product management is the discipline of deciding what
              deserves to be built — and why.
            </h2>

            <p>
              I approach product problems by moving from ambiguity toward
              evidence, from evidence toward decisions, and from decisions
              toward measurable outcomes.
            </p>
          </div>
        </section>

        <section className={styles.principles}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>PRINCIPLES</p>

            <p className={styles.sectionNote}>
              The principles I use when making product decisions.
            </p>
          </div>

          <div className={styles.list}>
            {principles.map((principle) => (
              <article key={principle.number} className={styles.principle}>
                <span className={styles.number}>{principle.number}</span>

                <div className={styles.principleContent}>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.decision}>
          <p className={styles.sectionLabel}>A TYPICAL DECISION</p>

          <div className={styles.decisionContent}>
            <p className={styles.question}>The situation</p>

            <h2>
              The team has more potential work than it can realistically build.
            </h2>

            <p className={styles.question}>My first questions</p>

            <ul>
              <li>What problem is each proposed feature solving?</li>
              <li>Who experiences that problem?</li>
              <li>How frequently and severely does it occur?</li>
              <li>What evidence do we have?</li>
              <li>What outcome are we trying to improve?</li>
              <li>What is the cost of not solving it?</li>
            </ul>

            <p className={styles.question}>The decision</p>

            <p>
              I would not prioritize the features simply because they are
              requested. I would first understand the problems behind them,
              compare their expected value, identify the riskiest assumptions,
              and choose the smallest set of work that can create meaningful
              value or generate important learning.
            </p>
          </div>
        </section>

        <section className={styles.closing}>
          <p className={styles.sectionLabel}>THE STANDARD</p>

          <h2>
            I want every product decision to have a reason behind it — and
            evidence strong enough to change my mind.
          </h2>
        </section>
      </div>
    </main>
  );
}