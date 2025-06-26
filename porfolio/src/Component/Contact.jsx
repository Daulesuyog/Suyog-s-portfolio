import React from 'react';

function Contact() {
  // const resumeUrl = "/Suyog Daule_Resume.pdf"; 
  const resumeurl = '/suyog_d2_resume.pdf'; 

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container text-center">
        <h2 className="section-title">Contact Me</h2>
        <p>Email: <a href="mailto:suyogdaule2807@gmail.com">✉️ suyogdaule2807@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Daulesuyog" target="_blank" rel="noopener noreferrer">🐙 github.com/Daulesuyog</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/suyog-daule" target="_blank" rel="noopener noreferrer">🔗 linkedin.com/in/suyog-daule</a></p>

        <a href={resumeurl} download className="btn btn-success mt-3">
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
