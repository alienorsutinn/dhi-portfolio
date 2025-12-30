import { Link } from "react-router-dom";
import { PROJECTS, type Project } from "../data/projects";

const featured = PROJECTS.slice(0, 3);

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Dhiraj Joshi
        </h1>

        <p className="mt-4 text-lg text-slate-700">
          Data Scientist (Pricing &amp; Decisioning) — end-to-end models + adoption-ready evaluation.
        </p>
        <p className="mt-2 text-slate-600">
          London, UK • +44 7818 947 587 • dhijoshiwork@gmail.com
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            href="mailto:dhijoshiwork@gmail.com"
          >
            Email me
          </a>
          <a
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
            href="https://www.linkedin.com/in/dhijoshi"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <Link
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
            to="/projects"
          >
            View projects
          </Link>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">What I do</div>
          <div className="mt-2 text-sm text-slate-700">
            Decisioning and forecasting problems where you balance profitability/volume, capacity/constraints,
            and governance. Strong on evaluation packs, operating-point selection, and stakeholder-ready outputs.
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Decisioning", "Forecasting", "Optimization", "GenAI (RAG)", "Monitoring"].map((t) => (
              <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-end justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Featured projects</h2>
          <Link className="text-sm font-medium text-slate-700 hover:underline" to="/projects">
            See all →
          </Link>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {featured.map((p: Project) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <div className="text-xs font-semibold text-slate-500">{p.tags.join(" • ")}</div>
              <div className="mt-2 text-base font-semibold text-slate-900 group-hover:underline">
                {p.title}
              </div>
              <div className="mt-1 text-sm text-slate-600">{p.subtitle}</div>
              <div className="mt-3 text-sm text-slate-700">{p.oneLiner}</div>
              <div className="mt-4 text-sm font-medium text-slate-700">Open case study →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
