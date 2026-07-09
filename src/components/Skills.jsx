import { motion } from 'framer-motion';
import './Skills.css';

const groups = [
  {
    label: 'Interface',
    items: ['React.js', 'Tailwind CSS', 'HTML / CSS', 'Leaflet.js', 'Responsive Design'],
  },
  {
    label: 'Engineering',
    items: ['Python', 'SQL', 'FastAPI', 'REST APIs', 'LangChain', 'Groq API'],
  },
  {
    label: 'Applied ML & AI',
    items: ['Scikit-Learn', 'XGBoost', 'OR-Tools', 'FAISS', 'LLMs', 'GenAI', 'Feature Engineering'],
  },
  {
    label: 'Automation & DevOps',
    items: ['n8n', 'OSRM', 'Pandas', 'NumPy', 'Git / GitHub', 'Vercel', 'Render', 'Streamlit'],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="section-eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono-tag">03 / Toolkit</span>
      </motion.div>

      <motion.h2
        className="skills-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        What I reach for, depending on the problem.
      </motion.h2>

      <div className="skills-grid">
        {groups.map((g, i) => (
          <motion.div
            className="skills-group"
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <p className="skills-group-label mono-tag">{g.label}</p>
            <div className="skills-chips">
              {g.items.map((item) => (
                <span className="skill-chip glass" key={item}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
