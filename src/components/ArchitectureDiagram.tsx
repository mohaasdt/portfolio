// Renders a project's architecture as a simple, data-driven flow of stages.
// No images to maintain: the stages live in projects.ts.
interface ArchitectureDiagramProps {
  steps: string[]
}

export function ArchitectureDiagram({ steps }: ArchitectureDiagramProps) {
  return (
    <div className="flex flex-wrap items-stretch gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-stretch gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 px-3 py-2 dark:border-white/10 dark:bg-white/5">
            <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-brand/10 font-mono text-[10px] font-semibold text-brand dark:bg-brand-light/15 dark:text-brand-light">
              {i + 1}
            </span>
            <span className="font-mono text-xs text-neutral-700 dark:text-neutral-200">
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="flex items-center font-mono text-neutral-300 dark:text-neutral-600"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
