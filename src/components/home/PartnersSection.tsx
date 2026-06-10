import { useLang } from "@/i18n/LangProvider";

const partners = [
  {
    name: "Vilicatio",
    desc: {
      fr: "Partenaire agricole et terrain d'expérimentation au Sénégal. Vilicatio est le bras opérationnel de la coopérative XOYAM sur le sol africain.",
      en: "Agricultural partner and operational ground in Senegal. Vilicatio is the operational arm of the XOYAM cooperative on African soil.",
    },
  },
  {
    name: "Domaine Diène",
    desc: {
      fr: "Domaine familial qui accueille les programmes de maraîchage, d'élevage et de transformation portés par XOYAM au Sénégal.",
      en: "Family estate hosting XOYAM's market gardening, livestock and food-processing programmes in Senegal.",
    },
  },
  {
    name: "Nguur Suff",
    desc: {
      fr: "Association partenaire active dans la mobilisation des femmes entrepreneures et le rayonnement culturel de la diaspora sénégalaise.",
      en: "Partner association actively mobilising women entrepreneurs and promoting the cultural influence of the Senegalese diaspora.",
    },
  },
  {
    name: "Fondation Blaise Diagne",
    desc: {
      fr: "Fondation partenaire engagée dans le soutien à l'entrepreneuriat et au leadership des femmes africaines sur le continent et en diaspora.",
      en: "Partner foundation committed to supporting African women's entrepreneurship and leadership on the continent and in the diaspora.",
    },
  },
  {
    name: "R Magazine",
    desc: {
      fr: "Média partenaire qui met en lumière les parcours des Shepreneures XOYAM et amplifie la voix des femmes entrepreneures afrodescendantes.",
      en: "Media partner shining a light on XOYAM Shepreneures' journeys and amplifying the voices of Afrodescendant women entrepreneurs.",
    },
  },
];

export function PartnersSection() {
  const { t, lang } = useLang();
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="container-x">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            {t.home.partners}
          </div>
          <p className="max-w-lg text-sm text-muted-foreground">
            {t.home.affiliationsDesc}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="font-display text-lg text-foreground">{p.name}</div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {p.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
