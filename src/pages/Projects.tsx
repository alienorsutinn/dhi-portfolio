import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS, type Project } from "../data/projects";

function uniq(arr: string[]) {
  return Array.from(new Set(arr));
}

function deriveTags(p: (typeof PROJECTS)[number]) {
  return uniq([...p.methods, ...p.stack]);
}

export default function Projects() {
  const [q, setQ] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");

  const tagsBySlug = useMemo(() => {
    const m = new Map<string, string[]>();
    for (const p of PROJECTS) m.set(p.slug, deriveTags(p));
    return m;
  }, []);

  const allTags = useMemo(() => {
    const tags = uniq(PROJECTS.flatMap((p: Project) => tagsBySlug.get(p.slug) ?? []))
      .sort((a, b) => a.localeCompare(b));
    return ["All", ...tags];
  }, [tagsBySlug]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return PROJECTS.filter((p: Project) => {
      const tags = tagsBySlug.get(p.slug) ?? [];
      const matchesTag = activeTag === "All" || tags.includes(activeTag);
      if (!matchesTag) return false;

      if (!query) return true;

      const hay = [
        p.title,
        p.org ?? "",
        p.timeframe ?? "",
        p.oneLiner,
        p.impact.join(" "),
        p.stack.join(" "),
        p.methods.join(" "),
        p.evaluation.join(" "),
        p.monitoring.join(" "),
        p.ndaSafeArtefacts.join(" "),
        tags.join(" "),
      ].join(" ").toLowerCase();

      return hay.includes(query);
    });
  }, [q, activeTag, tagsBySlug]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Projects</h1>
            <p className="mt-2 text-slate-600">NDA-safe case studies with mock visuals and clear impact.</p>
          </div>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search (e.g., RAG, MILP, forecasting, monitoring)…"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-400 sm:w-[360px]"
            />
            <select
              value={activeTag}
              onChange={(e) => setActiveTag(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-400"
            >
              {allTags.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {allTags.slice(0, 12).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t)}
              className={
                "rounded-full px-3 py-1 text-xs font-medium border " +
                (activeTag === t
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100")
              }
            >
              {t}
            </button>
          ))}
          {allTags.length > 12 ? (
            <span className="text-xs text-slate-500 self-center">(+ more in dropdown)</span>
          ) : null}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((p: Project) => {
            const tags = tagsBySlug.get(p.slug) ?? [];
            return (
              <Link
                key={p.slug}
                to={`/PROJECTS/${p.slug}`}
                className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
              >
                <div className="text-lg font-semibold text-slate-900">{p.title}</div>
                <div className="mt-1 text-sm text-slate-600">
                  {(p.org ?? "—")}{p.timeframe ? ` · ${p.timeframe}` : ""}
                </div>

                <div className="mt-4 text-sm text-slate-700">{p.oneLiner}</div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-sm text-slate-600">
                  <span className="font-medium text-slate-900">Impact:</span> {p.impact[0] ?? "—"}
                </div>

                <div className="mt-4 text-sm font-medium text-slate-900">Open case study →</div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
            No matches. Try a different tag or search term.
          </div>
        ) : null}
      </div>
    </div>
  );
}
