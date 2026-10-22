import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/types'
import { Badge } from './Badge'
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from './icons'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const shownStack = project.stack.slice(0, featured ? 6 : 4)
  const extra = project.stack.length - shownStack.length

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand/50 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-brand-light/40">
      {/* Categories + in-progress tag */}
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        {project.categories.map((cat) => (
          <Badge key={cat} label={cat} />
        ))}
        {project.inProgress && (
          <span className="inline-block rounded-md border border-slate-300 px-2 py-0.5 text-xs text-slate-500 dark:border-white/20 dark:text-slate-400">
            In progress
          </span>
        )}
      </div>

      <h3 className={`font-semibold tracking-tight ${featured ? 'text-xl' : 'text-lg'}`}>
        {project.title}
      </h3>
      <p
        className={`mt-2 leading-relaxed text-slate-600 dark:text-slate-300 ${
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
          <span className="text-xs text-slate-400">+{extra}</span>
        )}
      </div>

      {/* Links */}
      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 dark:border-white/10">
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
          className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-navy dark:text-brand-light"
        >
          Details
          <ArrowRightIcon className="h-4 w-4" />
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
      className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-brand dark:text-slate-400 dark:hover:text-brand-light"
    >
      {children}
    </a>
  )
}
