

import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["C#", "ASP.NET Core", "REST APIs", "NodeJS", "PHP", "EF Core", "Hangfire"],
    },
    {
      title: "Frontend",
      skills: ["Svelte", "React", "Angular", "TypeScript", "JavaScript", "TailwindCSS", "ECharts"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["Microsoft Azure", "Docker", "CI/CD", "Azure DevOps"],
    },
    {
      title: "Data & Caching",
      skills: ["SQL Server", "MongoDB", "Redis", "Solr"],
    },
    {
      title: "Architecture & Methodologies",
      skills: ["Microservices", "Clean Architecture", "SOLID", "Design Patterns", "Agile", "Scrum", "Technical Leadership", "Mentorship"],
    },
  ]


  return (
    <section id="skills" className=" flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-sm text-muted-foreground mb-12 uppercase tracking-wider">Skills</h2>
        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default border border-border"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
