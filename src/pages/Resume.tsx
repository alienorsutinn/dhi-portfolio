const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
    {children}
  </span>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-8">
    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">{title}</h2>
    <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">{children}</div>
  </section>
);

const Row = ({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
    <div className="font-semibold text-slate-900">{left}</div>
    <div className="text-sm text-slate-600">{right}</div>
  </div>
);

export default function Resume() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Dhiraj Joshi</h1>
              <p className="mt-1 text-slate-600">Data Scientist (Pricing & Decisioning) · London, UK</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Decisioning</Pill>
                <Pill>Pricing trade-offs</Pill>
                <Pill>Forecasting</Pill>
                <Pill>Optimization</Pill>
                <Pill>GenAI / RAG</Pill>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                href="mailto:dhijoshiwork@gmail.com"
              >
                dhijoshiwork@gmail.com
              </a>
              <a
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                href="tel:+447818947587"
              >
                +44 7818 947 587
              </a>
              <a
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                href="https://www.linkedin.com/in/dhijoshi"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm font-semibold text-slate-900">Executive Summary</div>
            <p className="mt-2 text-sm text-slate-700">
              Data Scientist focused on decisioning and pricing-style trade-offs (profitability, volume, constraints) and experimentation.
              I build end-to-end models from SQL feature engineering through statistical/ML development, backtesting, and monitoring,
              translating outputs into clear actions with pricing and commercial stakeholders.
              Strong in classification and operating-point selection, forecasting/time-series, and building repeatable evaluation packs
              that support adoption, governance, and consistent decisioning.
            </p>
          </div>
        </div>

        <Section title="Core Skills">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-slate-900">Pricing & Customer Analytics</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Pricing-style trade-offs (profitability vs volume), scenario testing / what-if analysis</li>
                <li>Opportunity sizing, conversion/retention-style thinking, diagnostics & performance reviews</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Decisioning & Risk Modelling</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Classification, triage pipelines, threshold selection, precision/recall trade-offs</li>
                <li>Segmentation/error analysis, capacity/risk-appetite style optimisation</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Experimentation & Measurement</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Offline backtesting, feature experiments, A/B testing mindset, holdouts</li>
                <li>Quasi-experiments (pre/post, matched cohorts), sensitivity checks</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Forecasting & Time Series</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Daily/monthly forecasting, leakage-aware preprocessing, calendar features</li>
                <li>Outlier handling, uncertainty / prediction intervals</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Data & Engineering:</span> Python (Pandas, NumPy, TensorFlow), SQL (CTEs/window functions), modular pipelines, APIs, Git, testing/docs
          </div>
          <div className="mt-2 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Monitoring & Governance:</span> performance/drift/coverage checks, audit-friendly evaluation outputs, guardrails
          </div>
          <div className="mt-2 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Platforms:</span> BigQuery, Postgres, Tableau; familiar with AWS concepts; hands-on GCP experience
          </div>
        </Section>

        <Section title="Experience">
          <Row left="Jaguar Land Rover (JLR) — Data Scientist (AI & Data)" right="Coventry, UK · Sep 2023 – Present" />
          <div className="mt-4 space-y-6">
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Warranty Claims Reduction — Propensity Scoring & Investigator Prioritisation
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Built end-to-end propensity model (SQL features → modelling → backtesting) to predict which warranty claims are most likely to be reduced.</li>
                <li>Produced investigator-facing output (propensity score + ranked queue) under limited capacity; modelled ~£3m annualised opportunity.</li>
                <li>Selected operating thresholds using explicit precision/recall trade-offs aligned to capacity and error cost.</li>
                <li>Ran feature experiments (Claim Type, Region) and shipped repeatable evaluation packs (segment performance + coverage/drift checks).</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">
                Athena Slot Optimiser — Capacity Allocation Optimisation (MILP)
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Designed and delivered Python optimisation workflow (data prep → MILP formulation → solve → planner outputs) for Range Rover / RRS slotting.</li>
                <li>Optimised throughput while enforcing real constraints (capacity, parts, market commitments, mix rules, delivery timing).</li>
                <li>Backtested ~25 scenarios vs heuristics; enabled faster scenario iteration (&lt;30 mins vs 4–6 hours) and stronger stakeholder confidence.</li>
                <li>Responsible for slotting decisions affecting ~12–20% of in-scope production capacity.</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">
                Forecasting Model — Neural Network Time-Series + Uncertainty (Finance)
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Built daily cash outflow forecasting model to predict difference between snapshot forecasts and actual payments on invoice due dates.</li>
                <li>Engineered leakage-aware features (weekday/week-of-month/holidays) and payment-timing signals; robust outlier handling.</li>
                <li>Trained TensorFlow neural network vs baseline; achieved ~25% lower MAPE and ~0.9 R² via time-based rolling backtests.</li>
                <li>Added bootstrapped prediction intervals to flag days where actuals fell outside expected ranges.</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">
                Warranty Spend Forecasting — Monthly Forecast + Explainability Dashboards
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Built monthly workflow to forecast total warranty spend per commodity within vehicle lines for planning and budget control.</li>
                <li>Engineered features capturing key warranty dynamics (vehicle age/age buckets, car parc / in-warranty exposure, region, segmentation).</li>
                <li>Produced diagnostic “driver pack” (residuals + segment breakdowns) to guide investigations and explain spend spikes.</li>
                <li>Delivered Tableau dashboards comparing actuals vs baseline vs model and highlighting top variance segments.</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">
                GenAI Knowledge Product (RAG) — Document Processing → Embeddings → Retrieval API
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Designed and shipped config-driven RAG platform on GCP: PDF ingestion/parsing → chunking → embeddings → retrieval → grounded answers with citations.</li>
                <li>Multi-project reuse via YAML configuration (prompts, project labels/table prefixes, retrieval settings).</li>
                <li>Implemented grounding + traceability (citations, retrieval traces) and evaluation workflow to diagnose answer failures.</li>
                <li>Added operational telemetry and quality loops (usage, latency, traces + ratings/issue tags).</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">
                Customer Intelligence — Next Best Action Triage from Social & Review Signals
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Scoped and built end-to-end VoC Insight Engine to convert unstructured feedback into prioritised product/service actions.</li>
                <li>Unified multi-source feedback (Sprinklr + external channels) into a consistent dataset and taxonomy for slice-and-dice analysis.</li>
                <li>LLM-assisted triage: usefulness scoring, summarisation, opportunity extraction, routing into an NBA-style workflow.</li>
                <li>Delivered dashboard + alerting views (emerging issues, top negative drivers, trend breaks, high-priority cases).</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">
                Product Configuration Similarity Engine — Hybrid Embeddings (Production POC)
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Deployed hybrid SBERT + structured-feature embeddings for configuration similarity and recommendations via retrieval API.</li>
                <li>Validated behaviour via ablations + interpretability; added telemetry to monitor quality drift.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Earlier Experience">
          <div className="space-y-4">
            <div>
              <Row left="REFSA — Economic Researcher" right="Kuala Lumpur, MY · Mar 2021 – Aug 2021" />
              <div className="mt-1 text-sm text-slate-700">
                Developed policy proposals on Covid-19 economic recovery, synthesising evidence into actionable recommendations.
              </div>
            </div>

            <div>
              <Row left="OCBC Bank — Operations & Technology Analyst (Intern)" right="Kuala Lumpur, MY · Jun 2018 – Aug 2018" />
              <div className="mt-1 text-sm text-slate-700">
                Supported risk profiling and transaction monitoring; built lightweight Excel indicators and audit-ready investigation templates.
              </div>
            </div>

            <div>
              <Row left="Vistara — Revenue Management & Flight Operations Analyst (Intern)" right="Gurgaon, IND · Jun 2017 – Aug 2017" />
              <div className="mt-1 text-sm text-slate-700">
                Proposed route-level pricing changes (~4% average per-sector revenue uplift across 22 routes); built load-factor forecasts.
              </div>
            </div>
          </div>
        </Section>

        <Section title="Education">
          <div className="space-y-4">
            <div>
              <Row left="University of Bristol — MSc Business Analytics (Distinction)" right="Sep 2021 – Nov 2022" />
              <div className="mt-1 text-sm text-slate-700">
                Thesis (Distinction): “Moneyball: Analysing the efficiency of English Premier League strikers using DEA”.
              </div>
            </div>
            <div>
              <Row left="University of Warwick — BSc Economics (2:1)" right="Oct 2016 – Jul 2019" />
            </div>
            <div>
              <Row left="Garden International School, Malaysia — IGCSE/A Levels" right="Sep 2003 – Aug 2015" />
              <div className="mt-1 text-sm text-slate-700">IGCSE: 5A*, 4A · A Levels: A*, 2A</div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
