type Props = {
  problem: string;
  context?: string[];
  approach: string[];
  evaluation: string[];
  monitoring: string[];
  nextSteps: string[];
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function CaseStudySections(props: Props) {
  return (
    <div className="mt-6 grid gap-4">
      <Section title="Problem / Goal">
        <p className="text-sm text-slate-700">{props.problem}</p>
        {props.context?.length ? (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {props.context.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        ) : null}
      </Section>

      <Section title="Approach (NDA-safe)">
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          {props.approach.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>

      <Section title="Evaluation / Diagnostics">
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          {props.evaluation.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>

      <Section title="Monitoring / Ops">
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          {props.monitoring.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>

      <Section title="What I’d do next">
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          {props.nextSteps.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
