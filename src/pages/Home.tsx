import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Cpu, LineChart } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { Button, Card, Container, PageShell, Section, Tag } from "../components/ui";

export default function Home() {
  const featured = useMemo(() => PROJECTS.filter((p) => p.featured).slice(0, 3), []);

  return (
    <PageShell>
      <Container>
        <Section>
          <Card className="p-8 sm:p-10">
            <div className="flex flex-col gap-6">
              <div>
                <div className="text-xs font-semibold tracking-wide text-slate-500">Portfolio</div>
                <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                  Data Science • GenAI • Product Analytics
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
                  I build decision systems: forecasting, risk scoring, RAG knowledge products, and dashboards that ship.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/projects">
                    View projects <ArrowRight size={16} />
                  </Button>
                  <Button variant="secondary" href="/contact">
                    Contact
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600">
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1">JLR Data Science</span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Forecasting • ML</span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1">RAG • Cloud Run • Postgres</span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Cpu size={16} /> Systems
                  </div>
                  <div className="mt-2 text-sm text-slate-700">Production-minded pipelines, telemetry, guardrails.</div>
                </Card>
                <Card className="p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <LineChart size={16} /> Decisions
                  </div>
                  <div className="mt-2 text-sm text-slate-700">Explainable models + diagnostics stakeholders trust.</div>
                </Card>
                <Card className="p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Briefcase size={16} /> Delivery
                  </div>
                  <div className="mt-2 text-sm text-slate-700">Clear narrative, tight scope, measurable outcomes.</div>
                </Card>
              </div>
            </div>
          </Card>
        </Section>

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
              <Card key={p.slug} className="p-5">
                <div className="text-sm font-semibold text-slate-900">{p.title}</div>
                <div className="mt-2 text-sm text-slate-700">{p.oneLiner}</div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-5">
                  <Button href={`/projects/${p.slug}`} variant="secondary" className="w-full">
                    View case study
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Quick links">
          <div className="flex flex-wrap gap-3">
            <Button href="/resume" variant="secondary">
              Resume
            </Button>
            <Button href="/about" variant="secondary">
              About
            </Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </Section>
      </Container>
    </PageShell>
  );
}
