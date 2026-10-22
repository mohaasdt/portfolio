// A project's architecture as a simple, data-driven flow of stages.
interface ArchitectureDiagramProps {
  steps: string[]
}

export function ArchitectureDiagram({ steps }: ArchitectureDiagramProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]">
            <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-brand/10 text-[11px] font-semibold text-brand dark:bg-brand-light/15 dark:text-brand-light">
              {i + 1}
            </span>
            <span className="text-sm text-slate-700 dark:text-slate-200">
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
