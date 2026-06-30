import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-inner glass"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <span className="mono-tag contact-eyebrow">05 / Let's talk</span>
        <h2>
          Have an interface worth building?
          <br />
          Let's build it together.
        </h2>
        <a href="mailto:omkarchothave5@gmail.com" className="contact-email">
          omkarchothave5@gmail.com
          <ArrowUpRight size={20} />
        </a>

        <div className="contact-meta">
          <span>+91 98237 08254</span>
          <span className="dot">•</span>
          <span>Pune, Maharashtra</span>
        </div>

        <div className="contact-links">
          <a href="https://github.com/firestorm9823" target="_blank" rel="noopener noreferrer">
            <GithubIcon size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/omkar-chothave-316b12257/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a href="mailto:omkarchothave5@gmail.com">
            <Mail size={16} /> Email
          </a>
        </div>
      </motion.div>

      <footer className="footer mono-tag">
        Designed &amp; built by Omkar Chothave — React, Framer Motion
      </footer>
    </section>
  );
}
