import React from 'react';
import '../Styles/Projects.css';

function Projects  () {
return (
  <section className="projects-section py-5" id="projects">
    <div className="container text-center" >
      <h2 className="section-title mb-4">Projects</h2>
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="project-card p-3 mb-4  alignItems-center">
            <h5>AgroConnectMitr</h5>
            <p>A full-stack web app to connect farmers with agricultural workers. Developed role-based dashboards, job posting and 
application modules.  
 Used React for frontend, Node.js and Express for backend APIs, and PostgreSQL for data handling. 
 Implemented JWT authentication and respon- sive design. </p>
            <a href="#!" className="btn btn-outline-primary btn-sm">GitHub</a>
          </div>
          <div className="project-card p-3">
            <h5>Recipe-App</h5>
            <p>A responsive web platform for users to post, edit, and view cooking recipes.  
 Built with React, Node.js, Express, and PostgreSQL. Features include secure login, CRUD operations, protected routes, 
and styled UI using Bootstrap. 
 Focused on clean UX and performance optimization.</p>
        <div  style={{ display: 'flex',
           justifyContent: 'space-between',
            alignItems: 'center', 
            gap: '10px', 
            marginTop: '10px',
             marginBottom: '10px',
              }}> 
            <a href="https://pern-recipe-app.vercel.app/" className="btn btn-outline-primary btn-sm">View</a>
            <a href="https://github.com/Daulesuyog/PERN-recipe_app" className="btn btn-outline-primary btn-sm">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

export default Projects;
