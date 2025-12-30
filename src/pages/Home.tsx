import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Layers, Gauge } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { Button, Card, PageShell, Section, Tag } from "../components/ui";

function StatChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

export default function Home() {
  const featured = useMemo(() => PROJECTS.filter((p) => p.featured).slice(0, 3), []);

  return (
    <PageShell>
      <div className="py-10 sm:py-14">
        <div className="relative">
          <div className="absolute -inset-1 rounded-[28px] bg-[linear-gradient(120deg,rgba(99,102,241,0.35),rgba(14,165,233,0.28),rgba(236,72,153,0.20))] blur-[18px] opacity-60" />
          <Card className="relative p-8 sm:p-12">
            <div className="flex flex-col gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                  <Sparkles size={14} />
                  Portfolio
                </div>

                <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl">
                  Building{" "}
                  <span className="bg-[linear-gradient(90deg,rgba(15,23,42,1),rgba(99,102,241,1))] bg-clip-text text-transparent">
                    decision systems
                  </span>{" "}
                  that ship.
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
                  Forecasting, risk scoring, RAG knowledge products, and dashboards — with telemetry, guardrails, and
                  stakeholder-ready narratives.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/projects">
                    View projects <ArrowRight size={16} />
                  </Button>
                  <Button variant="secondary" href="/contact">
                    Contact
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <StatChip>JLR Data Science</StatChip>
                  <StatChip>Forecasting • ML</StatChip>
                  <StatChip>RAG • Cloud Run • Postgres</StatChip>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Layers size={16} /> Systems
                  </div>
                  <div className="mt-2 text-sm text-slate-700">
                    Production-minded architecture: jobs, services, configs, and observability.
                  </div>
                </Card>
                <Card className="p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Gauge size={16} /> Decisions
                  </div>
                  <div className="mt-2 text-sm text-slate-700">
                    Models that explain themselves: diagnostics, thresholds, and human workflows.
                  </div>
                </Card>
                <Card className="p-5">
                  <div className="text-sm font-semibold text-slate-900">Delivery</div>
                  <div className="mt-2 text-sm text-slate-700">
                    Tight scope → measurable outcomes → reusable patterns teams can adopt.
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>

        <Section
          title="Featured work"
          right={
            <Link className="text-sm font-semibold text-slate-700 hover:text-slate-900" to="/projects">
              See all →
            </Link>
          }
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {featured.map((p) => (
              <Card key={p.slug} className="p-6">
                <div className="text-sm font-semibold text-slate-900">{p.title}</div>
                <div className="mt-2 text-sm text-slate-700">{p.oneLiner}</div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 4).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-6">
                  <Button href={`/projects/${p.slug}`} variant="secondary" className="w-full">
                    View case study
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </PageShell>
  );
}
