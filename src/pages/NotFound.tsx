import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { Button, Card, Container, PageShell, Section } from "../components/ui";

export default function NotFound() {
  return (
    <PageShell>
      <SEO title="404 — Page not found" canonicalPath="/404" />
      <Container>
        <Section title="Page not found" eyebrow="404">
          <Card className="p-6 sm:p-8">
            <div className="text-slate-700">
              The page you’re trying to reach doesn’t exist (or the URL is wrong).
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/">Back home</Button>
              <Button href="/projects" variant="secondary">Browse projects</Button>
              <Link className="self-center text-sm font-semibold text-slate-700 hover:text-slate-900" to="/contact">
                Contact →
              </Link>
            </div>
          </Card>
        </Section>
      </Container>
    </PageShell>
  );
}
