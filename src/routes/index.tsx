import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { Hero } from "@/components/home/Hero";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { JoinCta } from "@/components/home/JoinCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XOYAM — Afro Women Workshops" },
      { name: "description", content: "De la terre au numérique, XOYAM cultive l'avenir des femmes africaines et caribéennes : formation, mentorat, financement, EdTech." },
      { property: "og:title", content: "XOYAM — Afro Women Workshops" },
      { property: "og:description", content: "Plateforme bilingue FR/EN d'autonomisation des femmes entrepreneures afrodescendantes." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Shell>
      <Hero />
      <ManifestoSection />
      <PillarsSection />
      <StatsSection />
      <TestimonialsSection />
      <PartnersSection />
      <NewsletterSection />
      <JoinCta />
    </Shell>
  );
}
