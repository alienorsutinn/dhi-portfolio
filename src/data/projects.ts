// src/data/projects.ts

export type CaseStudy = {
  problem?: string[];
  approach?: string[];
  evaluation?: string[];
  monitoring?: string[];
  nextSteps?: string[];
};

export type Project = {
  // routing
  slug: string;

  // list-card fields (search + tiles)
  title: string;
  subtitle: string;
  oneLiner: string;
  tags: string[];

  // meta
  org?: string;
  timeframe?: string;

  // detail fields
  impact: string[];
  stack: string[];
  methods: string[];
  evaluation: string[];
  monitoring: string[];
  ndaSafeArtefacts: string[];
  links?: { label: string; href: string }[];
  confidentialityNote?: string;

  // optional longform
  caseStudy?: CaseStudy;
};

export const PROJECTS: Project[] = [
  {
    slug: "warranty-claims-reduction",
    title: "Warranty Claims Reduction — Propensity Scoring & Investigator Prioritisation",
    subtitle: "Decisioning model + operating point selection for capacity-limited investigators.",
    oneLiner:
      "Ranked claims by expected reducibility to focus limited investigator capacity on highest-value interventions.",
    tags: ["ML", "Classification", "Decisioning", "Monitoring", "Warranty"],

    org: "JLR",
    timeframe: "2023–2024",

    impact: [
      "Modelled ~£3m annualised opportunity",
      "Capacity-aware thresholding (precision/recall trade-offs)",
      "Designed guardrails for safe rollout (coverage + drift checks)",
    ],
    stack: ["Python", "SQL", "BigQuery", "Tableau"],
    methods: ["Classification", "Operating point selection", "Feature experiments"],
    evaluation: ["Time-based backtests", "Segment performance (Claim Type/Region)", "Coverage + drift checks"],
    monitoring: ["Score distribution drift", "Coverage checks", "Weekly KPI tracking + guardrails"],
    ndaSafeArtefacts: ["Mock evaluation pack (charts)", "Threshold rationale one-pager", "Monitoring checklist"],
    confidentialityNote: "NDA-safe: use synthetic examples and mock dashboards only.",
    caseStudy: {
      problem: [
        "Investigators had limited capacity; the challenge was picking the subset of claims most likely to be reducible.",
        "Needed a defensible operating point and evidence the model generalised over time and segments.",
      ],
      approach: [
        "Built a classification pipeline to estimate reducibility propensity per claim.",
        "Selected an operating threshold based on investigator capacity and the precision/recall trade-off.",
        "Ran feature experiments (e.g., Claim Type/Region additions) with disciplined time-based splits.",
      ],
      evaluation: [
        "Time-based backtests to mimic production deployment.",
        "Segmented performance checks (Claim Type/Region) to avoid hidden failure modes.",
        "Coverage + drift checks to ensure stable scoring and expected distributions.",
      ],
      monitoring: [
        "Score distribution drift and coverage alerts for missingness.",
        "Weekly KPI tracking with guardrails and audit logs.",
      ],
      nextSteps: [
        "Add explainability (reason codes / feature contributions) for investigator trust.",
        "Stress-test thresholds under varying capacity scenarios.",
        "Add a reviewer UI + feedback loop to improve labels over time.",
      ],
    },
  },

  // Add your other projects back here (copy the old ones in)
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
