import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/types'
import { Badge } from './Badge'
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  GitHubIcon,
} from './icons'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  // Show only the first few stack items on the card to keep it tidy.
  const shownStack = project.stack.slice(0, featured ? 6 : 4)
  const extra = project.stack.length - shownStack.length

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-neutral-900 ${
        featured ? 'sm:p-6' : ''
      }`}
    >
      {/* Categories + in-progress badge */}
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        {project.categories.map((cat) => (
          <Badge key={cat} label={cat} accent={cat === 'LLM & RAG'} />
        ))}
        {project.inProgress && (
          <span className="inline-block rounded-md bg-amber-500/10 px-2 py-0.5 font-mono text-xs text-amber-600 dark:text-amber-400">
            In progress
          </span>
        )}
      </div>

      <h3
        className={`font-bold tracking-tight ${featured ? 'text-xl' : 'text-lg'}`}
      >
        {project.title}
      </h3>
      <p
        className={`mt-2 text-neutral-600 dark:text-neutral-300 ${
          featured ? 'text-base' : 'text-sm'
        }`}
      >
        {project.summary}
      </p>

      {/* Stack */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {shownStack.map((tech) => (
          <Badge key={tech} label={tech} />
        ))}
        {extra > 0 && (
          <span className="font-mono text-xs text-neutral-400">+{extra}</span>
        )}
      </div>

      {/* Links */}
      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-black/5 pt-4 dark:border-white/10">
        {project.links.github && (
          <CardLink href={project.links.github}>
            <GitHubIcon className="h-4 w-4" />
            Code
          </CardLink>
        )}
        {project.links.demo && (
          <CardLink href={project.links.demo}>
            <ExternalLinkIcon className="h-4 w-4" />
            Demo
          </CardLink>
        )}
        <Link
          to={`/projects/${project.slug}`}
          className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-600 dark:text-brand-light"
        >
          Details
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  )
}

interface CardLinkProps {
  href: string
  children: ReactNode
}

function CardLink({ href, children }: CardLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-brand dark:text-neutral-300 dark:hover:text-white"
    >
      {children}
    </a>
  )
}
