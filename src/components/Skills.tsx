import { skills } from '../data/skills'
import { Badge } from './Badge'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" kicker="My toolbox" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => {
          const isLlm = group.name === 'LLM & RAG'
          return (
            <div
              key={group.name}
              className="rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-neutral-900"
            >
              <h3
                className={`font-mono text-sm font-semibold ${
                  isLlm ? 'text-teal-700 dark:text-accent' : 'text-brand dark:text-brand-light'
                }`}
              >
                {group.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Badge key={skill} label={skill} accent={isLlm} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
