import Link from "next/link";
import styles from "./SelectedWork.module.css";

const projects = [
  {
    number: "01",
    name: "Kora",
    type: "B2B SAAS · PRODUCT MANAGEMENT",
    description:
      "A business management platform designed to help SMEs manage sales, inventory, expenses, payments, and daily operations.",
    tags: ["SaaS", "B2B", "Product Management"],
    href: "/work/kora",
    logo: "/kora.svg",
    logoAlt: "Kora logo",
  },

  {
    number: "02",
    name: "WhatsApp",
    type: "PRODUCT ANALYSIS · CONSUMER",
    description:
      "An independent teardown exploring how WhatsApp has evolved from messaging into a broader communication and commerce ecosystem.",
    tags: ["Product Strategy", "Consumer", "Teardown"],
    href: "/work/whatsapp",
    logo: "/wpl.png",
    logoAlt: "WhatsApp logo",
  },

  {
    number: "03",
    name: "MTN MoMo",
    type: "PRODUCT ANALYSIS · FINTECH",
    description:
      "An independent product analysis examining MTN MoMo’s mobile money ecosystem, user journeys, trust mechanisms, and opportunities for improvement.",
    tags: ["Fintech", "Product Strategy", "Analysis"],
    href: "/work/mtn-momo",
    logo: "/mtn.png",
    logoAlt: "MTN MoMo logo",
  },
];

export default function SelectedWork() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>SELECTED WORK</p>

            <h2 className={styles.title}>
              A few products. A lot of questions.
            </h2>
          </div>

          <Link href="/work" className={styles.viewAll}>
            View all work →
          </Link>
        </div>

        <div className={styles.projects}>
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className={styles.project}
            >
              <div className={styles.projectHeader}>
                <span className={styles.number}>{project.number}</span>

                <span className={styles.arrow}>↗</span>
              </div>

              <div className={styles.main}>
                <div className={styles.logoArea}>
                  <img
                    src={project.logo}
                    alt={project.logoAlt}
                    className={styles.logo}
                  />
                </div>

                <div className={styles.projectContent}>
                  <p className={styles.projectType}>{project.type}</p>

                  <h3 className={styles.projectName}>{project.name}</h3>

                  <p className={styles.description}>
                    {project.description}
                  </p>

                  <div className={styles.projectFooter}>
                    <div className={styles.tags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                   
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}