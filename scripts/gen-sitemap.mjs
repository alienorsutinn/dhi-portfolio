import fs from "node:fs";
import path from "node:path";

const PROJECTS_PATH = path.join(process.cwd(), "src", "data", "projects.ts");
const OUT_PATH = path.join(process.cwd(), "public", "sitemap.xml");

const ORIGIN = process.env.VITE_SITE_ORIGIN || "https://example.com";

function readSlugs(tsText) {
  const re = /slug\s*:\s*["'`](.+?)["'`]\s*,/g;
  const out = [];
  let m;
  while ((m = re.exec(tsText)) !== null) out.push(m[1]);
  return Array.from(new Set(out));
}

function url(loc) {
  return `<url><loc>${ORIGIN.replace(/\/+$/, "")}${loc}</loc></url>`;
}

function main() {
  const tsText = fs.readFileSync(PROJECTS_PATH, "utf8");
  const slugs = readSlugs(tsText);

  const pages = [
    "/",
    "/projects",
    "/about",
    "/resume",
    "/contact",
    ...slugs.map((s) => `/projects/${s}`),
  ];

  const xml =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(url).join("\n")}
</urlset>
`;

  fs.writeFileSync(OUT_PATH, xml, "utf8");
  console.log(`Wrote sitemap: ${OUT_PATH} (${pages.length} URLs)`);
}

main();
