interface BadgeProps {
  label: string
  /** Turquoise variant, used only for the "LLM & RAG" tag (per the brief). */
  accent?: boolean
}

export function Badge({ label, accent = false }: BadgeProps) {
  const base =
    'inline-block rounded-md px-2 py-0.5 font-mono text-xs whitespace-nowrap'
  const styles = accent
    ? 'bg-accent/10 text-teal-700 dark:text-accent'
    : 'bg-black/5 text-neutral-600 dark:bg-white/10 dark:text-neutral-300'
  return <span className={`${base} ${styles}`}>{label}</span>
}
