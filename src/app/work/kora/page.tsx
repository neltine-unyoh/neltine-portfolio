import styles from "./KoraCaseStudy.module.css";
export default function KoraCaseStudy() {
  return (
    <main className={styles.page}>
      {/* Case Study Header */}
<section className={styles.hero}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>
        CASE STUDY · PRODUCT MANAGEMENT · B2B SAAS
      </p>

      <h1 className={styles.title}>
        Building Kora: Turning fragmented business operations into one
        system.
      </h1>

      <p className={styles.heroDescription}>
        How I helped shape a SaaS platform designed to give growing
        businesses greater visibility and control over their daily
        operations.
      </p>
    </div>
  </div>
</section>

     {/* Overview */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>OVERVIEW</p>

      <h2 className={styles.heading}>
        A business management platform built around connected operations.
      </h2>

      <div className={styles.overviewGrid}>
        <div className={styles.overviewItem}>
          <span>Product</span>
          <strong>Kora</strong>
        </div>

        <div className={styles.overviewItem}>
          <span>Company</span>
          <strong>Mihma Corporation</strong>
        </div>

        <div className={styles.overviewItem}>
          <span>Role</span>
          <strong>Product Manager</strong>
        </div>

        <div className={styles.overviewItem}>
          <span>Product type</span>
          <strong>B2B SaaS</strong>
        </div>

        <div className={styles.overviewItem}>
          <span>Market</span>
          <strong>Cameroon</strong>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Context */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>01 · CONTEXT</p>

      <h2 className={styles.heading}>
        Small businesses don&apos;t need more software. They need clarity.
      </h2>

      <p className={styles.body}>
        Many growing businesses manage critical operations across separate
        tools, spreadsheets, notebooks, and informal processes. As the
        business grows, this makes it increasingly difficult to understand
        what is actually happening across sales, inventory, expenses,
        employees, and branches.
      </p>

      <p className={styles.body}>
        Kora was conceived as a centralized business management platform
        that could bring these operational workflows together.
      </p>
    </div>
  </div>
</section>

    {/* Problem */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>02 · THE PROBLEM</p>

      <div className={styles.problemBlock}>
        <span className={styles.problemLabel}>HOW MIGHT WE</span>

        <h2 className={styles.problemHeading}>
          Give business owners a reliable view of their operations without
          overwhelming them with complexity?
        </h2>
      </div>

      <p className={styles.body}>
        The challenge was not simply deciding which features to build.
        Kora needed to become a coherent system where different parts of a
        business could work together.
      </p>
    </div>
  </div>
</section>

    {/* Problem Framing */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>03 · PROBLEM FRAMING</p>

      <h2 className={styles.heading}>
        The problem was bigger than any single workflow.
      </h2>

      <p className={styles.body}>
        Sales, inventory, expenses, employees, and branches are
        interconnected. When these workflows are managed separately,
        business owners lose the ability to see the full picture.
      </p>

      <div className={styles.framing}>
        <div className={styles.workflowRow}>
          <div className={styles.workflowItem}>Sales</div>
          <div className={styles.workflowItem}>Inventory</div>
          <div className={styles.workflowItem}>Expenses</div>
          <div className={styles.workflowItem}>Employees</div>
          <div className={styles.workflowItem}>Branches</div>
        </div>

        <div className={styles.connector}>↓</div>

        <div className={styles.framingStep}>
          Fragmented operational information
        </div>

        <div className={styles.connector}>↓</div>

        <div className={styles.framingStep}>
          Limited visibility and control
        </div>

        <div className={styles.connector}>↓</div>

        <div className={`${styles.framingStep} ${styles.opportunity}`}>
          <span>OPPORTUNITY</span>
          Create one connected operating system
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Users */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>04 · USERS</p>

      <h2 className={styles.heading}>
        Different people. Different responsibilities. One business.
      </h2>

      <p className={styles.body}>
        Kora was designed around the fact that business operations are shared
        across different people, each with different responsibilities and
        levels of access.
      </p>

      <div className={styles.userGrid}>
        <article className={styles.userCard}>
          <span className={styles.userNumber}>01</span>

          <h3>Business Owner</h3>

          <p>
            Needs visibility into sales, expenses, inventory, and overall
            business performance.
          </p>

          <span className={styles.userGoal}>
            PRIMARY NEED · VISIBILITY
          </span>
        </article>

        <article className={styles.userCard}>
          <span className={styles.userNumber}>02</span>

          <h3>Manager</h3>

          <p>
            Needs operational control while managing employees, branches,
            and day-to-day activity.
          </p>

          <span className={styles.userGoal}>
            PRIMARY NEED · CONTROL
          </span>
        </article>

        <article className={styles.userCard}>
          <span className={styles.userNumber}>03</span>

          <h3>Cashier / Employee</h3>

          <p>
            Needs simple workflows to complete assigned tasks without
            accessing information outside their responsibilities.
          </p>

          <span className={styles.userGoal}>
            PRIMARY NEED · EXECUTION
          </span>
        </article>
      </div>
    </div>
  </div>
</section>

     {/* Product Strategy */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>05 · PRODUCT STRATEGY</p>

      <h2 className={styles.heading}>
        Build around the business, not around isolated features.
      </h2>

      <p className={styles.body}>
        Instead of treating each capability as a standalone feature, Kora was
        shaped around the relationships between the activities that keep a
        business running.
      </p>

      <div className={styles.systemMap}>
        <div className={styles.systemCore}>
          <span>BUSINESS</span>
          <strong>KORA</strong>
          <small>CONNECTED OPERATIONS</small>
        </div>

        <div className={styles.systemGrid}>
          <div>Sales</div>
          <div>Inventory</div>
          <div>Expenses</div>
          <div>Invoicing</div>
          <div>Payments</div>
          <div>Employees</div>
          <div>Branches</div>
          <div>Reports</div>
        </div>
      </div>

      <div className={styles.strategyNote}>
        <span>PRODUCT PRINCIPLE</span>

        <p>
          The value is not in any individual module. It comes from connecting
          the modules so that activity in one part of the business can inform
          decisions in another.
        </p>
      </div>
    </div>
  </div>
</section>

   {/* Key Decisions */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>06 · KEY PRODUCT DECISIONS</p>

      <h2 className={styles.heading}>
        Every product decision had a trade-off.
      </h2>

      <p className={styles.body}>
        Kora's scope could have expanded quickly. I focused on decisions that
        strengthened the product's ability to support real business operations
        while keeping the experience manageable for users and the engineering
        team.
      </p>

      <div className={styles.decisionList}>
        <article className={styles.decision}>
          <div className={styles.decisionNumber}>01</div>

          <div className={styles.decisionContent}>
            <h3>Support multiple users within one business</h3>

            <p>
              A business may have an owner, manager, cashier, or other
              employees using the same system.
            </p>

            <div className={styles.decisionMeta}>
              <div>
                <span>WHY IT MATTERED</span>
                <p>
                  The product needed to reflect how businesses actually
                  operate rather than assuming one person manages everything.
                </p>
              </div>

              <div>
                <span>TRADE-OFF</span>
                <p>
                  More users required clearer roles, permissions, and access
                  boundaries.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className={styles.decision}>
          <div className={styles.decisionNumber}>02</div>

          <div className={styles.decisionContent}>
            <h3>Support multiple branches</h3>

            <p>
              Businesses can expand beyond a single physical location.
            </p>

            <div className={styles.decisionMeta}>
              <div>
                <span>WHY IT MATTERED</span>
                <p>
                  Owners need to understand both individual branch performance
                  and the overall business.
                </p>
              </div>

              <div>
                <span>TRADE-OFF</span>
                <p>
                  Branch-level operations introduce additional complexity
                  around inventory, reporting, and employee access.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className={styles.decision}>
          <div className={styles.decisionNumber}>03</div>

          <div className={styles.decisionContent}>
            <h3>Connect operational workflows</h3>

            <p>
              Sales, inventory, expenses, invoicing, payments, and reporting
              were treated as connected parts of the business.
            </p>

            <div className={styles.decisionMeta}>
              <div>
                <span>WHY IT MATTERED</span>
                <p>
                  Connecting these workflows creates a more complete picture
                  of business activity.
                </p>
              </div>

              <div>
                <span>TRADE-OFF</span>
                <p>
                  More connections mean more product and engineering
                  complexity.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

     {/* Prioritization */}
<section>
  <p>07 · PRIORITIZATION</p>

  <h2>
    Not every feature deserved to be built first.
  </h2>

  <p>
    Kora could potentially support a large number of business workflows.
    The challenge was deciding which capabilities were essential to proving
    the product's value.
  </p>

  <div>
    <div>
      <strong>High user value</strong>
      <p>
        Does this solve a frequent and important business problem?
      </p>
    </div>

    <div>
      <strong>Business impact</strong>
      <p>
        Does this improve the product's ability to create and retain value?
      </p>
    </div>

    <div>
      <strong>Dependencies</strong>
      <p>
        Does another workflow need to exist before this can work properly?
      </p>
    </div>

    <div>
      <strong>Execution complexity</strong>
      <p>
        Can we build and validate this within our available constraints?
      </p>
    </div>
  </div>
</section>

{/* Prioritization Matrix */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>08 · PRIORITIZATION MATRIX</p>

      <h2 className={styles.heading}>
        What should make it into the product?
      </h2>

      <p className={styles.body}>
        I evaluated potential capabilities against user value and
        implementation complexity, while also considering business impact and
        dependencies.
      </p>

      <div className={styles.matrix}>
        <div className={styles.matrixYAxis}>
          <span>HIGH USER VALUE</span>
        </div>

        <div className={styles.matrixContent}>
          <div className={styles.matrixRow}>
            <div className={styles.matrixCell}>
              <strong>PRIORITIZE</strong>
              <span>High value · Lower complexity</span>
            </div>

            <div className={styles.matrixCell}>
              <strong>PLAN</strong>
              <span>High value · Higher complexity</span>
            </div>
          </div>

          <div className={styles.matrixRow}>
            <div className={styles.matrixCell}>
              <strong>CONSIDER</strong>
              <span>Lower value · Lower complexity</span>
            </div>

            <div className={styles.matrixCell}>
              <strong>DEPRIORITIZE</strong>
              <span>Lower value · Higher complexity</span>
            </div>
          </div>

          <div className={styles.matrixXAxis}>
            <span>LOWER COMPLEXITY</span>
            <span>HIGHER COMPLEXITY</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* MVP */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>09 · MVP</p>

      <h2 className={styles.heading}>
        Start with the workflows that create the most operational value.
      </h2>

      <p className={styles.body}>
        The MVP focused on the core workflows required for businesses to
        record activity, manage operations, and understand what was happening
        inside the business.
      </p>

      <div className={styles.mvpGrid}>
        <div className={styles.mvpItem}>
          <span>01</span>
          <strong>Sales</strong>
          <p>Record and understand business transactions.</p>
        </div>

        <div className={styles.mvpItem}>
          <span>02</span>
          <strong>Inventory</strong>
          <p>Track products and stock movement.</p>
        </div>

        <div className={styles.mvpItem}>
          <span>03</span>
          <strong>Expenses</strong>
          <p>Capture and organize business expenses.</p>
        </div>

        <div className={styles.mvpItem}>
          <span>04</span>
          <strong>Invoicing</strong>
          <p>Create and manage business invoices.</p>
        </div>

        <div className={styles.mvpItem}>
          <span>05</span>
          <strong>Payments</strong>
          <p>Record payment activity and methods.</p>
        </div>

        <div className={styles.mvpItem}>
          <span>06</span>
          <strong>Reporting</strong>
          <p>Turn operational activity into useful information.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* Execution */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>10 · EXECUTION</p>

      <h2 className={styles.heading}>
        Turning product decisions into a working product.
      </h2>

      <p className={styles.body}>
        My role sat between the business problem and the engineering
        implementation. I translated product requirements into actionable
        work, clarified ambiguity, reviewed implementations, tested
        functionality, and made product decisions throughout development.
      </p>

      <div className={styles.executionFlow}>
        <div>
          <span>01</span>
          <strong>Understand</strong>
          <p>Clarify the problem and desired outcome.</p>
        </div>

        <div className={styles.flowArrow}>→</div>

        <div>
          <span>02</span>
          <strong>Define</strong>
          <p>Translate the problem into product requirements.</p>
        </div>

        <div className={styles.flowArrow}>→</div>

        <div>
          <span>03</span>
          <strong>Build</strong>
          <p>Work with engineering to turn requirements into functionality.</p>
        </div>

        <div className={styles.flowArrow}>→</div>

        <div>
          <span>04</span>
          <strong>Validate</strong>
          <p>Review, test, identify gaps, and iterate.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Outcome */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionInner}>
      <p className={styles.label}>11 · OUTCOME</p>

      <h2 className={styles.heading}>
        From individual workflows to a connected business platform.
      </h2>

      <p className={styles.body}>
        Kora evolved into a broader SaaS platform covering core business
        operations including sales, inventory, expenses, invoicing, payments,
        employees, branches, and reporting.
      </p>

      <div className={styles.outcomeGrid}>
        <div>
          <span>PRODUCT SCOPE</span>
          <strong>Core business workflows</strong>
          <p>
            Expanded beyond a single operational task into a broader business
            management platform.
          </p>
        </div>

        <div>
          <span>OPERATIONS</span>
          <strong>Connected activity</strong>
          <p>
            Multiple areas of business activity are represented within one
            system.
          </p>
        </div>

        <div>
          <span>SCALABILITY</span>
          <strong>Multiple users & branches</strong>
          <p>
            The product model accounts for businesses with different users
            and locations.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Reflection */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.reflection}>
      <p className={styles.label}>12 · REFLECTION</p>

      <h2 className={styles.heading}>
        Good product management is disciplined decision-making under
        constraints.
      </h2>

      <p className={styles.body}>
        Kora changed how I think about product scope. A product can contain
        many useful features and still fail to solve a coherent problem.
      </p>

      <p className={styles.body}>
        The PM&apos;s job is to continuously connect individual decisions back
        to the user&apos;s underlying problem, the business objective, and the
        constraints of the team building the product.
      </p>
    </div>
  </div>
</section>
    </main>
  );
}