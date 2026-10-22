interface BadgeProps {
  label: string
}

/** A small, neutral tag used for categories and tech stack. */
export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300">
      {label}
    </span>
  )
}
