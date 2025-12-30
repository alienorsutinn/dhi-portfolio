import fs from "node:fs";
import path from "node:path";

const PROJECTS_PATH = path.join(process.cwd(), "src", "data", "projects.ts");
const OUT_DIR = path.join(process.cwd(), "public", "og");

function readSlugs(tsText) {
  // Works with: slug: "xyz"
  const re = /slug\s*:\s*["'`](.+?)["'`]\s*,/g;
  const out = [];
  let m;
  while ((m = re.exec(tsText)) !== null) out.push(m[1]);
  // unique
  return Array.from(new Set(out));
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function ogSvg({ title, subtitle }) {
  // 1200x630 OG standard
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f172a"/>
      <stop offset="0.55" stop-color="#111827"/>
      <stop offset="1" stop-color="#0b1220"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#6366f1"/>
      <stop offset="0.6" stop-color="#0ea5e9"/>
      <stop offset="1" stop-color="#ec4899"/>
    </linearGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="18" />
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- glow blobs -->
  <circle cx="220" cy="140" r="150" fill="#6366f1" opacity="0.25" filter="url(#soft)"/>
  <circle cx="980" cy="160" r="170" fill="#0ea5e9" opacity="0.20" filter="url(#soft)"/>
  <circle cx="900" cy="520" r="220" fill="#ec4899" opacity="0.16" filter="url(#soft)"/>

  <!-- top brand -->
  <text x="80" y="110" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="26" fill="#e2e8f0" opacity="0.95">
    Dhi Joshi
  </text>
  <rect x="80" y="128" width="320" height="6" rx="3" fill="url(#accent)" opacity="0.95"/>

  <!-- title -->
  <text x="80" y="240" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="56" font-weight="700" fill="#f8fafc">
    ${esc(title)}
  </text>

  <!-- subtitle -->
  <text x="80" y="310" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="26" fill="#cbd5e1" opacity="0.95">
    ${esc(subtitle)}
  </text>

  <!-- footer strip -->
  <rect x="80" y="520" width="1040" height="64" rx="18" fill="#0b1220" opacity="0.72" stroke="#1f2937"/>
  <text x="110" y="560" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="20" fill="#e2e8f0">
    Data Science • GenAI • Production-minded evaluation
  </text>
</svg>`;
}

function main() {
  if (!fs.existsSync(PROJECTS_PATH)) {
    console.error("Could not find:", PROJECTS_PATH);
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const tsText = fs.readFileSync(PROJECTS_PATH, "utf8");
  const slugs = readSlugs(tsText);

  const defaultSvg = ogSvg({
    title: "Portfolio",
    subtitle: "Case studies: forecasting, ML decisioning, RAG, monitoring",
  });
  fs.writeFileSync(path.join(OUT_DIR, "default.svg"), defaultSvg, "utf8");

  for (const slug of slugs) {
    const svg = ogSvg({
      title: slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      subtitle: "Case study • Dhi Joshi",
    });
    fs.writeFileSync(path.join(OUT_DIR, `${slug}.svg`), svg, "utf8");
  }

  console.log(`OG images written: ${slugs.length + 1} (including default.svg) -> public/og/`);
}

main();
