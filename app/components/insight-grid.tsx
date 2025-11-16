type Highlight = {
  title: string;
  body: string;
  accent: string;
};

type InsightGridProps = {
  highlights: Highlight[];
};

const accentShades: Record<string, string> = {
  ops: "bg-[#fce8d5]",
  retrieval: "bg-[#e4f0ff]",
  agents: "bg-[#f3e9ff]",
  open: "bg-[#e9ffe5]"
};

export function InsightGrid({ highlights }: InsightGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {highlights.map((highlight) => (
        <article
          key={highlight.title}
          className={`rounded-3xl border-4 border-midnight p-8 shadow-brutal ${
            accentShades[highlight.accent] ?? "bg-white"
          }`}
        >
          <h3 className="font-display text-2xl mb-3">{highlight.title}</h3>
          <p className="text-midnight/80 text-base leading-relaxed">
            {highlight.body}
          </p>
        </article>
      ))}
    </section>
  );
}
