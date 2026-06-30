import Nav from './components/Nav';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <div className="bg-ambient" />
      <div className="bg-grid" />
      <Nav />
      <Hero />
      <Approach />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
