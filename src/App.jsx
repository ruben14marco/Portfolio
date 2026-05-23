// src/App.jsx
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar              from './components/Navbar';
import Hero                from './components/Hero';
import About               from './components/About';
import ExperienceEducation from './components/ExperienceEducation';
import Projects            from './components/Projects';
import Contact             from './components/Contact';
import Footer              from './components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceEducation />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}