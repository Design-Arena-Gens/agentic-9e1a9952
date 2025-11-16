type Signal = {
  category: string;
  items: string[];
};

type SignalListProps = {
  signals: Signal[];
};

export function SignalList({ signals }: SignalListProps) {
  return (
    <aside className="sticky top-24 space-y-6 self-start">
      {signals.map((signal) => (
        <div
          key={signal.category}
          className="rounded-3xl border-4 border-midnight bg-white p-6 shadow-brutal"
        >
          <h3 className="font-display text-xl mb-4">{signal.category}</h3>
          <ul className="space-y-3 text-sm leading-relaxed text-midnight/80">
            {signal.items.map((item) => (
              <li
                key={item}
                className="rounded-2xl border-2 border-midnight bg-cream px-4 py-3 shadow-brutal"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
