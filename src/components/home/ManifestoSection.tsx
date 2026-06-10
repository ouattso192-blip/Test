import { useLang } from "@/i18n/LangProvider";

export function ManifestoSection() {
  const { t } = useLang();
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--magenta)]">
              — {t.home.manifestoTitle}
            </div>
            <div className="mt-6 hidden lg:block">
              <Sigil />
              <div className="mt-8 text-6xl font-bold text-[color:var(--magenta)] animate-pulse">?</div>
            </div>
          </div>
          <blockquote className="font-display text-3xl font-medium leading-[1.18] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-gradient-brand">«</span>{" "}
            {t.home.manifesto}{" "}
            <span className="text-gradient-brand">»</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Sigil() {
  return (
    <svg viewBox="0 0 200 200" className="h-44 w-44 text-[color:var(--violet-deep)]">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="oklch(0.56 0.24 350)" />
          <stop offset="1" stopColor="oklch(0.45 0.21 18)" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="68" fill="none" stroke="url(#g)" strokeWidth="1.5" />
      <path d="M30 100 Q 100 30 170 100 Q 100 170 30 100 Z" fill="none" stroke="url(#g)" strokeWidth="1.5" />
      <text x="100" y="108" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="38" fill="currentColor">X</text>
    </svg>
  );
}
