import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { SectionHeader } from "@/components/ui-brand/SectionHeader";
import { useLang } from "@/i18n/LangProvider";
import anneSophie from "@/assets/anne-sophie.jpg";
import photoAngelique from "@/assets/angelique_marguerite_big.jpg";
import photoAlice from "@/assets/alice_niang.jpg";
import photoMariama from "@/assets/mariama_dabo.jpg";
import photoElisabeth from "@/assets/elisabeth_big.jpg";
import photoTrioAbout from "@/assets/photo-trio-vrai.webp";
import logoNoir from "@/assets/logo-noir.png";
import { PhotoGallery } from "@/components/about/PhotoGallery";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — XOYAM" },
      { name: "description", content: "Mission, Vision, Valeurs, Fondatrices et équipe de XOYAM — Afro Women Workshops." },
      { property: "og:title", content: "À propos — XOYAM" },
      { property: "og:description", content: "Une vision continentale, une action enracinée." },
    ],
  }),
  component: AboutPage,
});

/* ─── Founders — Élisabeth en tête (patronne du site) ─── */
const founders = [
  {
    name: "Élisabeth Gnilane Faye",
    role: "Co-fondatrice · Responsable XOYAM Sénégal",
    bio: "Pont entre la vision continentale et l'action locale, Élisabeth supervise la coordination des activités de la coopérative au Sénégal. Issue du secteur de la formation, elle développe et adapte les programmes XOYAM aux réalités socio-économiques locales, gère la communication, les équipes terrain, la formation des bénévoles, ainsi que les partenariats et levées de fonds.",
    initials: "EF",
    photo: photoElisabeth,
  },
  {
    name: "Angélique M. B. Diène",
    role: "Instigatrice & Directrice générale",
    bio: "Entrepreneure sociale et militante, Angélique fonde Afro Women Workshops (AWW) en 2015 — devenu XOYAM en 2025. Forte d'une expertise en gestion, comptabilité et management acquise entre le Sénégal, la France et le Canada, elle bâtit un écosystème inclusif où les femmes afrodescendantes innovent et transforment leurs communautés. Elle est également à l'origine de R Magazine, Vilicatio et du Domaine Diène.",
    initials: "AD",
    photo: photoAngelique,
  },
  {
    name: "Alice Niang",
    role: "Co-fondatrice & Administratrice",
    bio: "Juriste passionnée et professionnelle rigoureuse, Alice met son expertise en droit et gestion administrative au service de l'impact social, après une carrière entre la France, le Canada et le Sénégal. Elle joue un rôle clé dans la structuration de l'organisation, le service à la clientèle et la gestion des opérations.",
    initials: "AN",
    photo: photoAlice,
  },
  {
    name: "Mariama Dabo",
    role: "Co-fondatrice & Administratrice",
    bio: "Connue aussi sous le nom d'Émeraude, Mariama est animatrice radio, présentatrice télé, mannequin international, photographe et promotrice artisanale. Depuis son arrivée au Canada, elle développe des projets de valorisation des produits de la Casamance. Au sein de XOYAM, elle insuffle un esprit de sororité entrepreneuriale plutôt que de compétition.",
    initials: "MD",
    photo: photoMariama,
  },
];

const values = [
  { icon: "🌱", label: "Autonomisation" },
  { icon: "🤝", label: "Solidarité" },
  { icon: "♻️", label: "Durabilité" },
  { icon: "⚖️", label: "Équité" },
  { icon: "💡", label: "Innovation" },
  { icon: "🌍", label: "Impact social" },
  { icon: "⭐", label: "Excellence" },
];

const team = [
  { name: "Anne-Sophie Benauw", role: "Financement & subventions", photo: anneSophie },
  { name: "Xavier Faure", role: "Consultant stratégies" },
  { name: "Angela Harvey", role: "Direction artistique" },
  { name: "Aline Lima", role: "Développement web" },
  { name: "James A. Jean Jacques", role: "Dev. JS & Back-end" },
  { name: "Barbara Saroukou", role: "Dev. Front — refonte" },
  { name: "Erika Castillo", role: "Administration" },
  { name: "Néné Coumba Thiam", role: "Administration" },
  { name: "Marie Fatou Camara", role: "Administration" },
  { name: "Abiane-Hiis Abdallah", role: "Recrutement bénévoles" },
  { name: "Emmanuel Jésugo Hounkpé", role: "Recrutement bénévoles" },
];

function AboutPage() {
  const { t } = useLang();
  return (
    <Shell>
      {/* ── HEADER with group photo ── */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-16 sm:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <SectionHeader
              kicker={t.about.kicker}
              title="Une vision continentale,"
              accent="enracinée dans l'action."
              lead={t.about.lead}
            />
            <div className="hidden lg:block">
              <img 
                src={logoNoir} 
                alt="Logo XOYAM" 
                className="w-48 h-auto opacity-10 hover:opacity-20 transition-opacity"
              />
            </div>
          </div>
        </div>
        {/* Full-width group photo below header */}
        <div className="container-x mt-12">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={photoTrioAbout}
              alt="Les fondatrices de XOYAM — Afro Women Workshops"
              className="w-full object-cover object-center"
              style={{ maxHeight: "560px", objectPosition: "center 45%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--cream)]/70">
                Photo · Christelle Cognac Photographe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOTRE HISTOIRE ── */}
      <section className="container-x mt-20 sm:mt-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <div>
            <div className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--magenta)]">
              2015 → aujourd'hui
            </div>
            <h3 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
              {t.about.historyTitle}
            </h3>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.about.historyText}
          </p>
        </div>
      </section>

      {/* ── XOYAM & Afro Women Workshops ── */}
      <section className="container-x mt-12 sm:mt-16">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12">
            <div className="font-display text-6xl text-gradient-brand sm:text-7xl leading-none">X</div>
            <div>
              <h4 className="font-display text-2xl text-foreground sm:text-3xl">
                {t.about.xoyamLinkTitle}
              </h4>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t.about.xoyamLinkText}
              </p>
              <a
                href="https://afrowomenworkshops.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--magenta)] underline-offset-4 hover:underline"
              >
                afrowomenworkshops.com →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION · VISION · VALEURS ── */}
      <section className="container-x mt-20 sm:mt-28">
        <div className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--magenta)]">
          <span className="inline-block h-px w-8 bg-[color:var(--magenta)]" />
          Mission · Vision · Valeurs
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Mission */}
          <div className="col-span-full rounded-3xl bg-gradient-brand p-8 text-[color:var(--cream)] lg:col-span-1">
            <div className="font-display text-5xl opacity-30">M</div>
            <h4 className="mt-2 font-display text-2xl">Mission</h4>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--cream)]/85">
              Autonomiser les femmes entrepreneures africaines et caribéennes grâce à des outils, des formations et un réseau collaboratif puissant.
            </p>
          </div>
          {/* Vision */}
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="font-display text-5xl text-[color:var(--magenta)] opacity-30">V</div>
            <h4 className="mt-2 font-display text-2xl text-foreground">Vision</h4>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Construire un avenir équitable et durable où le leadership féminin transforme les sociétés et stimule la croissance mondiale.
            </p>
          </div>
          {/* Valeurs */}
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="font-display text-5xl text-[color:var(--gold)] opacity-30">V</div>
            <h4 className="mt-2 font-display text-2xl text-foreground">Valeurs</h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {values.map((v) => (
                <li
                  key={v.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  <span>{v.icon}</span>
                  {v.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FONDATRICES — Élisabeth en tête ── */}
      <section className="container-x mt-20 sm:mt-28">
        <h3 className="font-display text-3xl text-foreground sm:text-4xl">{t.about.foundersTitle}</h3>
        <div className="mt-10 space-y-5">
          {founders.map((f, i) => (
            <FounderCard key={f.name} founder={f} featured={i === 0} />
          ))}
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section className="container-x mt-20 sm:mt-28">
        <div className="flex items-end justify-between">
          <h3 className="font-display text-3xl text-foreground sm:text-4xl">{t.about.teamTitle}</h3>
          <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{team.length} membres</span>
        </div>
        <ul className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <li key={m.name} className="flex items-center gap-4 border-b border-border pb-6">
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  className="h-14 w-14 rounded-full object-cover ring-1 ring-border"
                />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary font-display text-lg text-[color:var(--violet-deep)]">
                  {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
              )}
              <div>
                <div className="font-display text-lg text-foreground">{m.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{m.role}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── CELLULES LOCALES — Sénégal + Canada ── */}
      <section className="container-x mt-20 sm:mt-28 pb-24">
        <div className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--magenta)] mb-8">
          <span className="inline-block h-px w-8 bg-[color:var(--magenta)]" />
          {t.about.cellsTitle}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Sénégal */}
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="flex items-end justify-between">
              <div>
                <h4 className="font-display text-3xl text-foreground">Sénégal</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Présidée par{" "}
                  <strong className="text-foreground">Élisabeth Gnilane Faye</strong>, la cellule
                  sénégalaise réunit Fatou Cissé, Christophe Mandass Diono et un réseau de
                  bénévoles engagé·e·s sur le terrain.
                </p>
              </div>
              <div className="font-display text-5xl text-gradient-brand leading-none ml-6">SN</div>
            </div>
          </div>
          {/* Canada */}
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="flex items-end justify-between">
              <div>
                <h4 className="font-display text-3xl text-foreground">Canada</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Coordonnée par{" "}
                  <strong className="text-foreground">Angélique M. B. Diène</strong>, la cellule
                  canadienne pilote les programmes à destination de la diaspora africaine et
                  caribéenne au Québec et à travers le Canada.
                </p>
              </div>
              <div className="font-display text-5xl text-gradient-brand leading-none ml-6">CA</div>
            </div>
          </div>
        </div>
      </section>
      {/* ── GALERIE PHOTOS ── */}
      <PhotoGallery />
    </Shell>
  );
}

/* ── Founder card with real photo ── */
type Founder = { name: string; role: string; bio: string; initials: string; photo: string | null };

function FounderCard({ founder: f, featured }: { founder: Founder; featured: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-border transition-all hover:-translate-y-1 hover:shadow-elegant ${
        featured ? "bg-gradient-brand text-[color:var(--cream)]" : "bg-card"
      }`}
    >
      <div className={`flex flex-col gap-0 sm:flex-row ${featured ? "sm:min-h-[220px]" : ""}`}>
        {/* Photo or initials avatar */}
        <div
          className={`relative shrink-0 ${
            featured
              ? "h-52 sm:h-auto sm:w-[220px] lg:w-[260px]"
              : "h-40 sm:h-auto sm:w-[160px] lg:w-[190px]"
          } overflow-hidden`}
        >
          {f.photo ? (
            <img
              src={f.photo}
              alt={f.name}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center font-display ${
                featured
                  ? "bg-[color:var(--cream)]/15 text-[color:var(--cream)] text-7xl"
                  : "bg-secondary text-[color:var(--violet-deep)] text-5xl"
              }`}
            >
              {f.initials}
            </div>
          )}
          {/* gradient overlay on photo side */}
          {f.photo && (
            <div
              className={`absolute inset-y-0 right-0 w-16 bg-gradient-to-r ${
                featured ? "from-transparent to-[#3A1A5C]" : "from-transparent to-[color:var(--cream)]"
              } opacity-0 sm:opacity-100`}
              style={{ background: "none" }}
            />
          )}
        </div>

        {/* Text content */}
        <div className={`flex flex-1 flex-col justify-center p-7 ${featured ? "sm:p-10" : ""}`}>
          <h4
            className={`font-display leading-tight ${
              featured
                ? "text-3xl text-[color:var(--cream)] sm:text-4xl"
                : "text-2xl text-foreground"
            }`}
          >
            {f.name}
          </h4>
          <p
            className={`mt-1.5 text-sm font-medium ${
              featured ? "text-[color:var(--gold)]" : "text-[color:var(--magenta)]"
            }`}
          >
            {f.role}
          </p>
          <p
            className={`mt-4 text-sm leading-relaxed ${
              featured ? "text-[color:var(--cream)]/80 max-w-xl" : "text-muted-foreground"
            }`}
          >
            {f.bio}
          </p>
        </div>
      </div>
    </article>
  );
}
