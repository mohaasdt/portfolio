import type { ReactNode } from 'react'
import { profile } from '../data/profile'
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from './icons'

export function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-16 px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:pb-28"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.5fr_1fr]">
        {/* Left: text */}
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {profile.badge}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-brand dark:text-brand-light">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy"
            >
              See my projects
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-slate-200 dark:hover:border-brand-light dark:hover:text-brand-light"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-1">
            <SocialLink href={profile.github} label="GitHub">
              <GitHubIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <LinkedInIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <MailIcon className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>

        {/* Right: photo (placeholder until public/photo.jpeg is added) */}
        <div className="justify-self-center md:justify-self-end">
          <div className="relative aspect-square w-52 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:w-60 lg:w-64 dark:border-white/10 dark:bg-white/5">
            {/* When public/photo.jpeg is ready, replace the block below with:
            <img
              src={profile.photoPath}
              alt="Portrait of Mohammed Oulhadj"
              className="h-full w-full object-cover"
            />
            */}
            <div className="grid h-full w-full place-items-center">
              <span className="text-5xl font-bold text-brand/30 dark:text-brand-light/40">
                MO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SocialLinkProps {
  href: string
  label: string
  children: ReactNode
}

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-brand dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-brand-light"
    >
      {children}
    </a>
  )
}
