import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  kicker: string
  title: string
  children: ReactNode
  /** Optional light background to separate sections visually. */
  muted?: boolean
}

/** A page section with a consistent heading (kicker + title). */
export function Section({ id, kicker, title, children, muted = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 px-4 py-20 sm:px-6 ${
        muted ? 'bg-slate-50 dark:bg-white/[0.03]' : ''
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand dark:text-brand-light">
          {kicker}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
