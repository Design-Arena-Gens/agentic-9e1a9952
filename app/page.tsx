import { ExperienceCard } from "./components/experience-card";
import { InsightGrid } from "./components/insight-grid";
import { ProjectShowcase } from "./components/project-showcase";
import { SignalList } from "./components/signal-list";

const highlights = [
  {
    title: "LLM Ops",
    body: "Production-grade LLM pipelines that stay fast, safe, and adaptable.",
    accent: "ops"
  },
  {
    title: "Retrieval Engine",
    body: "Designed low-latency retrieval services for knowledge-dense teams.",
    accent: "retrieval"
  },
  {
    title: "Agent Workflows",
    body: "Built multi-agent automations that drive document, research, and coding flows.",
    accent: "agents"
  },
  {
    title: "Open Source",
    body: "CommandRex, Junior Researcher, and tools for experimentation and teaching.",
    accent: "open"
  }
];

const experiences = [
  {
    title: "LLM Systems Architect",
    timeframe: "2023 — Present",
    description:
      "Fine-tuned Qwen and Llama variants, orchestrated evaluation loops, and shipped RAG pipelines powering document automation for enterprise ops.",
    impactPoints: [
      "Deployed a retrieval mesh with adaptive reranking that slashed hallucinations by 38%",
      "Cut inference spend by 27% with dynamic routing across open and hosted models",
      "Hardened safety via policy-tuned guardrails and live drift monitoring dashboards"
    ]
  },
  {
    title: "AI Platform Engineer",
    timeframe: "2021 — 2023",
    description:
      "Scaled agent-driven workflows from prototype to daily production use, turning complex AI ideas into reliable services adopted across teams.",
    impactPoints: [
      "Launched document automation that parses 10K+ PDFs/day with deterministic QA gates",
      "Instituted chaos testing for LLM agents to ensure graceful degradation on edge cases",
      "Shipped real-time analytics on retrieval performance for product and research squads"
    ]
  }
];

const projects = [
  {
    name: "CommandRex",
    tagline: "CLI-first orchestration for custom LLM command trees",
    detail:
      "Open source framework that wires declarative command graphs into reasoning agents, with hot reloadable skills and transparent logs.",
    link: "https://github.com",
    tags: ["Open Source", "Agents", "CLI"]
  },
  {
    name: "Junior Researcher",
    tagline: "Autonomous analyst that drafts literature insights with citations",
    detail:
      "Combines retrieval augmentation, argument mapping, and voice synthesis to accelerate research sprints with accountable provenance.",
    link: "https://github.com",
    tags: ["RAG", "Research Ops", "Voice"]
  },
  {
    name: "Fast Retrieval Service",
    tagline: "High recall, low latency embeddings service",
    detail:
      "Vector database tuned for hybrid search with multi-tenant caching, powering document automation at scale.",
    link: "https://github.com",
    tags: ["Infrastructure", "Retrieval", "Latency < 80ms"]
  }
];

const signals = [
  {
    category: "Research",
    items: [
      "Published on aligning agent reward models with human review velocity",
      "Exploring MCP servers as programmable interfaces for AI-native tooling"
    ]
  },
  {
    category: "Teaching",
    items: [
      "Run hands-on workshops on RAG hardening and evaluation strategy",
      "Mentor teams on shipping incident-proof LLM products"
    ]
  },
  {
    category: "Experiments",
    items: [
      "Building coding agents that pair with MCP for environment control",
      "Designing dataset tooling for low-resource fine-tuning sprints"
    ]
  }
];

export default function Page() {
  return (
    <main className="min-h-screen p-6 sm:p-10 md:p-16 lg:p-24 bg-cream text-midnight">
      <div className="max-w-6xl mx-auto space-y-24">
        <section className="rounded-[32px] border-4 border-midnight bg-white p-10 md:p-16 shadow-brutal relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-14 h-72 w-72 rotate-[12deg] border-[3px] border-midnight bg-accent/20 shadow-brutal"></div>
            <div className="absolute -bottom-32 -left-28 h-80 w-80 rotate-[-8deg] border-[3px] border-midnight bg-muted/60 shadow-brutal"></div>
          </div>
          <div className="relative z-10 space-y-6">
            <span className="inline-flex rounded-full border-2 border-midnight bg-cream px-4 py-1 text-sm font-semibold uppercase tracking-widest shadow-brutal">
              AI Engineer · Builder of reliable AI products
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight">
              I craft LLM systems that survive production and stay delightful.
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-midnight/80">
              I build end-to-end AI experiences: fine-tuning models like Qwen and
              Llama, designing RAG pipelines, and shipping agent workflows that
              teams depend on every day.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                className="rounded-2xl border-2 border-midnight bg-accent px-6 py-3 text-lg font-semibold shadow-brutal transition hover:-translate-y-1 hover:-translate-x-1"
                href="mailto:hello@aiengineer.dev"
              >
                Book a build sprint
              </a>
              <a
                className="rounded-2xl border-2 border-midnight bg-cream px-6 py-3 text-lg font-semibold shadow-brutal transition hover:-translate-y-1 hover:-translate-x-1"
                href="#projects"
              >
                View active projects
              </a>
            </div>
          </div>
        </section>

        <InsightGrid highlights={highlights} />

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Systems in production
            </h2>
            <p className="text-midnight/80 mb-8 max-w-xl">
              Most of my time goes into translating research-grade ideas into
              resilient software. Here&apos;s how those systems show up inside
              teams.
            </p>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <ExperienceCard key={experience.title} {...experience} />
              ))}
            </div>
          </div>
          <SignalList signals={signals} />
        </section>

        <ProjectShowcase projects={projects} />

        <section
          id="contact"
          className="rounded-[32px] border-4 border-midnight bg-white p-10 md:p-16 shadow-brutal"
        >
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <h2 className="font-display text-3xl md:text-4xl">
                Let&apos;s ship something ambitious
              </h2>
              <p className="text-midnight/80 max-w-xl">
                Whether you need evaluation infrastructure, resilient agents, or
                a fresh take on retrieval, I plug in with product teams to launch
                fast and iterate where it matters.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                className="rounded-2xl border-2 border-midnight bg-accent px-6 py-3 text-center text-lg font-semibold shadow-brutal transition hover:-translate-y-1 hover:-translate-x-1"
                href="mailto:hello@aiengineer.dev"
              >
                hello@aiengineer.dev
              </a>
              <a
                className="rounded-2xl border-2 border-midnight bg-cream px-6 py-3 text-center text-lg font-semibold shadow-brutal transition hover:-translate-y-1 hover:-translate-x-1"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                github.com/aiengineer
              </a>
              <a
                className="rounded-2xl border-2 border-midnight bg-white px-6 py-3 text-center text-lg font-semibold shadow-brutal transition hover:-translate-y-1 hover:-translate-x-1"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/aiengineer
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
