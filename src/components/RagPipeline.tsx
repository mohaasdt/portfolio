// A small "what I do" signal: a RAG pipeline where a teal highlight travels
// step by step across the nodes. Pure CSS (see .rag-node in index.css), so it
// stays light and respects prefers-reduced-motion.
const STEPS = ['Question', 'Retrieve', 'Rerank', 'Generate', 'Cite']

export function RagPipeline() {
  return (
    <div className="inline-block rounded-xl border border-black/5 bg-white/60 p-3 dark:border-white/10 dark:bg-white/5">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
        RAG pipeline
      </p>
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
        {STEPS.map((step, i) => (
          <div key={step} className="flex items-center gap-1.5">
            <span
              className="rag-node rounded-md border px-2.5 py-1 font-mono text-xs transition-colors"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              {step}
            </span>
            {i < STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className="font-mono text-sm text-neutral-300 dark:text-neutral-600"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
