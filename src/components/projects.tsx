import { FolderCode } from "lucide-react"

interface ProjectItem {
  title: string
  company: string
  description: string
  items: string[]
  techStack: string[]
}

export function Projects() {
  const projects: ProjectItem[] = [
    {
      title: "Sales Dashboard",
      company: "Pantheon Inc (ExxonMobil Program)",
      description:
        "Enterprise analytics portal tracking pricing-model predictions, accuracy and business impact across 20+ product lines and regions.",
      items: [
        "Parallelized per-business-unit aggregation queries (20+ units), cutting global dashboard load times several-fold compared with the previous sequential implementation.",
        "Built response-level caching with tag-based invalidation and HTTP 304 support, making repeat loads of heavy analytics views near-instant and eliminating payload transfer for unchanged data.",
        "Built a responsive Angular 22 front end as a library-based monorepo (core, UI components, domain components, app) using standalone components, Signals, zoneless change detection and lazy-loaded routes.",
        "Created a reusable, SOLID-based charting layer on top of ECharts powering the analytical views, with filter state synced to the URL and automatic cancellation of outdated requests.",
      ],
      techStack: [
        "C#",
        ".NET 10",
        "ASP.NET Core",
        "EF Core",
        "CQRS",
        "SQL Server",
        "Azure",
        "Azure DevOps",
        "Angular",
        "TypeScript",
        "ECharts",
        "Tailwind CSS",
      ],
    },
    {
      title: "Price Suggestion",
      company: "Pantheon Inc (ExxonMobil Program)",
      description:
        "Took part in building the MVP of the price suggestion dashboard and contributed to its evolution into an end-to-end platform where sales teams review model recommendations, draft prices and submit them for endorsement and execution.",
      items: [
        "Contributed to a modular .NET back end of 25+ domain modules running in a single deployable API.",
        "Integrated enterprise master and transactional data through Azure Service Bus event-driven subscribers, with retry handling, a dead-letter queue and a runtime toggle that pauses consumption during deployments without losing messages.",
        "Improved resilience and scalability with Redis distributed caching, distributed locking (RedLock), Polly retry policies and parallel queries.",
        "Supported safe, observable releases with OpenTelemetry/Azure Monitor tracing, 20+ feature flags, versioned database migrations (FluentMigrator) and Hangfire background jobs.",
      ],
      techStack: [
        "C#",
        ".NET 10",
        "ASP.NET Core",
        "EF Core",
        "SQL Server",
        "Azure Service Bus",
        "Redis",
        "Hangfire",
        "OpenTelemetry",
        "Angular",
        "NgRx",
        "TypeScript",
      ],
    },
    {
      title: "e-TCEES",
      company: "Espírito Santo State Court of Audit (TCE-ES)",
      description:
        "Core enterprise platform of the TCE-ES supporting the Court's entire operation, from electronic case processing, filing, plenary and virtual sessions and audits to administrative and HR management, across 60+ functional areas.",
      items: [
        "Took part in the platform from inception, contributing to architecture and technology decisions and implementing key modules of a large ASP.NET MVC solution (500+ controllers).",
        "Built shared infrastructure modules reused across portals and services, including Redis caching, Hangfire job scheduling, Solr full-text indexing and real-time notifications with SignalR.",
        "Developed the digital signature engine (PAdES/PKCS#7 with iTextSharp and BouncyCastle), with certificate-chain and LTV validation, tamper detection, PDF/A checks and a public document-authenticity validation service.",
        "Implemented a rule-based workflow engine to model the lifecycle of cases and documents.",
      ],
      techStack: [
        "C#",
        "ASP.NET MVC",
        "ASP.NET",
        "Entity Framework",
        "SQL Server",
        "Redis",
        "Hangfire",
        "Apache Solr",
        "SignalR",
        "iTextSharp",
        "JavaScript",
        "Angular",
      ],
    },
    {
      title: "PDF Compliance",
      company: "Espírito Santo State Court of Audit (TCE-ES)",
      description:
        "Public web tool and validation microservice that checks PDF documents against the Court's regulations before they are filed, used by citizens, public agencies and other TCE-ES systems. Sole developer, responsible for end-to-end delivery (architecture, back end, front end, API design and validation logic).",
      items: [
        "Implemented the validation engine covering ICP-Brasil digital signatures, text searchability, per-page size limits and other rules.",
        "Built a React interface with drag-and-drop multi-file upload and clear, per-file compliance feedback, so users could fix issues before filing.",
        "Exposed the rules as a REST microservice consumed by other TCE-ES systems (such as electronic filing), keeping a single source of validation as the regulations evolved.",
      ],
      techStack: ["React", "JavaScript", "TypeScript", "ASP.NET Core", "C#", "iTextSharp", "Microservices", "REST APIs"],
    },
    {
      title: "Painel de Controle",
      company: "Espírito Santo State Court of Audit (TCE-ES)",
      description:
        "Public data-transparency platform of the TCE-ES that consolidates fiscal, budget, payroll and compliance indicators for the State and all 78 municipalities of Espírito Santo, used by public managers, auditors and citizens.",
      items: [
        "Designed and implemented ETL pipelines that extract, validate and consolidate data from the Court's audit systems (CidadES) and the State financial system (Sigefes) into the platform's analytical base.",
        "Built interactive Angular dashboards with FusionCharts (charts, treemaps, gauges and Excel export), with map-based navigation and comparison views across municipalities.",
        "Optimized data pipelines and queries to keep indicators consistent, reliable and quickly available for interactive queries.",
        "Automated recurring data loads with scheduled background jobs (Hangfire), including validation and monitoring, so indicators stayed up to date without manual intervention.",
      ],
      techStack: ["Angular", "TypeScript", "FusionCharts", "ASP.NET", "SQL Server", "ETL", "Hangfire"],
    },
  ]

  return (
    <section id="projects" className="flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-sm text-muted-foreground mb-12 uppercase tracking-wider">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border/70 hover:border-primary/50 transition-colors shadow-xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <FolderCode className="h-5 w-5 text-primary shrink-0" />
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                </div>
                <span className="text-xs font-medium text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                  {project.company}
                </span>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 pt-1">
                {project.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                {project.techStack.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-2.5 py-0.5 rounded text-xs font-mono bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}