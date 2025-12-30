type Props = Record<string, string | number | boolean | null | undefined>;

export function track(event: string, props: Props = {}) {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log("[track]", event, props);
  }
  // Later: wire Plausible / PostHog / Umami here.
}
