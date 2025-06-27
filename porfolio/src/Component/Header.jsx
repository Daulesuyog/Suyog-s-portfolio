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
    <div
  className="d-flex flex-wrap justify-content-center"
  style={{
    gap: '10px',
    marginTop: '15px',
    marginBottom: '15px'
  }}>
  <a href="#about" className="btn btn-primary">About me</a>
  <a href="#projects" className="btn btn-primary">Projects</a>
  <a href="#education" className="btn btn-primary">Education</a>
  <a href="#internship" className="btn btn-primary">Internship</a>
  <a href="#achievements" className="btn btn-primary">Achievements</a>
  <a href="#contact" className="btn btn-primary">Contact</a>
</div>

    </section>
  );
};

export default Hero;


 
