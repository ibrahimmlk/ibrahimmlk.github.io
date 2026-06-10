import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ['C/C++', 'Java', 'Kotlin', 'JavaScript', 'Python', 'Dart', 'PHP']
    },
    {
      title: 'Frontend & Mobile',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: ['React', 'Flutter', 'Riverpod', 'HTML5', 'CSS3', 'XML', 'Agora SDK']
    },
    {
      title: 'Backend & Databases',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      ),
      skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'Supabase', 'SQL', 'SQLite']
    },
    {
      title: 'Developer Tools',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      ),
      skills: ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Postman']
    }
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title">Skills & Toolkit</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category glass-card">
            <h3>
              {category.icon}
              {category.title}
            </h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIdx) => (
                <span key={skillIdx} className="skill-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
