import React from 'react';

export default function About() {
  const coursework = [
    'Programming Fundamentals',
    'Object Oriented Programming',
    'Data Structures',
    'Database Systems',
    'Software Design and Analysis',
    'Software Engineering',
    'Operating Systems',
    'Software for Mobile Devices',
    'Artificial Intelligence'
  ];

  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid">
        <div className="about-text">
          <p>
            I am a Computer Science student at <strong>FAST-NUCES Islamabad</strong>, passionate about bridging the gap between elegant frontend interfaces, powerful mobile applications, and solid backend systems. My growing interest lies in AI agents and automation, exploring how intelligent systems can optimize development workflows and create autonomous actions.
          </p>
          <p>
            With experience spanning from crafting responsive web interfaces to implementing offline-first syncing databases on mobile clients, I am comfortable operating across the entire application stack. I enjoy writing clean, modular code, building custom REST APIs, and integrating third-party systems like payment processors (Plaid), real-time communications (Agora SDK), and AI LLMs (OpenAI SDK).
          </p>
          <p>
            My goal is to continue building production-grade, functional software that solves real-world problems while staying on the cutting edge of full-stack and mobile ecosystems.
          </p>
        </div>

        <div className="about-details">
          <div className="glass-card">
            <div className="detail-item">
              <h3>Education</h3>
              <div className="education-card">
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                  Bachelor of Science in Computer Science
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  FAST (NUCES) - Islamabad
                </p>
                <p style={{ color: 'var(--primary-green)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                  2023 — 2027 | Islamabad, PK
                </p>
              </div>
            </div>

            <div className="detail-item" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem' }}>Core Coursework</h3>
              <div className="course-tags">
                {coursework.map((course, idx) => (
                  <span key={idx} className="tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
