import React from 'react';

const Achievements = () => {
  const certs = [
    {
        name:"Full Stack Web Develpment ",
        provider:"Udemy",
        link:"/certifications/suyog full web.pdf"
    },
    {
        name:"Scrum Master",
        provider:"Udemy",
        link:"/certifications/Suyog Raosaheb Daule - Scrum Master Certification - Certificate-2.pdf"
    },
  ];
  return (
    <section className="py-5 bg-light" id="achievements">
      <div className="container text-center">
        <h2 className="section-title mb-4">Achievements & Certificates</h2>
        <div className="row justify-content-center">
          {certs.map((c,i)=>(
            <div className="col-md-4 mb-4" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{c.name}</h5>
                  <p className="card-text text-muted">{c.provider}</p>
                  <a href={c.link} target="_blank" rel="noopener noreferrer"download className="btn btn-outline-primary" >View Certificate</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
