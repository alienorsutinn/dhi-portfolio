import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getProject } from "../data/projects";
import VisualBlock from "../components/VisualBlock";
import PipelineDiagram from "../components/PipelineDiagram";

function PlaceholderCard({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{hint}</div>
      <div className="mt-4 rounded-xl bg-slate-50 p-4 text-xs text-slate-600">
        Drop an image later (mock dashboard / diagram / synthetic chart).
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = useMemo(() => {
    if (!slug) return undefined;
    return slug ? getProject(slug) : undefined;
}, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-slate-700 font-semibold">Project not found</div>
            <div className="mt-2 text-sm text-slate-600">The URL might be wrong.</div>
            <Link className="mt-4 inline-block text-sm text-slate-700 underline" to="/projects">
              ← Back to projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isOptimization = project.methods.some((m: string) => /MILP|Optimization|Solver/i.test(m));

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Link className="text-sm text-slate-700 underline" to="/projects">
          ← All projects
        </Link>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{project.title}</h1>
          <p className="mt-2 text-slate-600">
            {(project.org ?? "—")}{project.timeframe ? ` · ${project.timeframe}` : ""}
          </p>

          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm font-semibold text-slate-900">TL;DR</div>
            <div className="mt-2 text-sm text-slate-700">{project.oneLiner}</div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-slate-900">Impact</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {project.impact.map((x: string) => <li key={x}>{x}</li>)}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Methods</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {project.methods.map((x: string) => <li key={x}>{x}</li>)}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Stack</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((x: string) => (
                  <span key={x} className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">NDA note</div>
              <div className="mt-2 text-sm text-slate-700">
                NDA-safe: visuals are mock-ups / synthetic examples. No internal dashboards, raw data, or proprietary identifiers.
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <PipelineDiagram
              nodes={[
                { label: "Data" },
                { label: "Features" },
                { label: isOptimization ? "Solver" : "Model" },
                { label: "Evaluation" },
                { label: "Output" },
                { label: "Monitoring" },
              ]}
            />

            <VisualBlock
              title="Evaluation mock"
              subtitle="What you would show (synthetic) to prove the work"
              bullets={[
                "Backtest chart (actual vs predicted / baseline)",
                "Segment breakdown (where errors concentrate)",
                isOptimization
                  ? "KPI trade-offs + constraint satisfaction summary"
                  : "Operating point / threshold rationale (if decisioning)",
              ]}
            />

            <VisualBlock
              title="Monitoring mock"
              subtitle="What you would monitor in production"
              bullets={[
                "Score/target drift (distribution shifts / PSI)",
                "Coverage checks + missingness alerts",
                "Weekly KPI trend + guardrails",
              ]}
            />

            <VisualBlock
              title="NDA-safe artefacts"
              subtitle="Concrete, recruiter-friendly deliverables"
              bullets={project.ndaSafeArtefacts.length ? project.ndaSafeArtefacts : [
                "One-page architecture diagram",
                "One-page evaluation pack",
                "One-page monitoring checklist",
              ]}
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-slate-900">Evaluation</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {project.evaluation.map((x: string) => <li key={x}>{x}</li>)}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Monitoring</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {project.monitoring.map((x: string) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>

          {/* caseStudy currently not in your Project type; keep this as placeholder hook */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <PlaceholderCard
              title="Add a case study block"
              hint="If you want long-form: add caseStudy fields to Project type + render with CaseStudySections."
            />
            <PlaceholderCard
              title="Add 1 mock visual"
              hint="Paste a synthetic chart screenshot, or add a /public images folder and reference it."
            />
          </div>

          {project.confidentialityNote && (
            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              <span className="font-semibold">Confidentiality:</span> {project.confidentialityNote}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
