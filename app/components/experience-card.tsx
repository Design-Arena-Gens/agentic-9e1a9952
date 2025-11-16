type ExperienceCardProps = {
  title: string;
  timeframe: string;
  description: string;
  impactPoints: string[];
};

export function ExperienceCard({
  title,
  timeframe,
  description,
  impactPoints
}: ExperienceCardProps) {
  return (
    <article className="rounded-3xl border-4 border-midnight bg-cream p-8 shadow-brutal">
      <header className="flex flex-wrap items-baseline justify-between gap-4 pb-4">
        <h3 className="font-display text-2xl">{title}</h3>
        <span className="rounded-full border-2 border-midnight bg-white px-4 py-1 text-sm font-semibold uppercase tracking-wide shadow-brutal">
          {timeframe}
        </span>
      </header>
      <p className="text-midnight/80">{description}</p>
      <ul className="mt-6 space-y-3 text-sm leading-relaxed">
        {impactPoints.map((point) => (
          <li
            key={point}
            className="rounded-2xl border-2 border-midnight bg-white px-4 py-3 shadow-brutal"
          >
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
