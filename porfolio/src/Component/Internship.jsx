import React from 'react';


const Internship = () => {
  const internships = [
    {
      company: "EY GDS",
      role: "Full Stack Web Development Intern",
      duration: "janauary-febuary 2025",
      description: "Built full stack features, responsive components and Projects.",
      link: "/certifications/Suyog Raosaheb Daule_offer_letter.pdf",
      certificate:"/certifications/Suyog Raosaheb Daule_Certificate.pdf"
    },
  ];
  return (
    <section className="internship-section py-5" id="internship">
      <div className="container text-center mb-4">
        <h2 className="section-title mb-4">Internships</h2>
        {internships.map((i, idx) => (
          <div key={idx} className="mb-4">
            <h5 className="fw-bold">{i.role} at {i.company}</h5>
            <p className="text-muted">{i.duration}</p>
            <p>{i.description}</p>
            <div className='mb-4'>
  <a
    href={i.link}
    target="_blank"
    rel="noopener noreferrer"
    download
    className="btn btn-outline-primary me-3"
  >
    Offer Letter
  </a>
  <a
    href={i.certificate}
    target="_blank"
    rel="noopener noreferrer"
    download
    className="btn btn-outline-primary"
  >
    View Certificate
  </a>
</div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
