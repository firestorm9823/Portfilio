import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons';
import './Projects.css';

const projects = [
  {
    tag: 'Case Study 01',
    title: 'SmartDoc Analyzer',
    problem:
      'People drown in long PDFs and don\u2019t want to read them end to end \u2014 they want to ask a question and get a grounded answer with a source they can verify.',
    decisions: [
      'Drag-and-drop upload as the only first action — zero forms, zero friction before value',
      'Chat-style interface so answers feel conversational, not like a search results page',
      'Every AI answer ships with a visible source citation, so trust is built into the layout, not bolted on',
    ],
    outcome:
      'A response interface that treats explainability as a UI requirement, not an afterthought.',
    stack: ['React', 'Vite', 'FastAPI', 'LangChain', 'FAISS'],
    demo: 'https://smartdoc-frontend-xi.vercel.app/',
    code: 'https://github.com/firestorm9823',
    accent: 'accent',
  },
  {
    tag: 'Case Study 02',
    title: 'Movie Recommendation System',
    problem:
      'Recommendation engines are often a black box — users see results with no sense of why, which kills trust in the suggestion.',
    decisions: [
      'Poster-forward grid layout so browsing feels like a streaming app users already know, not a data demo',
      'Instant search-as-you-type to keep the interface feeling responsive rather than form-driven',
      'Metadata surfaced inline on hover, keeping the base view clean and the detail one interaction away',
    ],
    outcome:
      'A familiar, low-friction browsing pattern applied to a content-based ML model.',
    stack: ['Python', 'Streamlit', 'Scikit-Learn', 'TMDB API'],
    demo: null,
    code: 'https://github.com/firestorm9823/Movie_recommender',
    accent: 'coral',
  },
  {
    tag: 'Case Study 03',
    title: 'The Wall of Dreams — Web Presence',
    problem:
      'An early-stage company needed a homepage and service pages that felt credible and consistent across every device, on a tight timeline.',
    decisions: [
      'Built a small reusable component library first (buttons, cards, nav) so every new page inherited the same visual language',
      'Mobile-first breakpoints, since most first-time visitors arrived from social links on phones',
      'Tailwind utility classes kept the design system enforceable in code, not just in a style guide nobody opens',
    ],
    outcome:
      'A consistent, responsive site shipped solo as the sole frontend developer on the team.',
    stack: ['React.js', 'Tailwind CSS'],
    demo: null,
    code: null,
    accent: 'accent',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="work">
      <motion.div
        className="section-eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono-tag">02 / Selected work</span>
      </motion.div>

      <motion.h2
        className="projects-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        Three interfaces, three problems worth solving.
      </motion.h2>

      <div className="project-list">
        {projects.map((p, i) => (
          <motion.article
            className="project-card glass"
            key={p.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
          >
            <div className="project-card-head">
              <span className={`mono-tag project-tag ${p.accent}`}>{p.tag}</span>
              <div className="project-links">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="icon-link">
                    Live <ArrowUpRight size={14} />
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <GithubIcon size={14} /> Code
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{p.title}</h3>

            <div className="project-body">
              <div className="project-block">
                <p className="project-label mono-tag">The problem</p>
                <p className="project-text">{p.problem}</p>
              </div>

              <div className="project-block">
                <p className="project-label mono-tag">Interface decisions</p>
                <ul className="project-decisions">
                  {p.decisions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="project-block">
                <p className="project-label mono-tag">Outcome</p>
                <p className="project-text">{p.outcome}</p>
              </div>
            </div>

            <div className="project-stack">
              {p.stack.map((s) => (
                <span key={s} className="stack-chip mono-tag">{s}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
