import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";

export function JoinCta() {
  const { t } = useLang();
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand p-10 text-[color:var(--cream)] shadow-elegant sm:p-16">
        <div aria-hidden className="pattern-bogolan absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 mix-blend-overlay" />
        <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <div className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--cream)]/80">
              — Shepreneures · 1ère cohorte
            </div>
            <h3 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Rejoignez un cercle de femmes <em className="italic text-[color:var(--gold)]">qui bâtissent.</em>
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[color:var(--cream)]/85">
              Apprendre, partager, lancer un projet, accéder au financement — XOYAM est un club, un réseau et une plateforme.
            </p>
            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--cream)] px-6 py-3.5 text-sm font-medium text-[color:var(--ink)] transition-transform hover:scale-[1.02]"
            >
              {t.nav.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
