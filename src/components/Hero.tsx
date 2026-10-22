import type { ReactNode } from 'react'
import { profile } from '../data/profile'
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from './icons'
import { RagPipeline } from './RagPipeline'

export function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-20 px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.4fr_1fr] lg:gap-16">
        {/* Left: text */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-teal-700 dark:text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {profile.badge}
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 font-mono text-lg text-brand dark:text-brand-light">
            {profile.title}
          </p>
          <p className="mt-5 max-w-xl text-neutral-600 dark:text-neutral-300">
            {profile.tagline}
          </p>

          <div className="mt-7">
            <RagPipeline />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              See my projects
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:border-brand hover:text-brand dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-brand-light dark:hover:text-brand-light"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2">
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
          <div className="relative aspect-square w-56 overflow-hidden rounded-3xl bg-gradient-to-br from-brand/15 to-accent/15 ring-1 ring-black/5 sm:w-64 lg:w-72 dark:ring-white/10">
            {/* When public/photo.jpeg is ready, replace the block below with:
            <img
              src={profile.photoPath}
              alt="Portrait of Mohammed Oulhadj"
              className="h-full w-full object-cover"
            />
            */}
            <div className="grid h-full w-full place-items-center text-center">
              <div>
                <span className="font-mono text-5xl font-bold text-brand/50 dark:text-brand-light/60">
                  MO
                </span>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                  photo.jpeg
                </p>
              </div>
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
      className="grid h-10 w-10 place-items-center rounded-lg text-neutral-600 transition-colors hover:bg-black/5 hover:text-brand dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
    >
      {children}
    </a>
  )
}
