import { skills } from '../data/skills'
import { Badge } from './Badge'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" kicker="My toolbox" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.name}
            className="rounded-xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.02]"
          >
            <h3 className="text-sm font-semibold text-brand dark:text-brand-light">
              {group.name}
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Badge key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
