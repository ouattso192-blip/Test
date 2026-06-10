import { Sprout, GraduationCap, Cpu, Users, Coins } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { SectionHeader } from "@/components/ui-brand/SectionHeader";

const icons = [Sprout, GraduationCap, Cpu, Users, Coins];

export function PillarsSection() {
  const { t } = useLang();
  return (
    <section id="piliers" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader
          kicker={t.home.pillarsKicker}
          title={t.home.pillarsTitle.split(",")[0] + ","}
          accent={t.home.pillarsTitle.split(",")[1]?.trim()}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.pillars.map((p, i) => {
            const Icon = icons[i] ?? Sprout;
            const featured = i === 0;
            return (
              <article
                key={p.n}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant ${
                  featured
                    ? "bg-gradient-brand text-[color:var(--cream)] lg:row-span-2 lg:p-10"
                    : "bg-white hover:bg-[color:var(--magenta)] hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-display text-sm tracking-[0.3em] ${
                      featured ? "text-[color:var(--cream)]/70" : "text-[color:var(--magenta)] group-hover:text-white"
                    }`}
                  >
                    {p.n}
                  </span>
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
                      featured
                        ? "bg-[color:var(--cream)]/15 text-[color:var(--cream)]"
                        : "bg-secondary text-[color:var(--violet-deep)] group-hover:bg-white/20 group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3
                  className={`mt-${featured ? "10" : "6"} font-display text-2xl leading-tight tracking-tight ${
                    featured ? "text-[color:var(--cream)]" : "text-foreground group-hover:text-white"
                  } ${featured ? "lg:text-4xl" : ""}`}
                >
                  {p.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    featured ? "text-[color:var(--cream)]/85 lg:text-base" : "text-muted-foreground group-hover:text-white/90"
                  }`}
                >
                  {p.text}
                </p>

                {featured && (
                  <div aria-hidden className="pattern-bogolan absolute -bottom-12 -right-12 h-48 w-48 rounded-full opacity-30 mix-blend-overlay" />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
