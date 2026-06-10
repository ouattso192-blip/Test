import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";

export function NewsletterSection() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: wire to real newsletter provider
    setSent(true);
  };

  return (
    <section className="container-x py-14">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 sm:p-12">
        {/* Subtle brand accent */}
        <div
          aria-hidden
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-brand opacity-10 blur-3xl"
        />

        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 text-[color:var(--magenta)]">
              <Mail className="h-4 w-4" />
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.28em]">
                Newsletter
              </span>
            </div>
            <h3 className="mt-4 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              {t.home.newsletterTitle}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {t.home.newsletterLead}
            </p>
          </div>

          {/* Right — form */}
          <div className="flex flex-col gap-3">
            {sent ? (
              <p className="rounded-2xl border border-border bg-secondary px-6 py-4 text-sm font-medium text-foreground">
                ✓ {t.footer.sent ?? "Merci ! Vous êtes inscrite."}
              </p>
            ) : (
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.home.newsletterPlaceholder}
                  className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--magenta)]"
                />
                <button
                  onClick={handleSubmit}
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-[color:var(--magenta)] hover:shadow-glow"
                >
                  {t.home.newsletterCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
