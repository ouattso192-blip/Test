import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Shell } from "@/components/layout/Shell";
import { SectionHeader } from "@/components/ui-brand/SectionHeader";
import { useLang } from "@/i18n/LangProvider";

export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title: "Programmes — XOYAM" },
      { name: "description", content: "Catalogue complet des formations XOYAM : ateliers, mentorat, EdTech, programmes bien-être." },
      { property: "og:title", content: "Programmes — XOYAM" },
      { property: "og:description", content: "Ateliers, mentorat, EdTech et bien-être pour les femmes entrepreneures." },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    cat: "Formation",
    title: "Ateliers de création d'entreprise",
    desc: "De l'idée au business model — sessions interactives, gestion financière, marketing digital.",
    level: "Débutant · Intermédiaire · Avancé",
    cohort: "Cohortes trimestrielles",
  },
  {
    cat: "EdTech",
    title: "Programmes en ligne (plateforme apprenante)",
    desc: "Modules à la carte, ressources numériques téléchargeables, suivi personnalisé.",
    level: "Tous niveaux",
    cohort: "Accès continu",
  },
  {
    cat: "Mentorat",
    title: "Programme Shepreneures",
    desc: "Mentorat individuel avec des expertes, sessions de pairs, capsules vidéo.",
    level: "Femmes en lancement",
    cohort: "6 mois",
  },
  {
    cat: "Réseautage",
    title: "Salons & rencontres",
    desc: "Événements physiques et webinaires pour connecter, collaborer, lever des fonds.",
    level: "Membres & invité·e·s",
    cohort: "Mensuel",
  },
  {
    cat: "Bien-être",
    title: "Ateliers santé mentale & équilibre",
    desc: "Soutenir l'équilibre personnel pour soutenir l'entreprise — cercles de parole, mouvement, respiration.",
    level: "Ouvert",
    cohort: "Bi-mensuel",
  },
  {
    cat: "Financement",
    title: "Micro-financement & sociofinancement",
    desc: "Accompagnement à la recherche de financement, appels à projets, partenariats investisseurs.",
    level: "Projets validés",
    cohort: "Sur dossier",
  },
];

function ProgramsPage() {
  const { t } = useLang();
  return (
    <Shell>
      <section className="pt-16 sm:pt-24">
        <div className="container-x">
          <SectionHeader
            kicker={t.nav.programs}
            title="Apprendre, créer,"
            accent={"\nlever des fonds."}
            lead="XOYAM propose un parcours intégré : de la formation initiale au financement de votre projet."
          />
        </div>
      </section>

      <section className="container-x mt-14 sm:mt-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col justify-between gap-8 rounded-3xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:bg-[color:var(--magenta)] hover:text-white hover:shadow-elegant"
            >
              <div>
                <span className="inline-block rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[color:var(--violet-deep)] group-hover:bg-white/20 group-hover:text-white">
                  {p.cat}
                </span>
                <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight text-foreground group-hover:text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/90">{p.desc}</p>
              </div>
              <dl className="grid grid-cols-2 gap-3 border-t border-border pt-5 text-[0.7rem] uppercase tracking-[0.2em] group-hover:border-white/20">
                <div>
                  <dt className="text-muted-foreground/70 group-hover:text-white/70">Niveau</dt>
                  <dd className="mt-1 text-foreground group-hover:text-white">{p.level}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground/70 group-hover:text-white/70">Format</dt>
                  <dd className="mt-1 text-foreground group-hover:text-white">{p.cohort}</dd>
                </div>
              </dl>
              <button className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--magenta)] transition-colors group-hover:text-white">
                S'inscrire <ArrowUpRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}
