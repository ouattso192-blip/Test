import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { Shell } from "@/components/layout/Shell";
import { SectionHeader } from "@/components/ui-brand/SectionHeader";
import { useLang } from "@/i18n/LangProvider";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — XOYAM" },
      { name: "description", content: "Témoignages, chiffres et histoires de réussite des Shepreneures de XOYAM." },
      { property: "og:title", content: "Impact — XOYAM" },
      { property: "og:description", content: "Des chiffres concrets, des récits de terrain." },
    ],
  }),
  component: ImpactPage,
});

const stories = [
  {
    quote: "XOYAM m'a donné la structure dont mon projet avait besoin. En six mois, j'ai lancé ma première coopérative.",
    name: "Fatou D.",
    place: "Casamance, Sénégal",
  },
  {
    quote: "Le mentorat entre pairs change tout. On ne se sent plus seule à porter une vision.",
    name: "Amina K.",
    place: "Montréal, Québec",
  },
  {
    quote: "L'accompagnement au financement a transformé une idée en entreprise viable.",
    name: "Awa S.",
    place: "Paris, France",
  },
];

function ImpactPage() {
  const { t } = useLang();
  return (
    <Shell>
      <section className="pt-16 sm:pt-24">
        <div className="container-x">
          <SectionHeader
            kicker="Impact"
            title="Des chiffres,"
            accent="des récits, du terrain."
            lead="Notre travail se mesure aux entreprises lancées, aux compétences transmises et aux vies transformées."
          />
        </div>
      </section>

      <section className="mt-14">
        <div className="container-x">
          <div className="grid gap-y-10 rounded-3xl border border-border bg-card p-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
            {t.stats.map((s, i) => (
              <div key={s.v} className={`px-0 lg:px-8 ${i === 0 ? "lg:pl-0" : ""}`}>
                <div className="font-display text-6xl font-medium leading-none tracking-[-0.03em] text-gradient-brand sm:text-7xl">
                  {s.k}
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x mt-20">
        <h3 className="font-display text-3xl text-foreground sm:text-4xl">Témoignages</h3>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {stories.map((s, i) => (
            <figure
              key={i}
              className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7"
            >
              <Quote className="h-7 w-7 text-[color:var(--magenta)]" />
              <blockquote className="mt-5 font-display text-xl leading-snug text-foreground">
                « {s.quote} »
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                <div className="font-medium text-foreground">{s.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.place}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <div className="rounded-3xl bg-[color:var(--ink)] p-10 text-[color:var(--cream)] sm:p-14">
          <div className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--gold)]">
            Rapport d'impact annuel
          </div>
          <h3 className="mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
            Téléchargez le rapport complet — chiffres, méthodologie, cartographie des bénéficiaires.
          </h3>
          <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[color:var(--cream)] px-6 py-3.5 text-sm font-medium text-[color:var(--ink)] transition-transform hover:scale-[1.02]">
            Télécharger (PDF)
          </button>
        </div>
      </section>
    </Shell>
  );
}
