import { experience } from '../data/experience'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" kicker="Where I've worked" title="Experience" muted>
      <ol className="relative border-l border-slate-200 pl-6 dark:border-white/15">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="mb-8 last:mb-0">
            <span className="absolute -left-[6.5px] mt-1.5 h-3 w-3 rounded-full border-2 border-brand bg-white dark:bg-navy" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-lg font-semibold">{item.role}</h3>
              <span className="text-sm text-slate-500">{item.period}</span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-brand dark:text-brand-light">
              {item.company}
              <span className="text-slate-400"> · {item.location}</span>
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
