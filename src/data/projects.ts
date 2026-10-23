import type { Project } from './types'

// Team projects are presented without naming teammates (same rule as the CV).
// Detail fields come from each GitHub README; numbers appear only where the
// README states them (no invented figures).
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
    problem:
      'Question answering over English, text-based PDFs where every answer must trace back to its source pages — and the system should abstain when the evidence simply is not there.',
    solution:
      'Three comparable modes: classical RAG (retrieve and generate), verified RAG (claim-level checking with NLI) and agentic verified RAG (bounded extra retrieval when evidence is insufficient, otherwise abstention). Hybrid dense + BM25 retrieval with optional cross-encoder reranking, local OCR for scanned pages, a guarded local LLM, and page-level [S1]-style citations.',
    architecture: [
      'PDF + OCR',
      'Chunk (220w / 40 overlap)',
      'Embed (BGE) + BM25',
      'Rerank (cross-encoder)',
      'Generate + cite',
      'Verify claims (NLI)',
      'Abstain / re-retrieve',
    ],
    whatIBuilt: [
      'Document ingestion with provenance-preserving chunking (220-word chunks, 40-word overlap).',
      'Hybrid retrieval (dense BGE + FAISS + BM25) with optional cross-encoder reranking, evaluated with Recall@k.',
      'Citation-mapped generation plus claim extraction and NLI verification that strips unsupported claims into a partial answer or an abstention.',
      'Bounded agentic re-retrieval and an A/B/C evaluation harness, with a V1-vs-V2 comparison tab.',
      'FastAPI backend, React frontend (and a Streamlit UI), Docker, and CI workflows (end-to-end + smoke tests).',
    ],
    resultsAndLimits: [
      'Citation precision rose from 0% (V1) to 100% (V2); verification accuracy from 33.3% to 66.7%.',
      'Safe abstention on unsupported questions: 100%; recoverable-claim recovery: 90%.',
      'Retrieval: dense BGE 66.1% Recall@5 on full QASPER; on a matched 50-question sample, hybrid + reranker 74% vs 70% for dense.',
      'Limits: English text-based PDFs only; verification accuracy still 66.7%; metrics come from small controlled sets; the hosted demo is CPU-only with temporary workspaces.',
    ],
  },
  {
    slug: 'wattson-advisor',
    title: 'Wattson Advisor',
    featured: true,
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
    problem:
      'Pre-sales for solar PV and EV charging is slow and manual: qualifying a customer, answering technical questions with trustworthy sources, and sizing an installation all require an expert.',
    solution:
      'An AI pre-sales assistant that qualifies customer needs (residential, condominium, commercial), answers with RAG and cited sources, extracts data from electricity bills, and delegates sizing to a deterministic Python engine (PVGIS) instead of letting the LLM compute the numbers.',
    architecture: [
      'Qualify need',
      'RAG + cited answer',
      'Bill extraction',
      'Deterministic sizing (PVGIS)',
      'Recommendation',
    ],
    whatIBuilt: [
      'A needs-qualification flow across residential, condominium and commercial segments.',
      'RAG over product and technical documents with cited sources (pgvector + sentence-transformers, local LLM via Ollama).',
      'Electricity-bill data extraction feeding the sizing step.',
      'A deterministic Python sizing engine (PVGIS) kept separate from the LLM for reliable numbers.',
      'FastAPI backend, React frontend, PostgreSQL/pgvector, Docker.',
    ],
    resultsAndLimits: [
      'Built during a PFA internship at Wattson Energy & Mobility.',
      'No public demo or repository yet.',
    ],
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
    problem:
      'Small language models rarely answer Big Data course questions in a fixed revision format — the base model almost never produced the required Definition / Example / Pitfall structure.',
    solution:
      'QLoRA fine-tuning of Qwen2.5-1.5B-Instruct (4-bit NF4, LoRA rank 16) so it reliably produces structured revision sheets, with a base-vs-fine-tuned evaluation and a Gradio demo.',
    architecture: [
      'Course Q&A dataset (533 pairs)',
      'QLoRA fine-tune (Qwen2.5-1.5B)',
      'Base vs fine-tuned eval',
      'Gradio demo',
    ],
    whatIBuilt: [
      'A 533-pair dataset in Definition / Example / Pitfall format, built from a Big Data course (Spark, Kafka, Hadoop, data architectures) with paraphrased and cross-cutting variants.',
      'QLoRA training with peft and the transformers Trainer (avoiding trl/datasets to work around a Windows Smart App Control block).',
      'A five-script pipeline (data prep, baseline eval, training, comparison, Gradio demo), shared code in common.py and settings in config.py.',
      'A dependency-free ROUGE-L implementation and a format-compliance check.',
    ],
    resultsAndLimits: [
      'On 100 test questions: format compliance 2% → 100%; mean ROUGE-L 0.173 → 0.253 (about +46%).',
      'Limits: training needs a GPU; the dataset comes from a single course; evaluation is on 100 questions with a homemade ROUGE-L.',
    ],
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
    problem:
      'Keyword-based job matching is inefficient; the project replaces it with multilingual semantic search and automated resume parsing.',
    solution:
      'A job-recommendation platform: a daily Airflow ETL scrapes several sources into a Medallion architecture, CVs are parsed asynchronously through Kafka workers into pgvector embeddings, and a FastAPI service returns recommendations with hybrid scoring.',
    architecture: [
      'Scrape (Adzuna / ReKrute / Emploi-Public)',
      'Airflow ETL (Bronze → Silver → Gold)',
      'CV upload → Kafka worker',
      'Embed (pgvector) + Redis status',
      'Hybrid scoring',
      'FastAPI recommendations',
    ],
    whatIBuilt: [
      'A daily Airflow ETL (06:00 UTC) over a Medallion architecture: MongoDB bronze, Python silver, PostgreSQL star-schema gold (1 fact + 10 dimension tables).',
      'Multilingual semantic search (sentence-transformers MiniLM + pgvector) across French, Arabic and English.',
      'Hybrid scoring from seven weighted factors (vector similarity 0.55, tech overlap 0.20, seniority 0.08, …) summing to 1.0.',
      'Async CV processing: upload to MinIO → Kafka topic → worker parses and writes embeddings, with status tracked in Redis.',
      'Deployed as 13 Docker containers, with a Power BI market-analytics report.',
    ],
    resultsAndLimits: [
      'A working prototype (final engineering project); no accuracy or latency metrics are reported.',
      'Limits: scraping/OCR sources can be fragile, and the scoring weights are not yet validated.',
    ],
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
    problem:
      'Moroccan Darija has strong regional variation but is often treated as one variety; this system distinguishes Oujdi (Eastern) text from general Darija across Arabic, Latin and mixed scripts.',
    solution:
      'A binary text classifier comparing TF-IDF + logistic regression, a BiLSTM, and a LoRA-fine-tuned multilingual DistilBERT (best), served through a Flask API with a React UI.',
    architecture: [
      'Corpus (100k balanced)',
      'Clean + script handling',
      'TF-IDF / BiLSTM / DistilBERT+LoRA',
      'Flask API (/classify)',
      'React UI',
    ],
    whatIBuilt: [
      'A 100,000-sample balanced dataset (50k Oujdi / 50k Darija), the Oujdi part drawn from a 220k-line corpus built by the team.',
      'Arabic / Latin / mixed-script cleaning and handling.',
      'Three modeling approaches with Hugging Face Transformers and PEFT/LoRA.',
      'A Flask API (/health, /classify returning class, confidence and probabilities) behind a React/Vite frontend.',
    ],
    resultsAndLimits: [
      'Test accuracy: TF-IDF + LogReg 93.40%, BiLSTM 95.20%, DistilBERT + LoRA 97.59% (best).',
      'Limits: binary classification only; short or ambiguous text stays hard; metrics describe this dataset, not universal dialect recognition.',
    ],
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
    problem:
      'Manual classroom attendance is slow and error-prone; Attendify automates it on the desktop with face recognition.',
    solution:
      'A desktop app combining face detection and recognition, student management, attendance history with CSV export, admin/teacher roles, and a built-in assistant powered by local LLMs.',
    architecture: [
      'Enroll student + face',
      'Train recognizer',
      'Recognize from camera',
      'Record attendance + CSV',
      'Assistant (local LLM)',
    ],
    whatIBuilt: [
      'A face pipeline with OpenCV (Haar Cascade, LBPH) and dlib embeddings, with model training from enrolled students.',
      'Automatic attendance registration on recognition, with history and CSV export.',
      'A login system for administrators and teachers, backed by MySQL (students, attendance).',
      'An integrated assistant powered by local LLMs (Ollama).',
    ],
    resultsAndLimits: [
      'An academic desktop project; the README reports no accuracy or performance figures.',
    ],
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
    problem:
      'Going from code to a running Kubernetes workload usually means stitching together CI, image scanning, a registry, GitOps and monitoring; StackFlow packages that path as a local, self-service platform.',
    solution:
      'A React portal calls a FastAPI platform API that dispatches GitHub Actions: tests + Trivy scan, publish the image to GHCR by digest, a reviewed PR updates the staging overlay, and Argo CD syncs it to a kind cluster — with Prometheus/Grafana monitoring. Production sync stays manual.',
    architecture: [
      'Portal → FastAPI API',
      'GitHub Actions: test + Trivy scan',
      'Publish image to GHCR (by digest)',
      'PR updates overlay (Kustomize)',
      'Argo CD sync → Kubernetes',
      'Prometheus / Grafana',
    ],
    whatIBuilt: [
      'A platform API with a strict allowlist, idempotency, dispatch and audit logging.',
      'Kubernetes desired state as Kustomize base + staging/production overlays, under a constrained Argo CD project.',
      'Terraform + kind for explicit local cluster and Argo CD bootstrap.',
      'Production promotion that reuses the same tested image digest and requires an admin-reviewed PR (manual sync).',
      'Docker Compose for the portal, with an optional monitoring profile.',
    ],
    resultsAndLimits: [
      'A local MVP, not yet production-ready or verified end-to-end on a real cluster.',
      'Future work: GitHub OAuth/RBAC and full-cluster deployment testing.',
    ],
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
    problem:
      'Assigning supervisors and scheduling final-year defenses by hand is slow and conflict-prone for a department; this platform secures and automates the workflow.',
    solution:
      'A Spring Boot web app with role-based admin and supervisor workspaces: Excel import per track, automatic balanced supervisor assignment, conflict-checked defense scheduling, and PDF/Excel reports.',
    architecture: [
      'Excel import (per track)',
      'Balanced supervisor assignment',
      'Conflict-checked scheduling',
      'Publish schedules',
      'PDF / Excel export',
    ],
    whatIBuilt: [
      'A layered Spring Boot app (Thymeleaf → controllers → services → Spring Data JPA → MySQL), with business rules in the service layer for testability.',
      'Excel import for GI / ID / TDIA tracks (track inferred from the filename) with Apache POI, and PDF export via OpenPDF.',
      'Automatic balanced supervisor assignment plus conflict-checked scheduling with configurable dates, slots, breaks and daily capacity.',
      'Spring Security with CSRF protection and file-upload controls (.xlsx/.xls, max 5 MB); JUnit 5 tests with H2.',
    ],
    resultsAndLimits: [
      'An academic project (portfolio edition); production would still need TLS, backups, controlled migrations and a full security review.',
      'No performance or usage metrics are reported.',
    ],
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
    problem:
      'Predict the winner of the 2025 Africa Cup of Nations from historical football data.',
    solution:
      'An end-to-end ML pipeline that fuses five data sources, engineers features, trains a tuned Random Forest, and runs a Monte Carlo tournament simulation to estimate win probabilities.',
    architecture: [
      'Clean + fuse 5 sources',
      'Feature engineering (20)',
      'Random Forest + tuning',
      'Monte Carlo simulation (1000 runs)',
      'Win probabilities',
    ],
    whatIBuilt: [
      'A cleaned dataset of 8,297 matches with 20 engineered features (FIFA-ranking gap, recent form, CAN win rate, head-to-head, fatigue, titles, composite strength).',
      'A Random Forest classifier with hyperparameter tuning.',
      'A 1,000-run Monte Carlo tournament simulation producing winner probabilities.',
      'Delivered as a Jupyter notebook with Pandas, NumPy, scikit-learn, Matplotlib and Seaborn.',
    ],
    resultsAndLimits: [
      'Simulated win probabilities: Egypt 20%, Ivory Coast 16%, Nigeria 13%, Algeria 13%, Morocco 13%.',
      'Limits: no classification accuracy/validation reported; the "minimal overfitting" claim is not quantified; predictions are not back-tested against actual results.',
    ],
  },
]

/** Lookup helper used by the project detail page. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
