import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.10),rgba(248,250,252,0))]" />
      {children}
    </div>
  );
}

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">{children}</div>;
}

export function Section({
  title,
  eyebrow,
  children,
  right,
}: {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  right?: ReactNode;
}) {
  return (
    <section className="py-10 sm:py-14">
      {(title || eyebrow || right) && (
        <div className="flex items-start justify-between gap-4">
          <div>
            {eyebrow ? (
              <div className="text-xs font-semibold tracking-wide text-slate-500">{eyebrow}</div>
            ) : null}
            {title ? <h2 className="mt-2 text-2xl font-semibold text-slate-900">{title}</h2> : null}
          </div>
          {right ? <div className="shrink-0">{right}</div> : null}
        </div>
      )}
      <div className={(title || eyebrow || right) ? "mt-6" : ""}>{children}</div>
    </section>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const cardBase =
    "rounded-2xl border border-slate-200 bg-white shadow-sm transition " +
    "hover:shadow-md hover:-translate-y-[1px]";
  return <div className={`${cardBase} ${className}`}>{children}</div>;
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ring-offset-white " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm",
    ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
  };

  const styles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = /^https?:\/\//i.test(href);
    if (isExternal) {
      return (
        <a className={styles} href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link className={styles} to={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} onClick={onClick} type="button">
      {children}
    </button>
  );
}

export function Divider() {
  return <div className="my-8 h-px w-full bg-slate-200" />;
}

/** Backwards-compatible aliases (in case any old imports exist) */
export function PrimaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button {...props} variant="primary" />;
}
export function SecondaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button {...props} variant="secondary" />;
}
export function LinkButton(props: Omit<ButtonProps, "variant">) {
  return <Button {...props} variant="ghost" className={`underline underline-offset-4 ${props.className ?? ""}`} />;
}
