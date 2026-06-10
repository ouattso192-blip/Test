import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { useLang } from "@/i18n/LangProvider";

export function Footer() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="relative mt-24 overflow-hidden bg-[color:var(--ink)] text-[color:var(--cream)]">
      <div aria-hidden className="absolute inset-0 bg-aurora opacity-50" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--magenta)] to-transparent" />

      <div className="container-x relative z-10 grid gap-14 py-20 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo variant="light" className="mb-2" />
          <p className="mt-6 max-w-sm text-base leading-relaxed text-[color:var(--cream)]/80">
            {t.common.tagline}
          </p>
          <div className="mt-6 flex gap-2">
            {[
              { Icon: Instagram, href: "https://instagram.com/afrowomenworkshops", label: "Instagram" },
              { Icon: Facebook, href: "https://facebook.com/afrowomenworkshops", label: "Facebook" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:contact@afrowomenworkshops.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[color:var(--cream)] transition-all hover:border-[color:var(--magenta)] hover:bg-[color:var(--magenta)]/20"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Navigation"
          links={[
            { to: "/", label: t.nav.home },
            { to: "/a-propos", label: t.nav.about },
            { to: "/piliers", label: t.nav.pillars },
            { to: "/programmes", label: t.nav.programs },
          ]}
        />
        <FooterCol
          title="XOYAM"
          links={[
            { to: "/evenements", label: t.nav.events },
            { to: "/impact", label: t.nav.impact },
            { to: "/contact", label: t.nav.contact },
          ]}
        />

        <div>
          <h4 className="font-display text-xl text-[color:var(--cream)]">{t.footer.newsletter}</h4>
          <p className="mt-2 text-sm text-[color:var(--cream)]/70">{t.footer.newsletterLead}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
            className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.footer.placeholder}
              className="w-full bg-transparent px-5 py-3 text-sm text-[color:var(--cream)] placeholder:text-[color:var(--cream)]/40 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1 bg-[color:var(--magenta)] px-4 text-sm font-medium text-[color:var(--cream)] transition-colors hover:bg-[color:var(--crimson)]"
              aria-label={t.footer.subscribe}
            >
              {done ? "✓" : <ArrowUpRight className="h-4 w-4" />}
            </button>
          </form>
          {done && (
            <p className="mt-2 text-xs text-[color:var(--gold)]">✓ Merci — à très vite.</p>
          )}
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-[color:var(--cream)]/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} XOYAM — Afro Women Workshops. {t.footer.rights}</p>
          <p className="font-mono uppercase tracking-[0.2em]">{t.footer.built}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-medium uppercase tracking-[0.24em] text-[color:var(--gold)]">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="group inline-flex items-center gap-1 text-[color:var(--cream)]/80 transition-colors hover:text-[color:var(--cream)]"
            >
              {l.label}
              <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
