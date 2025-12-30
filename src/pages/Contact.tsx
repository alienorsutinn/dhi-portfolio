import { ExternalLink, Copy } from "lucide-react";
import SEO from "../components/SEO";
import { Button, Card, Container, PageShell, Section } from "../components/ui";

const EMAIL = "dhijoshiwork@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/dhijoshi";

export default function Contact() {
  return (
    <PageShell>
      <SEO title="Contact" canonicalPath="/contact" description="Contact Dhi — email or LinkedIn. Fast response for roles, collabs, and projects." />
      <Container>
        <Section title="Contact" eyebrow="Let’s talk">
          <Card className="p-6 sm:p-8">
            <div className="text-slate-700">
              Best way: email with a quick note about the role/project + what you’d like to see (case study, architecture, metrics, etc.).
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`mailto:${EMAIL}`}>{EMAIL}</Button>
              <Button
                variant="secondary"
                onClick={() => navigator.clipboard.writeText(EMAIL)}
              >
                Copy email <Copy size={16} />
              </Button>
              <Button href={LINKEDIN} variant="ghost">
                LinkedIn <ExternalLink size={16} />
              </Button>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">Suggested message</div>
              <div className="mt-2 text-sm text-slate-700 whitespace-pre-wrap">
{`Hi Dhi — I’m reaching out about [role/project]. 
We’re looking for someone strong in [forecasting / ML decisioning / GenAI / evaluation]. 
Would you be open to a quick chat this week?`}
              </div>
            </div>
          </Card>
        </Section>
      </Container>
    </PageShell>
  );
}
