type Props = {
  title: string;
  subtitle?: string;
  bullets?: string[];
};

export default function VisualBlock({ title, subtitle, bullets }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      {subtitle ? <div className="mt-1 text-sm text-slate-600">{subtitle}</div> : null}

      <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">NDA-safe mock</div>
        <div className="mt-2 text-sm text-slate-700">
          Drop in an image later (PNG/SVG) or keep this placeholder.
        </div>

        {bullets?.length ? (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
