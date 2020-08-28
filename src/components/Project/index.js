import React from "react";
import Col from "react-bootstrap/Col";

function Project({project}) {

    return(

        <Col md={6}>
            <h3 className="projectTitles">{project.name}</h3>
            <img src={require(project.image)} alt={project.alt}></img>
            <a href={project.appUrl}>Deployed App</a>
            <br></br>
            <a href={project.repo}>GitHub Repository</a>
        </Col>

    )

}

export default Project;