import React from 'react';

export default function Projects() {
  const projectsData = [
    {
      title: 'Socially (Social Media App)',
      date: 'Sep — Nov 2025',
      desc: 'A full-featured social media Android application with photo sharing, real-time messaging, and in-app audio/video calling capabilities.',
      bullets: [
        'Implemented Agora API for seamless peer-to-peer audio and video calls.',
        'Used Firebase for authentication and real-time database synchronizations.',
        'Designed and built a custom PHP backend API to handle persistence and media storage.',
        'Developed an offline-first synchronization system using SQLite, enabling posts/messages to auto-sync upon reconnection.'
      ],
      tech: ['Kotlin', 'XML', 'Firebase', 'PHP REST API', 'Agora SDK', 'SQLite'],
      githubLink: 'https://github.com/ibrahimmlk'
    },
    {
      title: 'Truvio Payment Passport',
      date: 'April 2026',
      desc: 'Real-time payment verification and fraud protection network featuring a Node.js backend and a Manifest V3 Chrome Extension.',
      bullets: [
        'Intercepts high-risk e-commerce transactions globally via extension hooks.',
        'Engineered Express backend authentication middleware and endpoints using JWT.',
        'Integrated Plaid API and Speakeasy MFA (Multi-Factor Authentication) for safety checks.',
        'Developed a heuristic scoring engine analyzing device fingerprinting and velocity triggers.'
      ],
      tech: ['Node.js', 'Express', 'MongoDB', 'Speakeasy (MFA)', 'Plaid API', 'JWT', 'Manifest V3'],
      githubLink: 'https://github.com/ibrahimmlk'
    },
    {
      title: 'YouTube to LinkedIn Post Generator',
      date: 'March 2026',
      desc: 'AI-powered content repurposing app that transforms YouTube videos into polished, engagement-focused LinkedIn posts in seconds.',
      bullets: [
        'Built a LangChain-powered pipeline that extracts transcripts and generates concise, plain-text LinkedIn content.',
        'Designed and tuned prompt chains for tone control, source attribution, and consistent post formatting.',
        'Developed a Streamlit frontend with tone selection and one-click post generation for a fast input/output workflow.',
        'Reduced manual repurposing time from 30+ minutes to under 30 seconds through end-to-end automation.'
      ],
      tech: ['Python', 'LangChain', 'OpenAI Python SDK', 'youtube-transcript-api', 'yt-dlp', 'Streamlit'],
      githubLink: 'https://github.com/ibrahimmlk'
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <div key={idx} className="project-card glass-card">
            <div className="project-header">
              <span className="project-date">{project.date}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-green)' }}>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            
            <ul className="project-list">
              {project.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx}>{bullet}</li>
              ))}
            </ul>
            
            <div className="project-tech">
              {project.tech.map((t, techIdx) => (
                <span key={techIdx} className="tag">{t}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
