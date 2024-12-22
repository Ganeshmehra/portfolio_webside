import React from 'react';
import Project from "../assets/Project.json";

function Projects() {
  return (
    <>
      <div className="container" id='Project'>
        <h1 className="m-4">Projects</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {Project.map((P, id) => (
            <div
              key={id}
              className="card maincard d-flex align-items-center justify-content-center pt-4 m-2"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img src={P.image} className="card-img-top imeage" alt={P.title} />
              <div className="card-body">
                <h5 className="card-title">{P.title}</h5>
                <p className="card-text">{P.discriptione}</p>
                <div className="d-flex justify-content-between">
                  <a href={P.deno} target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-2">
                    Demo
                  </a>
                  <a href={P.code} target="_blank" rel="noopener noreferrer" className="btn btn-warning mx-2">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
