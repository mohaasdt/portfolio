import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  kicker: string
  title: string
  children: ReactNode
  /** Optional alternate background to separate sections visually. */
  muted?: boolean
}

/** A page section with a consistent heading (kicker + title). */
export function Section({ id, kicker, title, children, muted = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 px-4 py-16 sm:px-6 lg:py-20 ${
        muted ? 'bg-black/[0.02] dark:bg-white/[0.02]' : ''
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {kicker}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
