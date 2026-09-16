import Link from "next/link";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>CONTACT</p>

          <h1 className={styles.title}>
            Have a product problem worth solving?
          </h1>

          <p className={styles.description}>
            I&apos;m open to Product Management opportunities, conversations
            about products, and teams building meaningful digital experiences.
          </p>
        </section>

        <section className={styles.contactSection}>
          <div>
            <p className={styles.label}>EMAIL</p>

            <a
              href="mailto:your-email@example.com"
              className={styles.email}
            >
              your-email@example.com
            </a>
          </div>

          <div className={styles.links}>
            <p className={styles.label}>ELSEWHERE</p>

            <Link href="/resume" className={styles.link}>
              Resume ↗
            </Link>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub ↗
            </a>
          </div>
        </section>

        <section className={styles.closing}>
          <p>
            I&apos;m always interested in understanding difficult problems,
            learning from strong product teams, and building products that
            create real value.
          </p>
        </section>
      </div>
    </main>
  );
}