export type Project = {
  slug: string;
  title: string;
  org?: string;
  timeframe?: string;

  // Used for cards + previews
  subtitle: string;       // short context line
  oneLiner: string;       // strong "what you did" line
  tags: string[];         // used by filters/search

  impact: string[];
  stack: string[];
  methods: string[];

  evaluation: string[];
  monitoring: string[];
  ndaSafeArtefacts: string[];

  links?: { label: string; href: string }[];
  confidentialityNote?: string;

  // Optional deeper content blocks (nice-to-have)
  problem?: string[];
  approach?: string[];
  nextSteps?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "warranty-claims-reduction",
    title: "Warranty Claims Reduction — Propensity Scoring & Investigator Prioritisation",
    org: "JLR",
    timeframe: "2023–2024",
    subtitle: "Capacity-aware ML triage for high-value warranty interventions",
    oneLiner:
      "Ranked claims by expected reducibility so limited investigator capacity focused on the highest-value, most actionable cases.",
    tags: ["ML", "Warranty", "Decisioning", "Monitoring", "BigQuery"],

    impact: ["Modelled ~£3m annualised opportunity", "Capacity-aware operating point selection (precision/recall trade-offs)"],
    stack: ["Python", "SQL", "BigQuery", "Tableau"],
    methods: ["Classification", "Operating point selection", "Feature experiments"],
    evaluation: ["Time-based backtests", "Segment performance (Claim Type/Region)", "Coverage + drift checks"],
    monitoring: ["Score distribution drift", "Coverage checks", "Weekly KPI tracking + guardrails"],
    ndaSafeArtefacts: ["Mock evaluation pack (charts)", "Threshold rationale one-pager", "Monitoring checklist"],
    confidentialityNote: "NDA-safe: uses synthetic examples and mock dashboards only.",

    problem: [
      "Investigators could only review a small subset of claims, so the key constraint was triage and prioritisation.",
      "Needed a pragmatic, explainable ranking that worked under real operational capacity limits.",
    ],
    approach: [
      "Built a reducibility score and validated it with time-sliced backtests to avoid leakage.",
      "Stress-tested feature sets (Claim Type, Region, etc.) and verified coverage + drift signals.",
      "Set an operating threshold aligned to weekly capacity, with guardrails to prevent silent failure.",
    ],
    nextSteps: [
      "Add explainability (reason codes / feature contributions) for investigator trust.",
      "Stress-test thresholds under varying capacity scenarios.",
      "Ship a lightweight reviewer UI + feedback loop to improve labels over time.",
    ],
  },

  // Add 2–5 more projects immediately (even as placeholders).
  // This is the #1 reason the site feels “empty”.
  {
    slug: "rag-platform",
    title: "GenAI Knowledge Product — Document Processing → Embeddings → Retrieval API",
    org: "JLR",
    timeframe: "2025",
    subtitle: "Config-driven RAG platform on GCP with telemetry + feedback loop",
    oneLiner:
      "Designed and implemented a reusable RAG platform (ingestion → embeddings → retrieval → grounded answer API), shipped with telemetry and human-in-the-loop quality signals.",
    tags: ["GenAI", "RAG", "GCP", "MLOps", "Observability"],

    impact: [
      "Config-driven multi-project architecture to reuse the same services across initiatives",
      "Telemetry: latency, retrieval traces, usage + quality ratings to drive iteration",
    ],
    stack: ["Cloud Run", "GCS", "Postgres", "Python", "LLM APIs"],
    methods: ["RAG", "Semantic enrichment", "Evaluation loop", "Prompting"],
    evaluation: ["Retrieval sanity checks", "Grounded-answer review workflow", "Latency + usage metrics"],
    monitoring: ["API latency + error rates", "Retrieval trace logging", "User feedback tags + ratings"],
    ndaSafeArtefacts: ["Architecture diagram", "Config YAML example", "API contract + telemetry schema"],
    confidentialityNote: "NDA-safe: architecture + patterns only; no proprietary docs or data.",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
