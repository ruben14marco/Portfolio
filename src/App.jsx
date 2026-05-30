// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';

// Layout principal
import Navbar              from './components/Navbar';
import Footer              from './components/Footer';

// Secciones de la home
import Hero                from './components/Hero';
import About               from './components/About';
import ExperienceEducation from './components/ExperienceEducation';
import Projects            from './components/Projects';
import Contact             from './components/Contact';

// Páginas individuales de proyectos
import Projectportfolio    from './components/Pages/Projectportfolio';
import Projectcybor        from './components/Pages/Projectcybor';
import Projectedutok       from './components/Pages/Projectedutok';

// ─── Home ─────────────────────────────────────────────────────────────────────
function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <About />
      <ExperienceEducation />
      <Projects />
      <Contact />
    </>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                     element={<Home />} />
          <Route path="/projects/portfolio"   element={<Projectportfolio />} />
          <Route path="/projects/cybor"       element={<Projectcybor />} />
          <Route path="/projects/edutok"      element={<Projectedutok />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}