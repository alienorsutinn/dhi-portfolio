import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { PROJECTS, type Project } from "../data/projects";
import { Card, Container, Kpi, PrimaryButton, SecondaryButton, Section, Tag } from "../components/ui";

export default function Home() {
  const featured = useMemo<Project[]>(() => PROJECTS.slice(0, 3), []);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
              Data Science • Analytics • GenAI
            </div>

            <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Dhi — Data Scientist who ships decision tools, not just models.
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              I build capacity-aware ML systems, robust evaluation workflows, and practical GenAI products —
              designed to work with real constraints (stakeholders, monitoring, and business impact).
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <PrimaryButton to="/projects">View projects</PrimaryButton>
              <SecondaryButton to="/resume">Resume</SecondaryButton>
              <SecondaryButton to="/contact">Contact</SecondaryButton>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Kpi label="Focus" value="Impact + adoption" />
              <Kpi label="Strength" value="Problem framing" />
              <Kpi label="Style" value="Clean systems" />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <Section
          eyebrow="Case studies"
          title="Selected work"
          subtitle="A few projects with clear problem → approach → evaluation → monitoring. NDA-safe summaries."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p: Project) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="group">
                <Card>
                  <div className="text-xs font-semibold text-slate-500">
                    {p.org ? `${p.org} • ` : ""}
                    {p.timeframe ?? ""}
                  </div>

                  <div className="mt-2 text-base font-semibold text-slate-900 group-hover:underline">
                    {p.title}
                  </div>

                  <div className="mt-2 text-sm text-slate-600">{p.subtitle}</div>
                  <div className="mt-3 text-sm text-slate-700">{p.oneLiner}</div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 4).map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  <div className="mt-5 text-sm font-semibold text-slate-900">Open case study →</div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <PrimaryButton to="/projects">Browse all projects</PrimaryButton>
          </div>
        </Section>

        <Section
          eyebrow="How I work"
          title="A simple recipe that makes projects land"
          subtitle="This is what typically turns analysis into something stakeholders actually use."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold text-slate-900">1) Frame the constraint</div>
              <p className="mt-2 text-sm text-slate-600">
                Define what “success” means in the real world (capacity, latency, coverage, governance).
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-slate-900">2) Build the minimal engine</div>
              <p className="mt-2 text-sm text-slate-600">
                Focus on the smallest pipeline that produces reliable decisions — then iterate.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-slate-900">3) Prove + monitor it</div>
              <p className="mt-2 text-sm text-slate-600">
                Time-sliced evaluation, segment checks, and monitoring guardrails so it stays trustworthy.
              </p>
            </Card>
          </div>
        </Section>
      </Container>
    </div>
  );
}
