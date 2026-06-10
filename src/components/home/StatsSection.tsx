import { useLang } from "@/i18n/LangProvider";

export function StatsSection() {
  const { t } = useLang();
  return (
    <section className="relative bg-[color:var(--violet-deep)] py-20 text-[color:var(--cream)] sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-aurora opacity-60" />
      <div className="container-x relative">
        <div className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--gold)]">
          <span className="inline-block h-px w-8 bg-[color:var(--gold)]" />
          {t.home.statsKicker}
        </div>

        <div className="mt-10 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[color:var(--cream)]/15">
          {t.stats.map((s, i) => (
            <div key={s.v} className={`px-0 lg:px-10 ${i === 0 ? "lg:pl-0" : ""}`}>
              <div className="font-display text-6xl font-medium leading-none tracking-[-0.03em] text-[color:var(--cream)] sm:text-7xl">
                {s.k}
              </div>
              <div className="mt-3 text-sm text-[color:var(--cream)]/75">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
