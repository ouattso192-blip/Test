import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Instagram } from "lucide-react";
import { Shell } from "@/components/layout/Shell";
import { SectionHeader } from "@/components/ui-brand/SectionHeader";
import { useLang } from "@/i18n/LangProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — XOYAM" },
      { name: "description", content: "Contactez XOYAM — Afro Women Workshops. Sénégal, Québec, diaspora." },
      { property: "og:title", content: "Contact — XOYAM" },
      { property: "og:description", content: "Question, partenariat, demande presse — parlons ensemble." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <Shell>
      <section className="pt-16 sm:pt-24">
        <div className="container-x">
          <SectionHeader
            kicker={t.contact.kicker}
            title={t.contact.title.replace(".", ",")}
            accent="ensemble."
            lead={t.contact.lead}
          />
        </div>
      </section>

      <section className="container-x mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] sm:mt-20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t.contact.name} name="name" />
            <Field label={t.contact.email} name="email" type="email" />
          </div>
          <div className="mt-5">
            <Field label={t.contact.subject} name="subject" />
          </div>
          <div className="mt-5">
            <label className="block text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {t.contact.message}
            </label>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-[color:var(--magenta)] focus:outline-none focus:ring-2 focus:ring-[color:var(--magenta)]/20"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:bg-[color:var(--magenta)] hover:shadow-glow"
          >
            {sent ? "✓ " + t.contact.sent : t.contact.send}
          </button>
        </form>

        <aside className="space-y-4">
          <InfoCard
            Icon={Mail}
            label="Courriel"
            value="contact@afrowomenworkshops.com"
            href="mailto:contact@afrowomenworkshops.com"
          />
          <InfoCard
            Icon={MapPin}
            label="Cellules"
            value="Dakar, Sénégal · Montréal, Québec"
          />
          <InfoCard
            Icon={Instagram}
            label="Suivez-nous"
            value="@afrowomenworkshops"
            href="https://instagram.com/afrowomenworkshops"
          />

          <div className="rounded-3xl bg-gradient-brand p-7 text-[color:var(--cream)]">
            <div className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--cream)]/80">
              Bénévolat
            </div>
            <p className="mt-3 font-display text-2xl leading-snug">
              Vous voulez contribuer ? <em className="italic text-[color:var(--gold)]">Rejoignez l'équipe.</em>
            </p>
            <p className="mt-3 text-sm text-[color:var(--cream)]/85">
              Dev web, design, rédaction, finance — chaque compétence trouve sa place.
            </p>
          </div>
        </aside>
      </section>
    </Shell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="block text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-full border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-[color:var(--magenta)] focus:outline-none focus:ring-2 focus:ring-[color:var(--magenta)]/20"
      />
    </label>
  );
}

function InfoCard({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 transition-colors hover:border-[color:var(--magenta)]/40"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-[color:var(--violet-deep)]">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">{label}</div>
        <div className="font-display text-lg text-foreground">{value}</div>
      </div>
    </Wrap>
  );
}
