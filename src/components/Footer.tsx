import { profile } from '../data/profile'

const PORTFOLIO_REPO = 'https://github.com/mohaasdt/portfolio'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-black/5 px-4 py-8 sm:px-6 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-neutral-500">
          © {year} {profile.name}
        </p>
        <p className="font-mono text-xs text-neutral-400">
          Built with React, Vite and Tailwind ·{' '}
          <a
            href={PORTFOLIO_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-brand hover:underline dark:hover:text-brand-light"
          >
            source
          </a>
        </p>
      </div>
    </footer>
  )
}
