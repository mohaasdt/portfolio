import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" kicker="Get in touch" title="Let's talk">
      <div className="rounded-xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.02]">
        <p className="max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
          I'm looking for a 6-month PFE internship starting February 2027, in
          Morocco, France or internationally. If you're building with LLMs, RAG
          or NLP, I'd love to hear from you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy"
        >
          <MailIcon className="h-4 w-4" />
          {profile.email}
        </a>

        <div className="mt-6 flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-brand dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-brand-light"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-brand dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-brand-light"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </Section>
  )
}
