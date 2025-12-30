type Node = { label: string };
type Props = { nodes: Node[] };

export default function PipelineDiagram({ nodes }: Props) {
  const width = 980;
  const height = 120;
  const pad = 18;
  const boxW = Math.max(140, Math.floor((width - pad * 2 - (nodes.length - 1) * 16) / nodes.length));
  const boxH = 48;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">Architecture (NDA-safe)</div>
      <div className="mt-1 text-sm text-slate-600">Simple pipeline diagram — replace labels per project if you want.</div>

      <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="img" aria-label="pipeline diagram">
          {nodes.map((n, i) => {
            const x = pad + i * (boxW + 16);
            const y = (height - boxH) / 2;

            const nextX = pad + (i + 1) * (boxW + 16);
            const lineY = height / 2;

            return (
              <g key={n.label}>
                {/* box */}
                <rect x={x} y={y} width={boxW} height={boxH} rx={14} ry={14} fill="white" stroke="#CBD5E1" />
                <text
                  x={x + boxW / 2}
                  y={y + boxH / 2 + 4}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#0F172A"
                  fontFamily="ui-sans-serif, system-ui, -apple-system"
                >
                  {n.label}
                </text>

                {/* arrow */}
                {i < nodes.length - 1 ? (
                  <g>
                    <line x1={x + boxW} y1={lineY} x2={nextX} y2={lineY} stroke="#94A3B8" strokeWidth="2" />
                    <polygon
                      points={`${nextX},${lineY} ${nextX - 10},${lineY - 6} ${nextX - 10},${lineY + 6}`}
                      fill="#94A3B8"
                    />
                  </g>
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
