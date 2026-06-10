import { Link } from "@tanstack/react-router";
import { ArrowRight, Users } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import logoNoir from "@/assets/logo-noir.png";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16">
      <div aria-hidden className="absolute inset-0 -z-10 bg-aurora opacity-70" />
      <div aria-hidden className="pattern-grain absolute inset-0 -z-10 opacity-40" />

      <div className="container-x relative">
        {/* Grid: texte à gauche | logo à droite — alignement haut */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.85fr]">

          {/* ── LEFT: copy ── */}
          <div className="animate-fade-up">
            {/* Clarification */}
            <div className="mb-6 inline-flex flex-wrap items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">XOYAM</span>
              <span>est l'organisation derrière</span>
              <a
                href="https://afrowomenworkshops.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[color:var(--magenta)] hover:underline underline-offset-2"
              >
                afrowomenworkshops.com
              </a>
            </div>

            <h1 className="mt-2 font-display text-[2.6rem] font-medium leading-[0.96] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[5rem]">
              {t.home.h1Pre}
              <br />
              <span className="italic text-gradient-brand">{t.home.h1Accent}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.home.lead}
            </p>

            {/* 3 CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/programmes"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:bg-[color:var(--magenta)] hover:shadow-glow"
              >
                {t.home.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                {t.home.ctaSecondary}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-6 py-3.5 text-sm font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--gold)]/20"
              >
                {t.home.ctaTertiary}
              </Link>
            </div>

            <p className="mt-10 max-w-md font-display text-base italic text-foreground/70">
              « {t.common.tagline} »
            </p>
          </div>

          {/* ── RIGHT: logo violet — aligné en haut avec le h1 ── */}
          <div className="hidden lg:flex flex-col items-center justify-start pt-[3.5rem]">
            {/* Soft glow backdrop */}
            <div
              aria-hidden
              className="absolute h-[420px] w-[420px] rounded-full bg-gradient-brand opacity-10 blur-[80px] pointer-events-none"
            />

            {/* Logo principal — grand */}
            <img
              src={logoNoir}
              alt="XOYAM — Afro Women Workshops"
              className="relative w-[340px] xl:w-[380px] drop-shadow-xl"
            />

            {/* Floating card */}
            <div
              className="animate-float-slow mt-6 w-full max-w-[200px] self-end rounded-2xl border border-border bg-card p-4 shadow-elegant"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-2 text-[color:var(--gold)]">
                <Users className="h-3.5 w-3.5" />
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em]">Communauté</span>
              </div>
              <div className="mt-1.5 font-display text-2xl leading-none text-foreground">7</div>
              <p className="mt-1 text-[0.7rem] text-muted-foreground">pays représentés</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-20 overflow-hidden border-y border-border bg-foreground py-4 text-background">
        <div className="flex animate-marquee gap-12 whitespace-nowrap font-display text-2xl italic sm:text-3xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              {["Souveraineté","Sororité","EdTech","Mentorat","Financement","Terre","Numérique"].map((w, j) => (
                <span key={j} className="flex items-center gap-12">
                  <span className="text-[color:var(--cream)]">{w}</span>
                  <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-[color:var(--magenta)]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
