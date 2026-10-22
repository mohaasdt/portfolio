# Cahier des charges — Portfolio de Mohammed OULHADJ

*Préparé le 2026-10-22. À donner à Claude Code dans VS Code, dans un nouveau dossier `portfolio`.*

---

## 0. Consignes pour Claude (dans VS Code)

- Réponds-moi **en français** dans la conversation. Le **contenu du site** est en **anglais** (voir §2).
- Je veux **apprendre en faisant** : avance **étape par étape**. Avant chaque étape, explique ce que tu vas faire et pourquoi. Après, explique le code en quelques lignes. Laisse-moi lancer moi-même les commandes quand c'est utile (`npm install`, `npm run dev`, `git push`).
- Fais des **petits commits Git** clairs à chaque étape.
- **Ne recopie pas** le portfolio de mon camarade (marouane-benhaddou.vercel.app). Il est sombre, minimaliste, avec une photo en noir et blanc, et il n'a **pas de section Projets**. Le mien doit être **centré sur les projets**.
- **Pas de chiffres inventés** (pas de « +30 % de précision » qui ne vient pas de mes dépôts).
- Utilise uniquement des outils **gratuits**.

---

## 1. Objectif du site

Montrer en moins de 30 secondes à un recruteur que je suis un **AI Engineer junior (LLM, RAG, NLP)** qui **construit des projets complets**, et lui donner envie de :
1. ouvrir mes projets (GitHub, démo) ;
2. télécharger mon CV ;
3. me contacter.

**Cible** : recruteurs et encadrants de **stage PFE (6 mois, à partir de février 2027)**, au Maroc, en France et à l'international.

---

## 2. Choix techniques

| Sujet | Choix | Pourquoi |
|---|---|---|
| Framework | **React + Vite + TypeScript** | Je connais React ; TypeScript est sur mon CV |
| Style | **Tailwind CSS** | Rapide, cohérent, facile à lire |
| Animations | Légères (CSS ou Framer Motion) | Pas d'effet lourd qui ralentit le site |
| Données | **Un fichier `src/data/` par contenu** (`projects.ts`, `experience.ts`, `skills.ts`, `profile.ts`) | Pour ajouter un projet sans toucher au code des composants |
| Hébergement | **Vercel** (gratuit), relié au dépôt GitHub `mohaasdt/portfolio` | Déploiement automatique à chaque push |
| Langue | **Anglais** | Comme mon README GitHub ; lisible partout |

**Bonus (plus tard, pas dans la V1)** : version française avec un bouton FR / EN.

---

## 3. Structure du site (une seule page + pages projet)

Menu fixe en haut : **Projects · Experience · Skills · About · Contact** + bouton clair / sombre + bouton **CV**.

### 3.1 Hero (haut de page)
- Nom : **Mohammed Oulhadj**
- Titre : **AI Engineer · LLM · RAG · NLP**
- Phrase : *Final-year AI engineering student building end-to-end generative AI systems: LLM assistants, RAG pipelines, fine-tuned models and the infrastructure to ship them.*
- Badge : **Open to a PFE internship · February 2027**
- Boutons : **See my projects** (va vers la section Projets) · **Download CV** (PDF) · icônes GitHub, LinkedIn, Email
- Photo : `photo.jpeg` (fournie), **en couleur**, cadre arrondi.
- Petit plus qui me distingue : à côté du titre, une **animation de pipeline RAG** (Question → Retrieve → Rerank → Generate → Cite) qui s'illumine étape par étape. Simple, en SVG/CSS.

### 3.2 Projects (section principale, juste après le Hero)
- **Filtres** en haut : All · LLM & RAG · NLP · Computer Vision · DevOps · Web
- **Grille de cartes**. Chaque carte contient : titre, une phrase « problème → solution », 3 à 5 badges de technologies, liens **GitHub** / **Demo** / **Details**.
- Les 3 projets phares en **grandes cartes** en haut : Agentic Document Intelligence, Wattson Advisor, BigData Assistant.
- **Page détail** de chaque projet (`/projects/<slug>`), toujours avec le même plan :
  1. **Problem** : quel problème ?
  2. **Solution** : ce que fait le système
  3. **Architecture** : un schéma (SVG simple ou Mermaid)
  4. **What I built** : les points techniques importants
  5. **Results & limits** : ce qui marche et ce qui ne marche pas encore (honnête)
  6. **Stack** + liens

### 3.3 Experience
Frise verticale (timeline) :
- **Wattson Energy & Mobility** — AI Engineer Intern (PFA) · Casablanca (remote) · Jul.–Aug. 2026 · projet Wattson Advisor
- **Majal Berkane SDL** — Web Developer Intern · Berkane · Jul.–Aug. 2025 · module RH de gestion des pointages (Laravel, MySQL, Chart.js)

### 3.4 Skills
Groupes en étiquettes (pas de barres de pourcentage) :
- **LLM & RAG** : Qwen, Llama, Mistral, Ollama, Agentic RAG, sentence-transformers, BGE, FAISS, pgvector, BM25, reranking, NLI, LoRA / QLoRA (PEFT), prompt engineering, Gradio
- **NLP** : Hugging Face Transformers, DistilBERT, BiLSTM, TF-IDF, text classification, semantic similarity, OCR, Arabic / Darija
- **ML, DL & Vision** : Scikit-learn, PyTorch, TensorFlow/Keras, OpenCV, dlib, Pandas, NumPy, Matplotlib, Seaborn
- **Data & Big Data** : Spark, Hadoop, Kafka, Airflow, Power BI, PostgreSQL, MySQL, MongoDB, Redis
- **Dev** : Python, Java (Spring Boot), JavaScript, TypeScript, React, FastAPI, Flask, Laravel, pytest, JUnit
- **DevOps & Cloud** : Docker, Kubernetes, Argo CD, Terraform, GitHub Actions (CI/CD), Prometheus, Grafana, Git, Linux, Azure

### 3.5 About + Education
- Court paragraphe : élève ingénieur en dernière année à l'**ENSA Al Hoceima**, filière **Transformation Digitale et IA (TDIA)**, 2022–2027 ; ce qui me motive (construire des assistants IA utiles, fiables, avec sources) ; ouvert à l'international.
- Langues : Arabic (native), French (B2, TCF), English (fluent).

### 3.6 Contact
- Titre accrocheur + email (`oulhadjmohamed62@gmail.com`), LinkedIn, GitHub.
- Pas de formulaire en V1 (un lien `mailto:` suffit).

### 3.7 Footer
© 2026 Mohammed Oulhadj · « Built with React, Vite and Tailwind » · lien vers le code source du portfolio.

---

## 4. Contenu des projets (à mettre dans `projects.ts`)

> Les projets d'équipe sont présentés sans nommer les coéquipiers (même règle que le CV). Mettre `featured: true` sur les 3 projets phares.

| # | Projet | Catégories | Résumé (en anglais sur le site) | Stack | Liens |
|---|---|---|---|---|---|
| 1 | **Agentic Document Intelligence** ⭐ | LLM & RAG | Evidence-grounded question answering over PDFs. Compares 3 modes: classical RAG, verified RAG (claim checking with NLI) and agentic RAG (extra retrieval when evidence is missing, otherwise abstains). Hybrid retrieval (BGE + FAISS + BM25), cross-encoder reranking, OCR, page-level citations, local LLM. | Python, FAISS, sentence-transformers, PyMuPDF, Tesseract, Ollama, FastAPI, React, Docker, GitHub Actions | [GitHub](https://github.com/mohaasdt/Agentic-Document-Intelligence) · [Demo](https://agentic-document-intelligence.vercel.app/) |
| 2 | **Wattson Advisor** ⭐ *(in progress)* | LLM & RAG | AI pre-sales assistant for solar PV and EV charging: qualifies customer needs (residential, condominium, commercial), answers with RAG and cited sources, extracts electricity-bill data, and delegates sizing to a deterministic Python engine (PVGIS). | Python, FastAPI, React, PostgreSQL/pgvector, sentence-transformers, Ollama, Docker | Pas encore de lien (badge « In progress ») |
| 3 | **BigData Assistant** ⭐ | LLM & RAG | QLoRA fine-tuning of Qwen2.5-1.5B-Instruct to turn any Big Data course question into a structured revision sheet (Definition / Example / Pitfall); base vs fine-tuned evaluation (format, ROUGE-L); Gradio demo. | Python, Transformers, PEFT, bitsandbytes, Gradio | [GitHub](https://github.com/mohaasdt/BigData-Assistant) |
| 4 | **FindJob** | LLM & RAG, Data | Job recommendation platform with multilingual semantic search (CV ↔ job offers), hybrid scoring (vector similarity, tech stack, seniority, preferences), multi-source scraping, Airflow ETL, Medallion architecture, Kafka and Redis. | Python, FastAPI, React, PostgreSQL/pgvector, sentence-transformers, Kafka, Airflow, Redis, Docker | [GitHub](https://github.com/isMarouaneBen/FindJob) (dépôt de l'équipe) |
| 5 | **Oujdi Dialect Classifier** | NLP | End-to-end NLP system classifying Oujdi vs standard Moroccan Darija (Arabic, Latin or mixed script). Compares TF-IDF + logistic regression, BiLSTM and multilingual DistilBERT fine-tuned with LoRA (best); Flask API + React UI. | Python, Transformers, PEFT/LoRA, TensorFlow/Keras, Scikit-learn, Flask, React | [GitHub](https://github.com/mohaasdt/oujdi-dialect-classifier) |
| 6 | **Attendify** | Computer Vision, LLM & RAG | Desktop attendance system using face recognition (Haar Cascade, LBPH, then dlib ResNet embeddings), with history, CSV export, admin/teacher roles and a built-in assistant powered by local LLMs (Ollama). | Python, OpenCV, dlib, Ollama, Tkinter, MySQL | [GitHub](https://github.com/mohaasdt/attendify-face-recognition) |
| 7 | **StackFlow GitOps** | DevOps | Self-service GitOps delivery platform (local MVP): tested and scanned images (Trivy), published to GHCR, reviewed staging → production promotion with Argo CD on Kubernetes, Terraform bootstrap, Prometheus/Grafana monitoring. | FastAPI, React, TypeScript, GitHub Actions, Docker, Kubernetes, Argo CD, Kustomize, Terraform, Prometheus, Grafana | [GitHub](https://github.com/mohaasdt/stackflow-gitops) |
| 8 | **PFE Management Platform** | Web, NLP | Academic platform for ENSAH: balanced supervisor assignment with an NLP keyword/synonym score, constraint-based defense scheduling (rooms, slots, juries), Excel/PDF workflows, role-based access. | Java 17, Spring Boot, Spring Security, Thymeleaf, MySQL, JUnit 5, Docker, GitHub Actions | [GitHub](https://github.com/mohaasdt/pfe-management-platform) |
| 9 | **CAN 2025 Prediction** | Data / ML | End-to-end ML pipeline merging five data sources, feature engineering (FIFA gap, form, head-to-head, fatigue), tuned Random Forest and Monte Carlo tournament simulation. | Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn | [GitHub](https://github.com/mohaasdt/can-2025-prediction) |

Pour les pages détail : lire le README de chaque dépôt GitHub pour remplir « Architecture », « What I built » et « Results & limits ». **Reprendre uniquement les chiffres qui sont écrits dans les README** (par exemple, les scores du README d'Agentic Document Intelligence), sans rien inventer.

---

## 5. Style visuel (différent de celui de Marouane)

- **Thème clair par défaut** (fond blanc cassé `#FAFAF7`, texte presque noir), **mode sombre** disponible avec un bouton.
- **Une couleur d'accent** : bleu `#1F4E8C` (la même que mon CV, pour la cohérence), avec un second accent léger (turquoise `#14B8A6`) seulement pour les badges « LLM / RAG ».
- **Typographie** : `Inter` pour le texte, `JetBrains Mono` pour les petits détails techniques (badges, dates). Polices Google Fonts.
- **Cartes** avec coins arrondis, ombre très légère, petit effet au survol (la carte monte de 2 px).
- **Photo en couleur** (pas noir et blanc).
- **Beaucoup d'espace**, sections bien séparées, lecture facile.
- **Responsive** : parfait sur téléphone (les recruteurs ouvrent souvent les liens sur mobile).
- **Accessibilité** : bons contrastes, textes alternatifs sur les images, navigation au clavier.

---

## 6. Fichiers à fournir (dans `public/`)

- `photo.jpeg` → copier depuis `mon ia/cv/photo.jpeg`
- `CV_Oulhadj_Mohammed.pdf` → copier depuis `mon ia/cv/CV_Oulhadj_Mohammed_PFE.pdf`
- Captures d'écran des projets (plus tard, si disponibles) → `public/projects/<slug>.png`
- `favicon` : initiales « MO »

---

## 7. Référencement et partage

- Titre de l'onglet : `Mohammed Oulhadj — AI Engineer (LLM, RAG, NLP)`
- Meta description + **image de partage Open Graph** (pour un bel aperçu quand le lien est partagé sur LinkedIn ou WhatsApp).

---

## 8. Étapes de travail proposées (à suivre dans VS Code)

1. Créer le projet (Vite + React + TS + Tailwind), premier commit, dépôt GitHub `mohaasdt/portfolio`.
2. Mettre en place les fichiers de données (`src/data/`).
3. Menu + Hero (+ bouton clair / sombre).
4. Section Projets (cartes + filtres).
5. Pages détail des projets (+ schémas d'architecture).
6. Experience, Skills, About, Contact, Footer.
7. Responsive + accessibilité + SEO.
8. Déploiement sur **Vercel**, puis ajouter le lien du portfolio dans le CV, le README GitHub et LinkedIn.

---

## 9. Critères de réussite

- Un recruteur comprend en 30 secondes : **AI Engineer, LLM / RAG / NLP, cherche un PFE en février 2027**.
- Chaque projet a un lien GitHub qui marche (sauf Wattson, en cours).
- Le site est rapide et lisible sur téléphone.
- Je comprends et je peux expliquer chaque partie du code.
