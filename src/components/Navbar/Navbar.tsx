"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "How I Think", href: "/how-i-think" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
<header
  className={`${styles.header} ${
    pathname === "/" ? styles.homeHeader : ""
  }`}
>      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Neltine Unyoh
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/work" && pathname.startsWith("/work/"));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  isActive ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}