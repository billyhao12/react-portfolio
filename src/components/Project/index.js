import React from "react";
import Col from "react-bootstrap/Col";

import "./style.css";

function Project({project}) {

    function checkIfDeployed(project) {
        if (project.appUrl) {
            return (
                <div>
                    <a href={project.appUrl}>Deployed App</a>
                </div>
            )            
        }
    }

    return (
        <Col md={6}>
            <h3 className="projectTitles">{project.name}</h3>
            <img 
            src={require("../../images" + project.image)} 
            alt={project.alt}
            className="projectScreenshots img-fluid rounded"></img>
            <p>{project.description}</p>
            <p>Technologies used: {project.technologies}</p>
            {checkIfDeployed(project)}
            <a href={project.repo}>GitHub Repository</a>
        </Col>
    )

}

export default Project;
