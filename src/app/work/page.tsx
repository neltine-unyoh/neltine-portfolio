import Link from "next/link";
import styles from "./page.module.css";

const originalProjects = [
  {
    number: "01",
    name: "Kora",
    type: "Product Management · SaaS · B2B",
    description:
      "A business management platform designed to help businesses manage sales, inventory, expenses, payments, and day-to-day operations.",
    tags: ["Product Management", "SaaS", "B2B"],
    href: "/work/kora",
  },
  {
    number: "02",
    name: "AgriLock",
    type: "0→1 Product · Fintech · Agriculture",
    description:
      "A product concept exploring how trust and transparency can connect farmers with buyers, investors, and insurers.",
    tags: ["0→1 Product", "Fintech", "Agriculture"],
    href: "/work/agrilock",
  },
];

const analysisProjects = [
  {
    number: "03",
    name: "WhatsApp",
    type: "Product Teardown · Consumer",
    description:
      "An independent product analysis exploring the relationship between communication, user behavior, and action.",
    tags: ["Product Strategy", "Consumer", "Teardown"],
    href: "/work/whatsapp",
  },
  {
    number: "04",
    name: "MTN MoMo",
    type: "Product Analysis · Fintech",
    description:
      "An independent product analysis focused on payments, trust, accessibility, and ecosystem dynamics.",
    tags: ["Fintech", "Payments", "Ecosystem"],
    href: "/work/mtn-momo",
  },
  {
    number: "05",
    name: "Yango",
    type: "Product Analysis · Marketplace",
    description:
      "An independent product analysis exploring marketplace dynamics, supply and demand, trust, and operational trade-offs.",
    tags: ["Marketplace", "Growth", "Operations"],
    href: "/work/yango",
  },
];

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof originalProjects)[number];
  featured?: boolean;
}) {
  return (
    <Link
      href={project.href}
      className={`${styles.project} ${featured ? styles.original : ""}`}
    >
      <div className={styles.projectTop}>
        <span className={styles.number}>{project.number}</span>
        <span className={styles.arrow}>↗</span>
      </div>

      <div className={styles.projectContent}>
        <p className={styles.projectType}>{project.type}</p>

        <h2 className={styles.projectName}>{project.name}</h2>

        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>WORK</p>

          <h1 className={styles.title}>
            Products, problems, and decisions I&apos;ve worked through.
          </h1>

          <p className={styles.description}>
            A selection of product work spanning real-world product execution,
            0→1 thinking, and independent product analysis.
          </p>
        </section>

        <section className={styles.projects}>
          {originalProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              featured
            />
          ))}

          <div className={styles.analysis}>
            {analysisProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className={styles.note}>
          <p className={styles.noteLabel}>A NOTE ON THE WORK</p>

          <p className={styles.noteText}>
            Kora and AgriLock represent hands-on product work and 0→1 product
            thinking. The remaining projects are independent analyses intended
            to demonstrate how I approach existing products, identify
            opportunities, and reason through trade-offs.
          </p>
        </section>
      </div>
    </main>
  );
}