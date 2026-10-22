import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" kicker="Get in touch" title="Let's talk">
      <div className="rounded-2xl border border-black/5 bg-white p-8 text-center dark:border-white/10 dark:bg-neutral-900">
        <p className="mx-auto max-w-xl text-neutral-600 dark:text-neutral-300">
          I'm looking for a 6-month PFE internship starting February 2027, in
          Morocco, France or internationally. If you're building with LLMs, RAG
          or NLP, I'd love to hear from you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-600"
        >
          <MailIcon className="h-4 w-4" />
          {profile.email}
        </a>

        <div className="mt-6 flex items-center justify-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-lg text-neutral-600 transition-colors hover:bg-black/5 hover:text-brand dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-lg text-neutral-600 transition-colors hover:bg-black/5 hover:text-brand dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </Section>
  )
}
