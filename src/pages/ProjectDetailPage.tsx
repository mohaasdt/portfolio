import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram'
import { Badge } from '../components/Badge'
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  GitHubIcon,
} from '../components/icons'
import { getProjectBySlug } from '../data/projects'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 pt-32 pb-24 text-center sm:px-6">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link
          to="/#projects"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand dark:text-brand-light"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to projects
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-brand dark:hover:text-brand-light"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to projects
      </Link>

      {/* Header */}
      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.categories.map((cat) => (
            <Badge key={cat} label={cat} accent={cat === 'LLM & RAG'} />
          ))}
          {project.inProgress && (
            <span className="inline-block rounded-md bg-amber-500/10 px-2 py-0.5 font-mono text-xs text-amber-600 dark:text-amber-400">
              In progress
            </span>
          )}
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300">
          {project.summary}
        </p>

        {/* Links */}
        <div className="mt-5 flex flex-wrap gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-brand hover:text-brand dark:border-neutral-700 dark:hover:border-brand-light dark:hover:text-brand-light"
            >
              <GitHubIcon className="h-4 w-4" />
              View code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Live demo
            </a>
          )}
        </div>
      </header>

      <div className="mt-10 space-y-10">
        {project.problem && (
          <DetailBlock title="Problem">
            <p className="text-neutral-700 dark:text-neutral-200">
              {project.problem}
            </p>
          </DetailBlock>
        )}

        {project.solution && (
          <DetailBlock title="Solution">
            <p className="text-neutral-700 dark:text-neutral-200">
              {project.solution}
            </p>
          </DetailBlock>
        )}

        {project.architecture && project.architecture.length > 0 && (
          <DetailBlock title="Architecture">
            <ArchitectureDiagram steps={project.architecture} />
          </DetailBlock>
        )}

        {project.whatIBuilt && project.whatIBuilt.length > 0 && (
          <DetailBlock title="What I built">
            <ul className="space-y-2">
              {project.whatIBuilt.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-neutral-700 dark:text-neutral-200"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand dark:bg-brand-light" />
                  {point}
                </li>
              ))}
            </ul>
          </DetailBlock>
        )}

        {project.resultsAndLimits && project.resultsAndLimits.length > 0 && (
          <DetailBlock title="Results & limits">
            <ul className="space-y-2">
              {project.resultsAndLimits.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-neutral-700 dark:text-neutral-200"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </DetailBlock>
        )}

        <DetailBlock title="Stack">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>
        </DetailBlock>
      </div>
    </article>
  )
}

interface DetailBlockProps {
  title: string
  children: ReactNode
}

function DetailBlock({ title, children }: DetailBlockProps) {
  return (
    <section>
      <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  )
}
