type Project = {
  name: string;
  tagline: string;
  detail: string;
  link: string;
  tags: string[];
};

type ProjectShowcaseProps = {
  projects: Project[];
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <section
      id="projects"
      className="rounded-[32px] border-4 border-midnight bg-white p-10 md:p-16 shadow-brutal"
    >
      <div className="flex flex-wrap items-end justify-between gap-6 pb-10">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">
            Open source & launch-ready work
          </h2>
          <p className="text-midnight/80 max-w-xl mt-4">
            Tooling that supports workflows from research to production. Clean
            interfaces, transparent logs, and guardrails that help teams move
            faster.
          </p>
        </div>
        <a
          className="rounded-2xl border-2 border-midnight bg-cream px-5 py-3 text-sm font-semibold uppercase tracking-wide shadow-brutal transition hover:-translate-y-1 hover:-translate-x-1"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          Explore the repos
        </a>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col justify-between rounded-3xl border-4 border-midnight bg-cream p-8 shadow-brutal"
          >
            <div className="space-y-4">
              <h3 className="font-display text-2xl">{project.name}</h3>
              <p className="font-semibold text-midnight">{project.tagline}</p>
              <p className="text-sm text-midnight/80 leading-relaxed">
                {project.detail}
              </p>
            </div>
            <div className="pt-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border-2 border-midnight bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide shadow-brutal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                className="inline-flex items-center gap-2 text-sm font-semibold text-midnight underline decoration-accent decoration-4 underline-offset-4"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
