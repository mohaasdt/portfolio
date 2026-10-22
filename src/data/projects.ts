import type { Project } from './types'

// Team projects are presented without naming teammates (same rule as the CV).
// Detail fields (problem, solution, whatIBuilt, resultsAndLimits) are filled in
// step 5 from each GitHub README — with only the numbers written there.
export const projects: Project[] = [
  {
    slug: 'agentic-document-intelligence',
    title: 'Agentic Document Intelligence',
    featured: true,
    categories: ['LLM & RAG'],
    summary:
      'Evidence-grounded question answering over PDFs, comparing classical, verified (NLI claim-checking) and agentic RAG that retrieves more when evidence is missing — otherwise abstains.',
    stack: [
      'Python',
      'FAISS',
      'sentence-transformers',
      'PyMuPDF',
      'Tesseract',
      'Ollama',
      'FastAPI',
      'React',
      'Docker',
      'GitHub Actions',
    ],
    links: {
      github: 'https://github.com/mohaasdt/Agentic-Document-Intelligence',
      demo: 'https://agentic-document-intelligence.vercel.app/',
    },
  },
  {
    slug: 'wattson-advisor',
    title: 'Wattson Advisor',
    featured: true,
    inProgress: true,
    categories: ['LLM & RAG'],
    summary:
      'AI pre-sales assistant for solar PV and EV charging: qualifies customer needs, answers with RAG and cited sources, extracts electricity-bill data, and delegates sizing to a deterministic Python engine (PVGIS).',
    stack: [
      'Python',
      'FastAPI',
      'React',
      'PostgreSQL/pgvector',
      'sentence-transformers',
      'Ollama',
      'Docker',
    ],
    links: {},
  },
  {
    slug: 'bigdata-assistant',
    title: 'BigData Assistant',
    featured: true,
    categories: ['LLM & RAG'],
    summary:
      'QLoRA fine-tuning of Qwen2.5-1.5B-Instruct to turn any Big Data course question into a structured revision sheet (Definition / Example / Pitfall), with base vs fine-tuned evaluation and a Gradio demo.',
    stack: ['Python', 'Transformers', 'PEFT', 'bitsandbytes', 'Gradio'],
    links: {
      github: 'https://github.com/mohaasdt/BigData-Assistant',
    },
  },
  {
    slug: 'findjob',
    title: 'FindJob',
    featured: false,
    categories: ['LLM & RAG', 'Data'],
    summary:
      'Job recommendation platform with multilingual semantic search (CV ↔ job offers), hybrid scoring, multi-source scraping and an Airflow ETL over a Medallion architecture with Kafka and Redis.',
    stack: [
      'Python',
      'FastAPI',
      'React',
      'PostgreSQL/pgvector',
      'sentence-transformers',
      'Kafka',
      'Airflow',
      'Redis',
      'Docker',
    ],
    links: {
      github: 'https://github.com/isMarouaneBen/FindJob',
    },
  },
  {
    slug: 'oujdi-dialect-classifier',
    title: 'Oujdi Dialect Classifier',
    featured: false,
    categories: ['NLP'],
    summary:
      'End-to-end NLP system classifying Oujdi vs standard Moroccan Darija (Arabic, Latin or mixed script), comparing TF-IDF + logistic regression, BiLSTM and a LoRA-fine-tuned multilingual DistilBERT.',
    stack: [
      'Python',
      'Transformers',
      'PEFT/LoRA',
      'TensorFlow/Keras',
      'Scikit-learn',
      'Flask',
      'React',
    ],
    links: {
      github: 'https://github.com/mohaasdt/oujdi-dialect-classifier',
    },
  },
  {
    slug: 'attendify',
    title: 'Attendify',
    featured: false,
    categories: ['Computer Vision', 'LLM & RAG'],
    summary:
      'Desktop attendance system using face recognition (Haar Cascade, LBPH, then dlib ResNet embeddings), with history, CSV export, roles and a built-in assistant powered by local LLMs.',
    stack: ['Python', 'OpenCV', 'dlib', 'Ollama', 'Tkinter', 'MySQL'],
    links: {
      github: 'https://github.com/mohaasdt/attendify-face-recognition',
    },
  },
  {
    slug: 'stackflow-gitops',
    title: 'StackFlow GitOps',
    featured: false,
    categories: ['DevOps'],
    summary:
      'Self-service GitOps delivery platform (local MVP): tested and scanned images published to GHCR, reviewed staging → production promotion with Argo CD on Kubernetes, Terraform bootstrap and Prometheus/Grafana monitoring.',
    stack: [
      'FastAPI',
      'React',
      'TypeScript',
      'GitHub Actions',
      'Docker',
      'Kubernetes',
      'Argo CD',
      'Kustomize',
      'Terraform',
      'Prometheus',
      'Grafana',
    ],
    links: {
      github: 'https://github.com/mohaasdt/stackflow-gitops',
    },
  },
  {
    slug: 'pfe-management-platform',
    title: 'PFE Management Platform',
    featured: false,
    categories: ['Web', 'NLP'],
    summary:
      'Academic platform for ENSAH: balanced supervisor assignment with an NLP keyword/synonym score, constraint-based defense scheduling, Excel/PDF workflows and role-based access.',
    stack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'Thymeleaf',
      'MySQL',
      'JUnit 5',
      'Docker',
      'GitHub Actions',
    ],
    links: {
      github: 'https://github.com/mohaasdt/pfe-management-platform',
    },
  },
  {
    slug: 'can-2025-prediction',
    title: 'CAN 2025 Prediction',
    featured: false,
    categories: ['Data'],
    summary:
      'End-to-end ML pipeline merging five data sources with feature engineering (FIFA gap, form, head-to-head, fatigue), a tuned Random Forest and a Monte Carlo tournament simulation.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    links: {
      github: 'https://github.com/mohaasdt/can-2025-prediction',
    },
  },
]
