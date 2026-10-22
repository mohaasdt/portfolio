import { profile } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" kicker="Who I am" title="About" muted>
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <p className="max-w-2xl text-neutral-700 dark:text-neutral-200">
          {profile.about}
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Education
            </h3>
            <p className="mt-2 font-semibold">{profile.education.school}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              {profile.education.program}
            </p>
            <p className="font-mono text-xs text-neutral-500">
              {profile.education.period}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Languages
            </h3>
            <ul className="mt-2 space-y-1">
              {profile.languages.map((lang) => (
                <li key={lang.name} className="text-sm">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-neutral-500"> — {lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
