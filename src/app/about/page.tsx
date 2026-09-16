import styles from "./page.module.css";

const tools = [
  {
    name: "Jira",
    logo: "https://cdn.simpleicons.org/jira/2684FF",
  },
  {
    name: "Mixpanel",
    logo: "https://cdn.simpleicons.org/mixpanel/7856FF",
  },
  {
    name: "Metabase",
    logo: "https://cdn.simpleicons.org/metabase/509EE3",
  },
  {
    name: "Figma",
    logo: "https://cdn.simpleicons.org/figma/F24E1E",
  },
  {
    name: "Notion",
    logo: "https://cdn.simpleicons.org/notion/111111",
  },
  {
    name: "Google Sheets",
    logo: "https://cdn.simpleicons.org/googlesheets/34A853",
  },
  {
    name: "Trello",
    logo: "https://cdn.simpleicons.org/trello/0052CC",
  },
  {
    name: "GitHub",
    logo: "https://cdn.simpleicons.org/github/181717",
  },
  {
    name: "ChatGPT",
    logo: "https://cdn.simpleicons.org/openai/111111",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>

      {/* =========================================
          HERO — FULL WIDTH
      ========================================= */}

      <section className={styles.hero}>
        <div className={styles.container}>

          <div className={styles.heroLeft}>

            <h1 className={styles.heroTitle}>
              I started with code.
              <br />
              <span>I stayed for the questions.</span>
            </h1>

            <div className={styles.heroText}>
              <p>
                My first instinct was to understand how things were built.
                Studying Software Engineering gave me that foundation.
              </p>

              <p>
                But the more products I worked on, the more I found myself
                thinking about the decisions behind the code. What we were
                building, who it was for, and whether it was solving the
                problem that actually mattered.
              </p>

              <p>
                That curiosity took me from writing software to shaping
                products. Today, I work at the intersection of users,
                business, and technology.
              </p>
            </div>

            <div className={styles.heroMeta}>
              <span>SOFTWARE ENGINEERING</span>
              <span>PRODUCT MANAGEMENT</span>
              <span>BUILDING PRODUCTS</span>
            </div>

          </div>

          <div className={styles.heroVisual}>

            <div className={styles.visualBlob}></div>

            <div className={styles.visualCardTop}>
              <span className={styles.cardIcon}>&lt;/&gt;</span>
              <span>Idea → Product</span>
            </div>

            <div className={styles.photoFrame}>
              <img
                src="/me5.png"
                alt="Neltine Unyoh"
                className={styles.photo}
              />
            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          THE SHIFT — FULL WIDTH
      ========================================= */}

      <section className={styles.storySection}>
        <div className={styles.container}>

          <div className={styles.storyHeader}>
            <p className={styles.sectionLabel}>THE SHIFT</p>

            <div>
              <h2>
                I didn&apos;t leave engineering. I brought it with me.
                <br />
              </h2>

              <p>
                Software Engineering taught me how to build. Product Management
                taught me to question what deserves to be built.
              </p>
            </div>
          </div>

          <div className={styles.storyTimeline}>

            {/* 01 */}

            <div className={styles.storyItem}>
              <div className={styles.storyNumber}>01</div>

              <div className={styles.storyVisual}>
                <span className={styles.visualSymbol}>&lt;/&gt;</span>
                <span>BUILD</span>
              </div>

              <p className={styles.storyCategory}>
                WHERE I STARTED
              </p>

              <h3>Software Engineering</h3>

              <p className={styles.storyDescription}>
                Engineering taught me to think in systems, understand technical
                constraints, and see what happens between an idea and the
                product that reaches a user.
              </p>

              <div className={styles.storyQuestion}>
                <span>THE QUESTION : How does it work?</span>
              </div>
            </div>


            {/* CONNECTOR */}

            <div className={styles.storyConnector}></div>


            {/* 02 */}

            <div className={styles.storyItem}>
              <div className={styles.storyNumber}>02</div>

              <div
                className={`${styles.storyVisual} ${styles.blueVisual}`}
              >
                <span className={styles.visualSymbol}>?</span>
                <span>QUESTION</span>
              </div>

              <p className={styles.storyCategory}>
                THE SHIFT
              </p>

              <h3>Product Thinking</h3>

              <p className={styles.storyDescription}>
                I started looking beyond the code; at the people using the
                product, the problem behind the request, and the decisions
                that determine whether an idea is actually worth building.
              </p>

              <div className={styles.storyQuestion}>
                <span>THE QUESTION : Why are we building it?</span>
              </div>
            </div>


            {/* CONNECTOR */}

            <div className={styles.storyConnector}></div>


            {/* 03 */}

            <div className={styles.storyItem}>
              <div className={styles.storyNumber}>03</div>

              <div
                className={`${styles.storyVisual} ${styles.finalVisual}`}
              >
                <span className={styles.visualSymbol}>↗</span>
                <span>SHAPE</span>
              </div>

              <p className={styles.storyCategory}>
                WHERE I AM NOW
              </p>

              <h3>Product Management</h3>

              <p className={styles.storyDescription}>
                Today, I bring both sides together; using technical
                understanding to shape better product decisions, from
                discovering the problem to deciding what to build and getting
                it into users&apos; hands.
              </p>

              <div className={styles.storyQuestion}>
                <span>THE QUESTION : What should we build?</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          HOW I WORK — FULL WIDTH
      ========================================= */}

      <section className={styles.decisionSection}>
        <div className={styles.container}>

          <div className={styles.sectionLabel}>
            <span>HOW I WORK</span>
          </div>

          <div className={styles.decisionIntro}>
            <h2>
              Not every good idea deserves to
              <br />
              <span>BECOME A PRODUCT.</span>
            </h2>

           
          </div>


          {/* PRODUCT PROCESS */}

          <div className={styles.process}>

            {/* DOTTED ORBIT */}

            <div className={styles.orbit}></div>


            {/* CENTER PRODUCT */}

            <div className={styles.productCircle}>
              <span className={styles.productTitle}>
                PRODUCT
              </span>

              <span className={styles.productMeta}>
                USERS&nbsp;&nbsp;•&nbsp;&nbsp;BUSINESS&nbsp;&nbsp;•&nbsp;&nbsp;IMPACT
              </span>
            </div>


            {/* 01 — UNDERSTAND */}

            <div
              className={`${styles.processNode} ${styles.nodeTop}`}
            >
              <div className={styles.nodeCircle}>

                <span className={styles.nodeNumber}>
                  01
                </span>

                <span className={styles.nodeTitle}>
                  UNDERSTAND
                </span>

                <span className={styles.nodeQuestion}>
                  What problem are we
                  <br />
                  actually solving?
                </span>

              </div>

              <div className={styles.nodeDescription}>
                I want to understand the user,
                context, pain point, and why
                the problem matters.
              </div>
            </div>


            {/* 02 — CHALLENGE */}

            <div
              className={`${styles.processNode} ${styles.nodeRight}`}
            >
              <div className={styles.nodeCircle}>

                <span className={styles.nodeNumber}>
                  02
                </span>

                <span className={styles.nodeTitle}>
                  CHALLENGE
                </span>

                <span className={styles.nodeQuestion}>
                  What do we
                  <br />
                  actually know?
                </span>

              </div>

              <div className={styles.nodeDescription}>
                I separate assumptions
                from evidence and look for
                what we still need to learn
                before making a decision.
              </div>
            </div>


            {/* 03 — DECIDE */}

            <div
              className={`${styles.processNode} ${styles.nodeBottom}`}
            >
              <div className={styles.nodeCircle}>

                <span className={styles.nodeNumber}>
                  03
                </span>

                <span className={styles.nodeTitle}>
                  DECIDE
                </span>

                <span className={styles.nodeQuestion}>
                  What is worth
                  <br />
                  building now?
                </span>

              </div>

              <div className={styles.nodeDescription}>
                There will always be more ideas
                than capacity. I focus on the
                opportunity, impact, effort,
                and what we can learn.
              </div>
            </div>


            {/* 04 — LEARN */}

            <div
              className={`${styles.processNode} ${styles.nodeLeft}`}
            >
              <div className={styles.nodeCircle}>

                <span className={styles.nodeNumber}>
                  04
                </span>

                <span className={styles.nodeTitle}>
                  LEARN
                </span>

                <span className={styles.nodeQuestion}>
                  What happens
                  <br />
                  after we ship?
                </span>

              </div>

              <div className={styles.nodeDescription}>
                Shipping is not the finish line.
                I look at what happened,
                what users did, and what the
                product should do next.
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* WHAT I WORK ON */}

<section className={styles.workSection}>
  <div className={styles.container}>

    <div className={styles.workHeader}>
      <div className={styles.sectionLabel}>
        <span>WHAT I WORK ON</span>
      </div>

      <div>
        <h2>
          From an unclear problem
          <br />
          <span>to something worth shipping.</span>
        </h2>

        <p>
          I work across the product lifecycle, connecting the problem we are
          trying to solve with the product we ultimately put in people&apos;s
          hands.
        </p>
      </div>
    </div>


    <div className={styles.workGrid}>

      {/* 01 */}

      <div className={styles.workItem}>
        <div className={styles.workTop}>
          <span>01</span>
          <span>DISCOVER</span>
        </div>

        <h3>Find the real problem.</h3>

        <p>
          I explore users, context, pain points, and opportunities before
          jumping into solutions.
        </p>

        <div className={styles.workOutput}>
          <span>OUTPUT</span>
          <strong>Problem → Opportunity</strong>
        </div>
      </div>


      {/* 02 */}

      <div className={styles.workItem}>
        <div className={styles.workTop}>
          <span>02</span>
          <span>DEFINE</span>
        </div>

        <h3>Make the idea buildable.</h3>

        <p>
          I turn product thinking into clear requirements, flows,
          specifications, and decisions that teams can actually execute.
        </p>

        <div className={styles.workOutput}>
          <span>OUTPUT</span>
          <strong>Idea → Definition</strong>
        </div>
      </div>


      {/* 03 */}

      <div className={styles.workItem}>
        <div className={styles.workTop}>
          <span>03</span>
          <span>PRIORITIZE</span>
        </div>

        <h3>Decide what matters now.</h3>

        <p>
          When there are more opportunities than capacity, I make the trade-offs
          explicit and focus the team on what creates the most value.
        </p>

        <div className={styles.workOutput}>
          <span>OUTPUT</span>
          <strong>Options → Focus</strong>
        </div>
      </div>


      {/* 04 */}

      <div className={styles.workItem}>
        <div className={styles.workTop}>
          <span>04</span>
          <span>DELIVER</span>
        </div>

        <h3>Turn decisions into reality.</h3>

        <p>
          I work closely with design and engineering to move from a product
          decision to something real, usable, and ready to learn from.
        </p>

        <div className={styles.workOutput}>
          <span>OUTPUT</span>
          <strong>Decision → Product</strong>
        </div>
      </div>

    </div>

  </div>
</section>


      {/* =========================================
          TOOLS — FULL WIDTH
      ========================================= */}

      <section className={styles.toolsSection}>
        <div className={styles.container}>

          <div className={styles.sectionLabel}>
            <span>TOOLS I WORK WITH</span>
          </div>

          <div className={styles.toolsGrid}>

            {tools.map((tool) => (
              <div
                key={tool.name}
                className={styles.tool}
              >
                <div className={styles.toolLogo}>
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                  />
                </div>

                <span>{tool.name}</span>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================
          CLOSING — FULL WIDTH
      ========================================= */}

      <section className={styles.closing}>
        <div className={styles.container}>

          <p className={styles.closingLabel}>
            ONE MORE THING
          </p>

          <h2>
            I&apos;m still learning.
            <br />
            That&apos;s part of the job.
          </h2>

          <p>
            Products change. Users change. Markets change. So I don&apos;t
            think being a good Product Manager means having every answer. I
            think it means knowing which questions to ask, learning quickly,
            and making better decisions with what you learn.
          </p>

        </div>
      </section>

    </main>
  );
}