import { createFileRoute } from "@tanstack/react-router";
import { Sprout, GraduationCap, Cpu, Users, Coins } from "lucide-react";
import { Shell } from "@/components/layout/Shell";
import { SectionHeader } from "@/components/ui-brand/SectionHeader";
import { useLang } from "@/i18n/LangProvider";

export const Route = createFileRoute("/piliers")({
  head: () => ({
    meta: [
      { title: "Nos piliers — XOYAM" },
      { name: "description", content: "Agriculture, formation, EdTech, réseau, financement — les 5 piliers de XOYAM." },
      { property: "og:title", content: "Nos piliers — XOYAM" },
      { property: "og:description", content: "Une organisation, cinq leviers d'autonomisation." },
    ],
  }),
  component: PillarsPage,
});

const icons = [Sprout, GraduationCap, Cpu, Users, Coins];

function PillarsPage() {
  const { t } = useLang();
  return (
    <Shell>
      <section className="pt-16 sm:pt-24">
        <div className="container-x">
          <SectionHeader
            kicker={t.home.pillarsKicker}
            title="Une organisation,"
            accent="cinq leviers."
            lead="Chaque pilier répond à un besoin réel des femmes que nous accompagnons — recherche, terrain, plateforme et financement."
          />
        </div>
      </section>

      <section className="container-x mt-16 sm:mt-24">
        <div className="space-y-6">
          {t.pillars.map((p, i) => {
            const Icon = icons[i] ?? Sprout;
            return (
              <article
                key={p.n}
                className="group grid items-center gap-6 rounded-3xl border border-border bg-card p-8 transition-all hover:border-[color:var(--magenta)]/40 hover:shadow-elegant sm:grid-cols-[120px_1fr_auto] sm:p-10"
              >
                <div className="font-display text-6xl leading-none text-gradient-brand sm:text-7xl">{p.n}</div>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-foreground sm:text-3xl">{p.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{p.text}</p>
                </div>
                <div className="hidden h-16 w-16 items-center justify-center rounded-full bg-[color:var(--violet-deep)] text-[color:var(--cream)] sm:inline-flex">
                  <Icon className="h-7 w-7" />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Shell>
  );
}
