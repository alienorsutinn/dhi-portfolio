import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS, type Project } from "../data/projects";
import { Card, Container, Section, Tag } from "../components/ui";

function uniq(xs: string[]) {
  return Array.from(new Set(xs)).sort((a, b) => a.localeCompare(b));
}

function haystack(p: Project) {
  return [
    p.title,
    p.subtitle,
    p.oneLiner,
    p.org ?? "",
    p.timeframe ?? "",
    p.tags.join(" "),
    p.stack.join(" "),
    p.methods.join(" "),
    p.impact.join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");

  const tags = useMemo(() => ["All", ...uniq(PROJECTS.flatMap((p) => p.tags))], []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const tagOk = activeTag === "All" ? true : p.tags.includes(activeTag);
      const qOk = q.length === 0 ? true : haystack(p).includes(q);
      return tagOk && qOk;
    });
  }, [query, activeTag]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Container>
        <Section
          eyebrow="Projects"
          title="Case studies"
          subtitle="Browse by tag or search across methods, stack, and impact. NDA-safe summaries."
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects (e.g., RAG, monitoring, BigQuery, optimization)…"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300 sm:max-w-xl"
              />
              <div className="text-sm text-slate-600">
                {filtered.length} / {PROJECTS.length}
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => {
                const isActive = t === activeTag;
                return (
                  <button
                    key={t}
                    onClick={() => setActiveTag(t)}
                    className={[
                      "rounded-full px-3 py-1 text-xs font-semibold transition",
                      isActive
                        ? "bg-slate-900 text-white"
                        : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
              No matches. Try a different tag or search term.
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {filtered.map((p: Project) => (
                <Link key={p.slug} to={`/projects/${p.slug}`} className="group">
                  <Card>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-semibold text-slate-500">
                          {p.org ? `${p.org} • ` : ""}
                          {p.timeframe ?? ""}
                        </div>
                        <div className="mt-2 text-lg font-semibold text-slate-900 group-hover:underline">
                          {p.title}
                        </div>
                        <div className="mt-2 text-sm text-slate-600">{p.subtitle}</div>
                        <div className="mt-3 text-sm text-slate-700">{p.oneLiner}</div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.slice(0, 6).map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>

                    <div className="mt-5 text-sm font-semibold text-slate-900">Open case study →</div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Section>
      </Container>
    </div>
  );
}
