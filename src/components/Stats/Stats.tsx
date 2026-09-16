import styles from "./Stats.module.css";

const stats = [
  {
    number: "2+",
    index: "01",
    label: "Years",
    description: "in Product Management",
  },
  {
    number: "5",
    index: "02",
    label: "Products",
    description: "& analyses",
  },
  {
    number: "4+",
    index: "03",
    label: "Certifications",
    description: "across product & delivery",
  },
  {
    number: "3+",
    index: "04",
    label: "Disciplines",
    description: "strategy · discovery · execution",
  },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <span className={styles.kicker}>AT A GLANCE</span>
          <p>
            A little context
            <br />
            about my work.
          </p>
        </div>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.index} className={styles.stat}>
              <span className={styles.index}>{stat.index}</span>

              <span className={styles.number}>{stat.number}</span>

              <div className={styles.text}>
                <span className={styles.label}>{stat.label}</span>
                <span className={styles.description}>
                  {stat.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}