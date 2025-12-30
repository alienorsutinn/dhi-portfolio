import SEO from "../components/SEO";
import { Button, Card, Container, PageShell, Section, Tag } from "../components/ui";

export default function About() {
  return (
    <PageShell>
      <SEO title="About" canonicalPath="/about" description="How I build: evaluation-first, production-minded, and stakeholder-ready decision systems." />
      <Container>
        <Section title="About" eyebrow="How I build">
          <Card className="p-6 sm:p-8">
            <p className="text-slate-700 leading-relaxed">
              I’m a Data Scientist who focuses on <span className="font-semibold text-slate-900">decision systems</span>:
              models + evaluation + operating thresholds + monitoring + a workflow people actually adopt.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">Evaluation-first</div>
                <div className="mt-2 text-sm text-slate-700">
                  Leakage-aware splits, backtesting, segment diagnostics, and explicit precision/recall tradeoffs.
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">Production-minded</div>
                <div className="mt-2 text-sm text-slate-700">
                  Config-driven pipelines, reproducible runs, telemetry, and clean interfaces for reuse.
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">Stakeholder-ready</div>
                <div className="mt-2 text-sm text-slate-700">
                  Decisions, constraints, and “what changes on Monday” — not just metrics.
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>Forecasting</Tag>
              <Tag>Propensity / Risk</Tag>
              <Tag>Threshold selection</Tag>
              <Tag>RAG systems</Tag>
              <Tag>Monitoring</Tag>
              <Tag>GCP</Tag>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects">View projects</Button>
              <Button href="/resume" variant="secondary">Resume</Button>
              <Button href="/contact" variant="ghost">Contact →</Button>
            </div>
          </Card>
        </Section>
      </Container>
    </PageShell>
  );
}
