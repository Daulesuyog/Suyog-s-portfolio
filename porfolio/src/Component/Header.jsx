import React from 'react';


function Hero  ()  {
  return (
    <section
      id="home"
      className="text-center py-5"
      style={{
        backgroundColor: 'white',
        
      }}
    >
      <img
        src="/Suyog.jpg"
        alt="Suyog Daule"
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '20%',
          objectFit: 'cover',
          marginBottom: '20px'
        }}
      />
      <h1>
        Hello, I'm{' '}
        <span
          style={{
            textAlign: 'linear-gradient(to bottom right, #f0f8ff, #e6f7ff)'
          }}
        >
          Suyog Raosaheb Daule
        </span>
      </h1>
      <p className="lead">A passionate Full Stack Web Developer</p>
    <div className="mt-3">
      <a href="#about" className="btn btn-primary me-2">About me</a>
      <a href="#projects" className="btn btn-primary me-2">Projects</a>
      <a href="#education" className="btn btn-primary me-2">Education</a>
      <a href="#internship" className="btn btn-primary me-2">Internship</a>
      <a href="#achievements" className="btn btn-primary me-2">Achievements</a>
      <a href="#contact" className="btn btn-primary me-2">Contact</a>
    </div>
    </section>
  );
};

export default Hero;


 
