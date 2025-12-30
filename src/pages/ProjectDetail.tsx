import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject } from "../data/projects";
import { Card, Container, Section, Tag } from "../components/ui";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = useMemo(() => (slug ? getProject(slug) : undefined), [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Container>
          <div className="py-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-slate-700 font-semibold">Project not found</div>
              <div className="text-slate-500 text-sm mt-2">
                The URL might be wrong, or your data set doesn’t include this project.
              </div>
              <Link to="/projects" className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline">
                Back to projects
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Container>
        <div className="py-10">
          <Link to="/projects" className="text-sm font-semibold text-slate-700 hover:underline">
            ← Back to projects
          </Link>

          <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-xs font-semibold text-slate-500">
              {project.org ? `${project.org} • ` : ""}
              {project.timeframe ?? ""}
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {project.title}
            </h1>
            <div className="mt-3 text-sm text-slate-600 sm:text-base">{project.subtitle}</div>
            <div className="mt-3 text-sm text-slate-800 sm:text-base">{project.oneLiner}</div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            {project.confidentialityNote ? (
              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                <span className="font-semibold">Confidentiality:</span> {project.confidentialityNote}
              </div>
            ) : null}
          </div>

          <Section eyebrow="Highlights" title="Impact">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card>
                <div className="text-sm font-semibold text-slate-900">Impact</div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {project.impact.map((x: string) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Card>
              <Card>
                <div className="text-sm font-semibold text-slate-900">Methods + stack</div>
                <div className="mt-3">
                  <div className="text-xs font-semibold text-slate-500">Methods</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.methods.map((x: string) => (
                      <Tag key={x}>{x}</Tag>
                    ))}
                  </div>

                  <div className="mt-4 text-xs font-semibold text-slate-500">Stack</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((x: string) => (
                      <Tag key={x}>{x}</Tag>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </Section>

          {(project.problem?.length ?? 0) > 0 ? (
            <Section eyebrow="Context" title="Problem">
              <Card>
                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {project.problem!.map((x: string) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Card>
            </Section>
          ) : null}

          {(project.approach?.length ?? 0) > 0 ? (
            <Section eyebrow="What I did" title="Approach">
              <Card>
                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {project.approach!.map((x: string) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Card>
            </Section>
          ) : null}

          <Section eyebrow="Trust" title="Evaluation + monitoring">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card>
                <div className="text-sm font-semibold text-slate-900">Evaluation</div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {project.evaluation.map((x: string) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Card>
              <Card>
                <div className="text-sm font-semibold text-slate-900">Monitoring</div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {project.monitoring.map((x: string) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </Section>

          <Section eyebrow="NDA-safe" title="Artefacts">
            <Card>
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                {project.ndaSafeArtefacts.map((x: string) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Card>
          </Section>

          {(project.nextSteps?.length ?? 0) > 0 ? (
            <Section eyebrow="Forward" title="Next steps">
              <Card>
                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {project.nextSteps!.map((x: string) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Card>
            </Section>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
