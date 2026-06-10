type Props = {
  kicker?: string;
  title: string;
  accent?: string;
  lead?: string;
  align?: "left" | "center";
};

export function SectionHeader({ kicker, title, accent, lead, align = "left" }: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {kicker && (
        <div className={`inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--magenta)]`}>
          <span className="inline-block h-px w-8 bg-[color:var(--magenta)]" />
          {kicker}
        </div>
      )}
      <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
        {title.split('\n').map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
        {accent && (
          <span className="block italic text-gradient-brand">
            {accent.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </span>
        )}
      </h2>
      {lead && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lead}
        </p>
      )}
    </div>
  );
}
