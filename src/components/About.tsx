import { profile } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" kicker="Who I am" title="About" muted>
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <p className="max-w-2xl leading-relaxed text-slate-700 dark:text-slate-200">
          {profile.about}
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Education
            </h3>
            <p className="mt-2 font-semibold">{profile.education.school}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {profile.education.program}
            </p>
            <p className="text-sm text-slate-500">{profile.education.period}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Languages
            </h3>
            <ul className="mt-2 space-y-1">
              {profile.languages.map((lang) => (
                <li key={lang.name} className="text-sm">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-slate-500"> — {lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
