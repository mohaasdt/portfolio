import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import type { Category } from '../data/types'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

// 'All' + the categories used across the projects.
const FILTERS: Array<Category | 'All'> = [
  'All',
  'LLM & RAG',
  'NLP',
  'Computer Vision',
  'DevOps',
  'Web',
  'Data',
]

export function Projects() {
  const [active, setActive] = useState<Category | 'All'>('All')

  const visible = useMemo(
    () =>
      active === 'All'
        ? projects
        : projects.filter((p) => p.categories.includes(active)),
    [active],
  )

  const featured = visible.filter((p) => p.featured)
  const others = visible.filter((p) => !p.featured)

  return (
    <Section id="projects" kicker="What I build" title="Projects">
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((filter) => {
          const isActive = filter === active
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={isActive}
              className={`rounded-full px-3.5 py-1.5 font-mono text-xs transition-colors ${
                isActive
                  ? 'bg-brand text-white'
                  : 'bg-black/5 text-neutral-600 hover:bg-black/10 dark:bg-white/10 dark:text-neutral-300 dark:hover:bg-white/20'
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      {/* Featured projects: larger cards */}
      {featured.length > 0 && (
        <div className="mb-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      )}

      {/* Other projects */}
      {others.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}

      {visible.length === 0 && (
        <p className="text-sm text-neutral-500">No projects in this category yet.</p>
      )}
    </Section>
  )
}
