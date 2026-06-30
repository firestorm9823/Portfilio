import { motion } from 'framer-motion';
import { Layers, MousePointerClick, Gauge } from 'lucide-react';
import './Approach.css';

const pillars = [
  {
    icon: Layers,
    title: 'Interfaces are systems',
    body: 'I think in components before I think in screens. Every button, card, and input I ship is built to be reused, restyled, and recombined — not redrawn from scratch.',
  },
  {
    icon: MousePointerClick,
    title: 'Feedback is the interface',
    body: 'Users trust what responds to them. I sweat the hover states, the loading skeletons, the 200ms transitions — the parts of an interface that are felt, not seen.',
  },
  {
    icon: Gauge,
    title: 'Design that ships',
    body: 'I build and deploy what I design. That loop — design, code, ship, observe real users — is the fastest way I know to learn what actually works.',
  },
];

export default function Approach() {
  return (
    <section className="approach" id="approach">
      <motion.div
        className="section-eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono-tag">01 / How I work</span>
      </motion.div>

      <motion.h2
        className="approach-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        I design with the same hands that write the code.
      </motion.h2>

      <div className="pillars">
        {pillars.map((p, i) => (
          <motion.div
            className="pillar glass"
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <p.icon size={22} color="var(--accent)" strokeWidth={1.6} />
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
