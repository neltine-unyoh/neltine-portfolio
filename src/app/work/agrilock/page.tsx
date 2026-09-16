import styles from "./AgriLockCaseStudy.module.css";
export default function AgriLockCaseStudy() {
  return (
<main className={styles.page}>
       <section className={styles.hero}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>
        CASE STUDY · 0→1 PRODUCT · AGRITECH · FINTECH
      </p>

      <h1 className={styles.title}>
        AgriLock: Designing a trust layer for agriculture financing.
      </h1>

      <p className={styles.heroDescription}>
        Exploring how verification, structured financing, and transparent
        transactions could connect farmers with buyers, investors, and
        insurers.
      </p>
    </div>
  </div>
</section>

   <section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>OVERVIEW</p>

      <h2 className={styles.heading}>
        Exploring a new trust model for agricultural finance.
      </h2>

      <div className={styles.overviewGrid}>
        <div className={styles.overviewItem}>
          <span>Product</span>
          <strong>AgriLock</strong>
        </div>

        <div className={styles.overviewItem}>
          <span>Role</span>
          <strong>Product Manager</strong>
        </div>

        <div className={styles.overviewItem}>
          <span>Product type</span>
          <strong>0→1 Product Concept</strong>
        </div>

        <div className={styles.overviewItem}>
          <span>Industry</span>
          <strong>Agriculture / Fintech</strong>
        </div>

        <div className={styles.overviewItem}>
          <span>Market</span>
          <strong>Cameroon</strong>
        </div>
      </div>
    </div>
  </div>
</section>
      <section>
        <p>01 · OPPORTUNITY</p>

        <h2>
          Agriculture needs capital. Capital needs confidence.
        </h2>

        <p>
          Farmers can struggle to access financing, while buyers, investors,
          and insurers face uncertainty around production, delivery, and
          repayment.
        </p>

        <p>
          The opportunity was to explore whether a product could reduce this
          trust gap by creating a more structured and transparent financing
          process.
        </p>
      </section>

      <section>
        <p>02 · THE PROBLEM</p>

        <h2>
          How might we make agricultural financing more trustworthy for every
          participant?
        </h2>

        <p>
          The challenge was not simply providing farmers with access to money.
          The product needed to create enough confidence for multiple parties
          to participate in the same transaction.
        </p>
      </section>

     <section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>03 · THE ECOSYSTEM</p>

      <h2 className={styles.heading}>
        This was a multi-sided problem.
      </h2>

      <p className={styles.body}>
        Each participant has a different objective, but the transaction only
        works when the participants can trust the information and commitments
        of the others.
      </p>

      <div className={styles.ecosystem}>
        <div className={styles.actorRow}>
          <div className={styles.actor}>
            <span>01</span>
            <strong>Farmer</strong>
            <p>Needs capital to produce.</p>
          </div>

          <div className={styles.actor}>
            <span>02</span>
            <strong>Investor</strong>
            <p>Needs confidence that capital will be used responsibly.</p>
          </div>
        </div>

        <div className={styles.ecosystemCore}>
          <span>TRUST LAYER</span>
          <strong>AGRILOCK</strong>
          <p>Verification · Milestones · Transparency</p>
        </div>

        <div className={styles.actorRow}>
          <div className={styles.actor}>
            <span>03</span>
            <strong>Buyer</strong>
            <p>Needs confidence in production and delivery.</p>
          </div>

          <div className={styles.actor}>
            <span>04</span>
            <strong>Insurer</strong>
            <p>Needs reliable information to assess risk.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section>
        <p>04 · PRODUCT HYPOTHESIS</p>

        <h2>
          What if trust could become part of the product?
        </h2>

        <p>
          AgriLock explores the use of verification, milestone-based
          financing, transaction records, and smart contracts as mechanisms
          for reducing uncertainty between participants.
        </p>
      </section>

      <section>
        <p>05 · PRODUCT STRATEGY</p>

        <h2>
          Don't solve the entire agriculture ecosystem at once.
        </h2>

        <p>
          The initial product direction focused on creating a trusted
          transaction layer between the participants with the strongest
          dependency on one another.
        </p>
      </section>

      <section>
        <p>06 · MVP</p>

        <h2>
          Prove the trust mechanism before expanding the ecosystem.
        </h2>

        <div>
          <p>Farmer verification</p>
          <p>Farm documentation</p>
          <p>Production milestones</p>
          <p>Funding workflow</p>
          <p>Escrow</p>
          <p>Transaction visibility</p>
        </div>
      </section>

      <section>
        <p>07 · KEY PRODUCT DECISIONS</p>

        <h2>
          Designing for trust meant designing for accountability.
        </h2>
      </section>

      <section>
        <p>08 · TRADE-OFFS</p>

        <h2>
          More verification creates more trust — but also more friction.
        </h2>
      </section>

      <section>
        <p>09 · SUCCESS METRICS</p>

        <h2>
          The product succeeds when participants are willing to transact.
        </h2>
      </section>

      <section>
        <p>10 · REFLECTION</p>

        <h2>
          0→1 product work is about reducing uncertainty one assumption at a
          time.
        </h2>
      </section>
    </main>
  );
}