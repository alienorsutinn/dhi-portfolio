import { useEffect } from "react";

type SEOProps = {
  title: string;
  description?: string;
  canonicalPath?: string; // e.g. "/projects/foo"
  ogImagePath?: string;   // e.g. "/og/foo.svg"
};

const SITE_NAME = "Dhi Joshi — Data Science • GenAI • Product";

// Set this in Vercel/Netlify env later (recommended):
// VITE_SITE_ORIGIN="https://your-domain.com"
const SITE_ORIGIN =
  (import.meta as any).env?.VITE_SITE_ORIGIN?.replace(/\/+$/, "") || "http://localhost:5173";

function upsertMetaByName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SEO({ title, description, canonicalPath, ogImagePath }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes("Dhi") ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const desc =
      description ??
      "Decision systems that ship: forecasting, ML decisioning, RAG knowledge products, and stakeholder-ready evaluation.";
    upsertMetaByName("description", desc);

    const canonical = canonicalPath ? `${SITE_ORIGIN}${canonicalPath}` : SITE_ORIGIN;
    upsertLink("canonical", canonical);

    const ogImage = ogImagePath ? `${SITE_ORIGIN}${ogImagePath}` : `${SITE_ORIGIN}/og/default.svg`;

    // OpenGraph
    upsertMetaByProperty("og:site_name", SITE_NAME);
    upsertMetaByProperty("og:title", fullTitle);
    upsertMetaByProperty("og:description", desc);
    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:url", canonical);
    upsertMetaByProperty("og:image", ogImage);

    // Twitter
    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", fullTitle);
    upsertMetaByName("twitter:description", desc);
    upsertMetaByName("twitter:image", ogImage);
  }, [title, description, canonicalPath, ogImagePath]);

  return null;
}
