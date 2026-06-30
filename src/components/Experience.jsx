import { motion } from 'framer-motion';
import './Experience.css';

const timeline = [
  {
    period: '05/2025 — 11/2025',
    title: 'Web Developer Intern',
    org: 'The Wall of Dreams',
    desc: 'Designed and built the company\u2019s core web presence end to end \u2014 homepage, landing pages, and service pages \u2014 using React.js and Tailwind CSS, with a reusable component system that kept every new page visually consistent.',
  },
  {
    period: '2022 — 2026',
    title: 'B.Tech, Information Technology',
    org: 'G. H. Raisoni College of Engineering and Management, Pune',
    desc: 'CGPA 7.97. GATE 2025 qualified in Data Science & Artificial Intelligence, score 28.69. Selected at college level for Smart India Hackathon, two consecutive years.',
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <motion.div
        className="section-eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono-tag">04 / Background</span>
      </motion.div>

      <motion.h2
        className="experience-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        Where the work and the learning happened.
      </motion.h2>

      <div className="timeline">
        {timeline.map((t, i) => (
          <motion.div
            className="timeline-row"
            key={t.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="timeline-period mono-tag">{t.period}</div>
            <div className="timeline-line">
              <span className="timeline-dot" />
            </div>
            <div className="timeline-content">
              <h3>{t.title}</h3>
              <p className="timeline-org">{t.org}</p>
              <p className="timeline-desc">{t.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
