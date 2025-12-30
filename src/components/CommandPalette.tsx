import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, CornerDownLeft } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { Card } from "./ui";

type Item = { label: string; hint?: string; to: string };

export default function CommandPalette() {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);

  const baseItems: Item[] = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "Projects", to: "/projects" },
      { label: "Resume", to: "/resume" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
    []
  );

  const projectItems: Item[] = useMemo(
    () =>
      PROJECTS.map((p) => ({
        label: p.title,
        hint: p.oneLiner,
        to: `/projects/${p.slug}`,
      })),
    []
  );

  const items = useMemo(() => {
    const all = [...baseItems, ...projectItems];
    const query = q.trim().toLowerCase();
    if (!query) return all;
    return all.filter((it) => `${it.label} ${it.hint ?? ""}`.toLowerCase().includes(query));
  }, [q, baseItems, projectItems]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      const isSlash = e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey;
      if (isCmdK || isSlash) {
        e.preventDefault();
        setOpen(true);
        setQ("");
        setIdx(0);
      }
      if (e.key === "Escape") setOpen(false);
      if (!open) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setIdx((v) => Math.min(v + 1, Math.max(items.length - 1, 0)));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setIdx((v) => Math.max(v - 1, 0));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const chosen = items[idx];
        if (chosen) {
          setOpen(false);
          nav(chosen.to);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, items, idx, nav]);

  useEffect(() => {
    if (idx > items.length - 1) setIdx(0);
  }, [items.length, idx]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 px-4 pt-24"
      onMouseDown={() => setOpen(false)}
    >
      <div className="w-full max-w-2xl" onMouseDown={(e) => e.stopPropagation()}>
        <Card className="p-3 shadow-xl">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <Search size={16} className="text-slate-400" />
            <input
              autoFocus
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setIdx(0);
              }}
              placeholder="Search pages & projects…"
              className="w-full bg-transparent text-sm text-slate-900 outline-none"
            />
          </div>

          <div className="mt-3 max-h-[360px] overflow-auto">
            {items.length === 0 ? (
              <div className="px-3 py-10 text-center text-sm text-slate-600">No results.</div>
            ) : (
              <div className="space-y-1">
                {items.map((it, i) => {
                  const active = i === idx;
                  return (
                    <button
                      key={`${it.to}-${it.label}`}
                      type="button"
                      onMouseEnter={() => setIdx(i)}
                      onClick={() => {
                        setOpen(false);
                        nav(it.to);
                      }}
                      className={[
                        "w-full rounded-xl px-3 py-2 text-left transition",
                        active ? "bg-slate-900 text-white" : "hover:bg-slate-50 text-slate-900",
                      ].join(" ")}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold">{it.label}</div>
                        {active ? (
                          <div className="flex items-center gap-1 text-xs opacity-90">
                            <CornerDownLeft size={14} /> Enter
                          </div>
                        ) : null}
                      </div>
                      {it.hint ? (
                        <div className={["mt-1 text-xs", active ? "text-white/80" : "text-slate-600"].join(" ")}>
                          {it.hint}
                        </div>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="mt-3 px-1 text-xs text-slate-500">
            Tip: press <span className="font-semibold">/</span> or <span className="font-semibold">⌘K</span> anytime.
          </div>
        </Card>
      </div>
    </div>
  );
}
