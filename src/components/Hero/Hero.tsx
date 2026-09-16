import Link from "next/link";
import styles from "./Hero.module.css";
import { Mail, Linkedin, GitBranch } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>TECHNICAL PRODUCT MANAGER | AGILE SCRUM MASTER</p>

          <h1 className={styles.title}>
            Hi, I&apos;m Neltine.
            <span>I ask a lot of "WHY?"</span>
          </h1>

          <p className={styles.description}>
            I&apos;m a Product Manager with a software engineering
            background. I dig into problems, challenge assumptions,
            and work with teams to figure out what’s actually worth
            building.
          </p>

          <div className={styles.actions}>
            <Link href="/work" className={styles.primaryButton}>
              View my work →
            </Link>

            <Link href="/contact" className={styles.secondaryLink}>
              Get in touch
            </Link>
          </div>

        <div className={styles.socials}>
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className={styles.socialLink}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.47v6.29zM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.54V8.98H7.1v11.47zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
    <span></span>
  </a>

  <a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className={styles.socialLink}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.45 11.45 0 0 1 6.01 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .3z" />
    </svg>
    <span></span>
  </a>

  <a
    href="mailto:neltineunyoh8@gmail.com"
    aria-label="Email"
    className={styles.socialLink}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
    <span></span>
  </a>
</div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualLines} />

          <div className={`${styles.circle} ${styles.circleOne}`} />
<div className={`${styles.circle} ${styles.circleTwo}`} />

          <div className={styles.annotation}>
          <span>Why?</span>
<span>What?</span>
<span>How?</span>
<span>Now what?</span>
          </div>

          <div className={styles.location}>
            Cameroon
            <br />
            and beyond
          </div>

     <div className={styles.photoWrapper}>
  <Image
    src="/me.png"
    alt="Neltine Unyoh"
    fill
    priority
    className={styles.photo}
    sizes="(max-width: 900px) 75vw, 420px"
  />
</div>
        </div>
      </div>
    </section>
  );
}