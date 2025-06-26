import React from 'react';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'API'];
  const tools = ['Git', 'GitHub', 'VS Code'];

  return (
    <section id="skills" className="py-5 bg-white text-center">
      <h2>Skills</h2>
      <div style={{ marginTop: '20px' }}>
        {skills.map((skill, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '20px',
              padding: '8px 15px',
              margin: '5px'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
      <h4 style={{ marginTop: '30px' }}>Tools</h4>
      <div>
        {tools.map((tool, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              backgroundColor: '#28a745',
              color: 'white',
              borderRadius: '20px',
              padding: '8px 15px',
              margin: '5px'
            }}
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
