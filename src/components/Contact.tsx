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

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-slate-200 dark:hover:border-brand-light dark:hover:text-brand-light"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-slate-200 dark:hover:border-brand-light dark:hover:text-brand-light"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </Section>
  )
}
