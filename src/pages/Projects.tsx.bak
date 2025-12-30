import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import SEO from "../components/SEO";
import { PROJECTS } from "../data/projects";
import { Button, Card, Container, PageShell, Section, Tag } from "../components/ui";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const s = new Set<string>();
    PROJECTS.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s).sort((a, b) => a.localeCompare(b))];
  }, []);

  const ordered = useMemo(() => {
    const base = [...PROJECTS].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    const q = query.trim().toLowerCase();
    return base.filter((p) => {
      const matchesTag = activeTag === "All" ? true : p.tags.includes(activeTag);
      const hay = [p.title, p.subtitle, p.oneLiner, ...(p.tags ?? [])].join(" ").toLowerCase();
      const matchesQuery = q ? hay.includes(q) : true;
      return matchesTag && matchesQuery;
    });
  }, [query, activeTag]);

  return (
    <PageShell>
      <SEO title="Projects" canonicalPath="/projects" description="Case studies: forecasting, ML decisioning, RAG, optimisation, and production-minded evaluation." />
      <Container>
        <Section
          title="Projects"
          eyebrow="Case studies"
          right={
            <Button href="/" variant="secondary">
              Back home
            </Button>
          }
        >
          <Card className="p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <SlidersHorizontal size={16} />
                Browse
              </div>

              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search (e.g. RAG, forecasting, warranty)"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ring-offset-white"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {allTags.map((t) => {
                const active = t === activeTag;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setActiveTag(t)}
                    className={[
                      "rounded-full px-3 py-1 text-xs font-semibold transition",
                      active
                        ? "bg-slate-900 text-white"
                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </Card>

          {ordered.length === 0 ? (
            <Card className="mt-6 p-8">
              <div className="text-sm font-semibold text-slate-900">No matches</div>
              <div className="mt-2 text-sm text-slate-700">
                Try clearing the tag filter, or search for something broader (e.g. “ML”, “forecast”, “RAG”).
              </div>
              <div className="mt-5 flex gap-3">
                <Button onClick={() => { setQuery(""); setActiveTag("All"); }} variant="secondary">
                  Reset filters
                </Button>
                <Link className="self-center text-sm font-semibold text-slate-700 hover:text-slate-900" to="/contact">
                  Contact →
                </Link>
              </div>
            </Card>
          ) : null}

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {ordered.map((p) => (
              <Card key={p.slug} className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-slate-900">{p.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{p.subtitle}</div>
                  </div>
                  {p.featured ? (
                    <span className="shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Featured
                    </span>
                  ) : null}
                </div>

                <div className="mt-3 text-sm text-slate-700">{p.oneLiner}</div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 6).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-4 grid gap-2 text-sm text-slate-700">
                  {(p.impact ?? []).slice(0, 2).map((x) => (
                    <div key={x} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href={`/projects/${p.slug}`}>View case study</Button>
                  <Link className="self-center text-sm font-semibold text-slate-700 hover:text-slate-900" to={`/projects/${p.slug}`}>
                    Details →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </Container>
    </PageShell>
  );
}
