import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-50/65 bg-slate-50/85 border-b border-slate-200">
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 py-3 flex items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative h-9 w-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
            <span className="text-sm font-semibold">DJ</span>
            <div className="absolute -inset-1 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),rgba(15,23,42,0)_60%)]" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">Dhi Joshi</div>
            <div className="text-xs text-slate-500">Data Science • GenAI • Product</div>
          </div>
        </Link>

        <div className="hidden sm:flex items-center gap-1">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                to={l.href}
                className={[
                  "px-3 py-2 rounded-xl text-sm font-semibold transition",
                  active
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="sm:hidden">
          <Link
            to="/projects"
            className="px-3 py-2 rounded-xl text-sm font-semibold bg-slate-900 text-white"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
