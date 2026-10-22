import { useState } from 'react'
import { profile } from '../data/profile'
import type { Theme } from '../hooks/useTheme'
import { CloseIcon, DownloadIcon, MenuIcon } from './icons'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

interface NavbarProps {
  theme: Theme
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-paper/80 backdrop-blur-md dark:border-white/10 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand font-mono text-sm text-white">
            MO
          </span>
          <span className="hidden sm:inline">Mohammed Oulhadj</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 transition-colors hover:text-brand dark:text-neutral-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={profile.cvPath}
            download
            className="hidden items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brand-600 sm:inline-flex"
          >
            <DownloadIcon className="h-4 w-4" />
            CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg text-neutral-600 hover:bg-black/5 md:hidden dark:text-neutral-300 dark:hover:bg-white/10"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/5 px-4 py-3 md:hidden dark:border-white/10">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-neutral-700 hover:bg-black/5 dark:text-neutral-200 dark:hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cvPath}
              download
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-2 text-sm font-medium text-white hover:bg-brand-600"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
