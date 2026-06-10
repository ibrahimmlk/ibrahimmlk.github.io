import React, { useState, useEffect } from 'react';

export default function Hero() {
  const roles = ['Full-Stack Developer', 'Android App Developer', 'AI Enthusiast'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullRole = roles[roleIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setSubText((prev) => prev.slice(0, -1));
      } else {
        setSubText((prev) => currentFullRole.slice(0, prev.length + 1));
      }
    };

    const speed = isDeleting ? 40 : 100;

    if (!isDeleting && subText === currentFullRole) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && subText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(handleTyping, speed);
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="container">
      <div className="hero-content">
        <h1 className="hero-title">
          Muhammad Ibrahim Malik
        </h1>
        <h2 className="hero-subtitle">
          I'm a <span className="typed-text">{subText}</span>
        </h2>
        <p className="hero-desc">
          CS student at FAST-NUCES Islamabad specializing in full-stack and mobile development, 
          with a growing interest in AI agents and automation. Comfortable working across the full stack, 
          from frontend interfaces and mobile clients to backend services and databases.
        </p>
        <div className="hero-cta">
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button 
            className="btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
