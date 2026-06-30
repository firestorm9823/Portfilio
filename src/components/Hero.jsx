import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import './Hero.css';

const fragments = [
  { id: 'btn', label: 'button', x: '8%', y: '18%', rotate: -6, w: 132, h: 44 },
  { id: 'input', label: 'input', x: '78%', y: '12%', rotate: 4, w: 168, h: 44 },
  { id: 'card', label: 'card', x: '82%', y: '62%', rotate: -3, w: 140, h: 96 },
  { id: 'badge', label: 'badge', x: '4%', y: '68%', rotate: 8, w: 104, h: 36 },
  { id: 'nav', label: 'nav-item', x: '46%', y: '8%', rotate: -2, w: 120, h: 32 },
];

function Fragment({ f }) {
  return (
    <motion.div
      className="hero-fragment glass"
      style={{ left: f.x, top: f.y, width: f.w, height: f.h }}
      initial={{ opacity: 0, scale: 0.6, rotate: f.rotate * 3 }}
      animate={{ opacity: 1, scale: 1, rotate: f.rotate }}
      transition={{ duration: 0.9, delay: 0.3 + Math.random() * 0.4, ease: [0.16, 1, 0.3, 1] }}
      drag
      dragElastic={0.15}
      dragMomentum={false}
      whileHover={{ scale: 1.06, rotate: 0, borderColor: 'var(--accent)' }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="mono-tag">{f.label}</span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-fragments" aria-hidden="true">
        {fragments.map((f) => (
          <Fragment key={f.id} f={f} />
        ))}
      </div>

      <div className="hero-content">
        <motion.p
          className="mono-tag hero-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          UI/UX &amp; Frontend Engineer — Pune, India
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Omkar Chothave
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
        >
          I build interfaces from the inside out — every button, input, and card
          you see scattered above is a real component pulled from my shipped
          projects. Drag them around.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
        >
          <a href="#work" className="btn-primary">
            See my work
          </a>
          <div className="hero-links">
            <a href="https://github.com/firestorm9823" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/omkar-chothave-316b12257/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="mailto:omkarchothave5@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-hint mono-tag"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <ArrowDown size={14} />
        scroll
      </motion.div>
    </section>
  );
}
