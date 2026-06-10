import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { useLang } from "@/i18n/LangProvider";
import type { Lang } from "@/i18n/dict";

type NavItem = { to: string; key: keyof ReturnType<typeof useLang>["t"]["nav"] };

const items: NavItem[] = [
  { to: "/a-propos", key: "about" },
  { to: "/piliers", key: "pillars" },
  { to: "/programmes", key: "programs" },
  { to: "/evenements", key: "events" },
  { to: "/impact", key: "impact" },
  { to: "/contact", key: "contact" },
];

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Logo variant="dark" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {items.map((it) => {
            const active = path === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.nav[it.key]}
                <span
                  className={`pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left bg-[color:var(--magenta)] transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <Link
            to="/contact"
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-[color:var(--magenta)] hover:text-[color:var(--cream)] hover:shadow-glow lg:inline-flex"
          >
            {t.nav.cta}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x flex flex-col gap-1 pb-6 pt-2">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="group flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-display tracking-tight text-foreground transition-colors hover:bg-secondary"
            >
              {t.nav[it.key]}
              <span aria-hidden className="text-[color:var(--magenta)] opacity-0 transition-opacity group-hover:opacity-100">→</span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="relative inline-flex h-9 items-center rounded-full border border-border bg-card p-0.5 text-xs font-medium uppercase tracking-[0.18em] shadow-soft"
    >
      <span
        aria-hidden
        className={`absolute top-0.5 bottom-0.5 w-1/2 rounded-full bg-foreground transition-transform duration-500 ${
          lang === "en" ? "translate-x-full" : "translate-x-0"
        }`}
      />
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`relative z-10 w-10 text-center transition-colors ${
            lang === l ? "text-background" : "text-muted-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
