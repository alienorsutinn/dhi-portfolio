import { useEffect } from "react";

type SEOProps = {
  title: string;
  description?: string;
  canonicalPath?: string; // e.g. "/projects/foo"
};

const SITE_NAME = "Dhi Joshi — Data Science • GenAI • Product";
const SITE_ORIGIN = "https://example.com"; // TODO: replace with your real domain later

function upsertMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
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

export default function SEO({ title, description, canonicalPath }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes("Dhi") ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const desc =
      description ??
      "Decision systems that ship: forecasting, ML decisioning, RAG knowledge products, and stakeholder-ready evaluation.";
    upsertMeta("description", desc);

    const canonical = canonicalPath ? `${SITE_ORIGIN}${canonicalPath}` : SITE_ORIGIN;
    upsertLink("canonical", canonical);
  }, [title, description, canonicalPath]);

  return null;
}
