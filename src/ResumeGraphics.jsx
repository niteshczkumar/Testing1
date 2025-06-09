import React, { useState } from 'react';

// ResumeGraphics: A graphical React component for resume details
export default function ResumeGraphics() {
  // Example data (edit as needed)
  const [name] = useState('Nitesh Kr');
  const [skills] = useState(['Java', 'Python', 'Cy SEcurity']);
  const [skillLevels] = useState([7, 7, 7]); // Out of 10
  const [experienceTitles] = useState(['Software Engineer', 'Intern']);
  const [experienceYears] = useState([3, 1]);
  const [education] = useState(['B.Tech Computer Science', 'UG']);
  const [educationYears] = useState([2026, 2022]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      fontFamily: 'Arial, sans-serif',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        padding: 40,
        minWidth: 400,
        maxWidth: 700,
        marginTop: 40,
        marginBottom: 40,
      }}>
        <h1 style={{ color: '#2471a3', marginBottom: 16 }}>Testing det.</h1>
        <h2 style={{ color: '#34495e', marginBottom: 24 }}>{name}</h2>
        <section style={{ marginBottom: 32 }}>
          <h3 style={{ color: '#5dade2', marginBottom: 8 }}>Skills</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {skills.map((skill, i) => (
              <li key={skill} style={{ marginBottom: 8, display: 'flex', alignItems: 'center', paddingLeft: '2em' }}>
                <span style={{ width: 100 }}>{skill}</span>
                <div style={{
                  background: '#e0eafc',
                  borderRadius: 8,
                  width: 120,
                  height: 16,
                  marginRight: 8,
                  marginLeft: 8,
                  overflow: 'hidden',
                  boxShadow: '0 1px 2px #b2bec3',
                }}>
                  <div style={{
                    width: `${skillLevels[i] * 10}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #5dade2 0%, #48c6ef 100%)',
                  }} />
                </div>
                <span style={{ color: '#2471a3', fontWeight: 'bold' }}>{skillLevels[i]}/10</span>
              </li>
            ))}
          </ul>
        </section>
        <section style={{ marginBottom: 32 }}>
          <h3 style={{ color: '#5dade2', marginBottom: 8 }}>Experience</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {experienceTitles.map((title, i) => (
              <li key={title} style={{ marginBottom: 8, paddingLeft: '2em' }}>
                <span style={{ fontWeight: 'bold' }}>{title}</span> — {experienceYears[i]} year(s)
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 style={{ color: '#5dade2', marginBottom: 8 }}>Education</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {education.map((ed, i) => (
              <li key={ed} style={{ marginBottom: 8, paddingLeft: '2em' }}>
                <span style={{ fontWeight: 'bold' }}>{ed}</span> ({educationYears[i]})
              </li>
            ))}
          </ul>
        </section>
        <h4 style={{ color: '#34495e', marginBottom: 32 }}>{Thank for your time}</h4>
      </div>
    </div>
  );
}
