import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <p className={styles.kicker}>LET&apos;S MAKE SOMETHING USEFUL</p>
          <h2 className={styles.title}>Good products begin with better questions.</h2>
          <Link href="/contact" className={styles.cta}>
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Neltine Unyoh</span>
          <div className={styles.links}>
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
