import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { getProject } from "../data/projects";
import type { Project } from "../data/projects";
import { Button, Card, Container, Divider, PageShell, Section, Tag } from "../components/ui";

function Bullets({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="list-disc space-y-2 pl-5 text-slate-700">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h3 className="text-sm font-semibold tracking-wide text-slate-900">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(() => (slug ? getProject(slug) : undefined), [slug]);

  if (!project) {
    return (
      <PageShell>
        <Container>
          <Section title="Project not found">
            <Card className="p-6">
              <div className="text-slate-700">The URL might be wrong, or the project data isn’t loaded.</div>
              <div className="mt-5">
                <Button href="/projects" variant="secondary">
                  Back to projects
                </Button>
              </div>
            </Card>
          </Section>
        </Container>
      </PageShell>
    );
  }

  const p: Project = project;

  return (
    <PageShell>
      <Container>
        <Section
          eyebrow={p.org ? `${p.org}${p.timeframe ? ` • ${p.timeframe}` : ""}` : p.timeframe}
          title={p.title}
          right={
            <Button href="/projects" variant="secondary">
              Back
            </Button>
          }
        >
          <Card className="p-6 sm:p-8">
            <div className="text-sm text-slate-600">{p.subtitle}</div>
            <div className="mt-3 text-base leading-relaxed text-slate-800">{p.oneLiner}</div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            {p.confidentialityNote ? (
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {p.confidentialityNote}
              </div>
            ) : null}

            <Divider />

            <DetailBlock title="Problem">
              <Bullets items={p.problem} />
            </DetailBlock>

            <DetailBlock title="Approach">
              <Bullets items={p.approach} />
            </DetailBlock>

            <DetailBlock title="Results / Impact">
              <Bullets items={p.impact} />
            </DetailBlock>

            <DetailBlock title="Architecture / Stack">
              <div className="flex flex-wrap gap-2">
                {(p.stack ?? []).map((x) => (
                  <Tag key={x}>{x}</Tag>
                ))}
              </div>
              {(p.methods?.length ?? 0) > 0 ? (
                <div className="mt-4">
                  <div className="text-sm font-semibold text-slate-900">Methods</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.methods!.map((x) => (
                      <Tag key={x}>{x}</Tag>
                    ))}
                  </div>
                </div>
              ) : null}
            </DetailBlock>

            {(p.evaluation?.length ?? 0) > 0 ? (
              <DetailBlock title="Evaluation">
                <Bullets items={p.evaluation} />
              </DetailBlock>
            ) : null}

            {(p.monitoring?.length ?? 0) > 0 ? (
              <DetailBlock title="Monitoring">
                <Bullets items={p.monitoring} />
              </DetailBlock>
            ) : null}

            {(p.nextSteps?.length ?? 0) > 0 ? (
              <DetailBlock title="What I’d do next">
                <Bullets items={p.nextSteps} />
              </DetailBlock>
            ) : null}

            {(p.ndaSafeArtefacts?.length ?? 0) > 0 ? (
              <DetailBlock title="NDA-safe artefacts">
                <Bullets items={p.ndaSafeArtefacts} />
              </DetailBlock>
            ) : null}

            {(p.links?.length ?? 0) > 0 ? (
              <DetailBlock title="Links">
                <div className="flex flex-wrap gap-3">
                  {p.links!.map((l) => (
                    <Button key={l.href} href={l.href} variant="secondary">
                      {l.label} <ExternalLink size={16} />
                    </Button>
                  ))}
                </div>
              </DetailBlock>
            ) : null}

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact">Contact</Button>
              <Button href="/projects" variant="secondary">
                Back to projects
              </Button>
              <Link className="self-center text-sm font-semibold text-slate-700 hover:text-slate-900" to="/">
                Home →
              </Link>
            </div>
          </Card>
        </Section>
      </Container>
    </PageShell>
  );
}
