import { Calendar, FolderCode, MapPin } from "lucide-react"

interface KeyProject {
  title: string
  description: string
  items?: string[]
  techStack?: string[]
}

interface ExperienceItem {
  period: string
  role: string
  company: string
  location: string
  items: string[]
  keyProjects?: KeyProject[]
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      period: "Jan 2021 – Nov 2026",
      role: "Senior Full Stack Software Engineer",
      company: "Pantheon Inc (ExxonMobil Program)",
      location: "Remote – Brazil",
      items: [
        "Reduced API response times by an average of 35% by optimizing endpoints and database queries.",
        "Designed and developed scalable back-end services with ASP.NET Core, Entity Framework Core, and Hangfire.",
        "Integrated Azure services (Service Bus, Storage, SQL Server, Key Vault, and Application Insights).",
        "Built data-intensive dashboards and UI components in Angular.",
        "Managed CI/CD pipelines in Azure DevOps.",
        "Worked in a distributed global team, collaborating across regions, and mentored junior developers.",
        "Delivered internal technical training on Clean Code, SOLID principles, and performance optimization.",
        "Led the modernization of a legacy .NET analytics API into a CQRS-based modular architecture with strict build-time quality gates (analyzers, nullable, warnings as errors), policy-based authorization and reusable infrastructure libraries, improving maintainability and onboarding of new business units.",
      ],
      keyProjects: [
        {
          title: "Sales Dashboard",
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
      ],
    },
    {
      period: "Feb 2013 – Oct 2020",
      role: "Full Stack Software Engineer",
      company: "Espírito Santo State Court of Audit (TCE-ES)",
      location: "Brazil",
      items: [
        "Architected the organization's core enterprise system and a standardized digital signature platform, both in use for over 10 years, saving an estimated BRL 500,000 and approximately six months of development time compared with the contracted alternative.",
        "Initiated the migration of legacy systems to ASP.NET Core and React, improving application maintainability.",
        "Developed complex APIs, background processing jobs, ETL workflows, and caching layers with SQL Server, Redis, Solr, and SignalR.",
      ],
      keyProjects: [
        {
          title: "e-TCEES",
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
      ],
    },
    {
      period: "Jan 2010 – Jan 2013",
      role: "Web Developer",
      company: "TAB Editora e Comunicação",
      location: "Brazil",
      items: [
        "Developed and maintained custom, responsive websites and microsites with PHP, MySQL, jQuery, and Bootstrap, ensuring cross-device and cross-browser compatibility.",
        "Contributed to a custom Content Management System (CMS) for a construction company, working on both features and user interface.",
      ],
    },
    {
      period: "2008 – 2009",
      role: "Web Developer Intern",
      company: "Dacasa Financeira",
      location: "Brazil",
      items: [
        "Maintained and enhanced the company's internal CMS with ASP.NET Web Forms and JavaScript, introducing JavaScript-based solutions in place of Visual Studio's visual page-building features.",
        "Improved loading time and responsiveness of complex CMS screens containing a large number of UI elements.",
      ],
    },
    {
      period: "2007",
      role: "Computer Education Assistant Teacher",
      company: "Centro de Ensino Charles Darwin",
      location: "Brazil",
      items: [
        "Supported students in learning Microsoft Office (Word, Excel, and PowerPoint) and taught the fundamentals of HTML, web development, and animation with Adobe Flash.",
      ],
    },
  ]

  return (
    <section id="experience" className="flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-sm text-muted-foreground mb-12 uppercase tracking-wider">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span className="uppercase tracking-wider font-mono">{exp.period}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
              <p className="text-lg text-primary mb-1">{exp.company}</p>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                <MapPin className="h-3.5 w-3.5" />
                <span>{exp.location}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {exp.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {exp.keyProjects && exp.keyProjects.length > 0 && (
                <div className="mt-6 pt-4 border-t border-border/50 space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider">
                    <FolderCode className="h-4 w-4 text-primary" />
                    <span>Key Projects</span>
                  </div>
                  <div className="grid gap-4">
                    {exp.keyProjects.map((project, pIndex) => (
                      <div key={pIndex} className="p-4 rounded-lg bg-card/60 border border-border/60 space-y-3">
                        <h4 className="font-semibold text-foreground text-lg">{project.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                        {project.items && project.items.length > 0 && (
                          <ul className="space-y-1.5 pt-1">
                            {project.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                                <span className="text-primary">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {project.techStack && (
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.techStack.map((tech, tIndex) => (
                              <span
                                key={tIndex}
                                className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-secondary-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}