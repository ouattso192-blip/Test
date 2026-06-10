import { useLang } from "@/i18n/LangProvider";

const testimonials = [
  {
    quote: {
      fr: "XOYAM m'a donné les outils pour transformer une idée en entreprise viable. La formation en gestion financière a changé mon rapport à l'argent et à mon projet.",
      en: "XOYAM gave me the tools to turn an idea into a viable business. The financial management training changed my relationship with money and my project.",
    },
    name: "Aminata D.",
    role: { fr: "Fondatrice, maraîchage biologique — Dakar", en: "Founder, organic farming — Dakar" },
    initials: "AD",
    country: "SN",
  },
  {
    quote: {
      fr: "Grâce au réseau XOYAM, j'ai trouvé ma mentore, un financement participatif et ma première cliente internationale — le tout en moins de 8 mois.",
      en: "Through the XOYAM network, I found my mentor, crowdfunding and my first international client — all within 8 months.",
    },
    name: "Fatoumata K.",
    role: { fr: "Créatrice de mode — Montréal", en: "Fashion designer — Montréal" },
    initials: "FK",
    country: "CA",
  },
  {
    quote: {
      fr: "Les ateliers EdTech m'ont permis de lancer ma plateforme e-learning. XOYAM, c'est bien plus qu'une organisation : c'est une famille.",
      en: "The EdTech workshops enabled me to launch my e-learning platform. XOYAM is much more than an organisation — it's a family.",
    },
    name: "Mariame T.",
    role: { fr: "Entrepreneuse EdTech — Abidjan", en: "EdTech entrepreneur — Abidjan" },
    initials: "MT",
    country: "CI",
  },
  {
    quote: {
      fr: "Le mentorat m'a aidée à lever mes premiers fonds et à oser voir plus grand pour mon entreprise.",
      en: "The mentorship helped me raise my first funds and dare to see bigger for my business.",
    },
    name: "Aminata S.",
    role: { fr: "Fondatrice Startup — Dakar", en: "Startup Founder — Dakar" },
    initials: "AS",
    country: "SN",
  },
  {
    quote: {
      fr: "Une sororité entrepreneuriale incroyable. On ne se sent plus seule face aux défis.",
      en: "An incredible entrepreneurial sisterhood. You no longer feel alone in facing challenges.",
    },
    name: "Aïssatou D.",
    role: { fr: "Consultante Tech — Paris", en: "Tech Consultant — Paris" },
    initials: "AD",
    country: "FR",
  },
];

export function TestimonialsSection() {
  const { t, lang } = useLang();

  return (
    <section className="overflow-hidden py-24 sm:py-32 bg-secondary/20">
      <div className="container-x mb-12">
        <div className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--magenta)]">
          <span className="inline-block h-px w-8 bg-[color:var(--magenta)]" />
          {t.home.testimonialsKicker}
        </div>
        <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
          {t.home.testimonialsTitle}
        </h2>
      </div>

      {/* Scrolling Container */}
      <div className="relative flex overflow-hidden py-4">
        <div className="flex animate-marquee gap-6 whitespace-nowrap hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((item, i) => (
            <article
              key={i}
              className="inline-block w-[350px] shrink-0 whitespace-normal rounded-3xl border border-border bg-white p-8 shadow-sm transition-all hover:border-[color:var(--magenta)]/30 hover:shadow-elegant"
            >
              <div className="font-display text-6xl leading-none text-[color:var(--magenta)]/20 select-none" aria-hidden>"</div>
              <blockquote className="text-sm leading-relaxed text-foreground/90 italic -mt-4">
                {item.quote[lang]}
              </blockquote>
              <footer className="mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-display text-sm font-semibold">
                  {item.initials}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground">{item.name}</div>
                  <div className="text-[0.65rem] uppercase tracking-wider text-[color:var(--magenta)]">{item.role[lang]}</div>
                </div>
                <span className="ml-auto text-xl opacity-50">
                   {item.country === "SN" ? "🇸🇳" : item.country === "CA" ? "🇨🇦" : item.country === "CI" ? "🇨🇮" : "🌍"}
                </span>
              </footer>
            </article>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
