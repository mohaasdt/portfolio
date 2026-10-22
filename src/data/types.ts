// Shared "shapes" for all the site content.
// Editing content means editing the data files below — never the components.

export type Category =
  | 'LLM & RAG'
  | 'NLP'
  | 'Computer Vision'
  | 'DevOps'
  | 'Web'
  | 'Data'

export interface ProjectLinks {
  github?: string
  demo?: string
}

export interface Project {
  /** URL-friendly id, used for the detail page: /projects/<slug> */
  slug: string
  title: string
  /** One of the 3 flagship projects shown in large cards. */
  featured: boolean
  /** Shows an "In progress" badge and hides missing links. */
  inProgress?: boolean
  categories: Category[]
  /** One sentence, problem -> solution, shown on the card (English). */
  summary: string
  /** 3 to 5 key technologies shown as badges. */
  stack: string[]
  links: ProjectLinks

  // --- Detail page fields (from each GitHub README; numbers only if written there) ---
  problem?: string
  solution?: string
  /** Ordered pipeline stages, rendered as a simple flow diagram. */
  architecture?: string[]
  whatIBuilt?: string[]
  resultsAndLimits?: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  location: string
  period: string
  description: string
}

export interface SkillGroup {
  name: string
  skills: string[]
}

export interface LanguageSkill {
  name: string
  level: string
}

export interface Profile {
  name: string
  title: string
  tagline: string
  badge: string
  email: string
  github: string
  linkedin: string
  /** Paths are relative to /public */
  cvPath: string
  photoPath: string
  about: string
  education: {
    school: string
    program: string
    period: string
  }
  languages: LanguageSkill[]
}
