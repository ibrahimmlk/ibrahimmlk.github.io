import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <div className="container">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Muhammad Ibrahim Malik. Built with <span>React</span> &amp; <span>Vite</span>.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
