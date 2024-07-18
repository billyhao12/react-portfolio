import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../../projects.json";
import Project from "../../components/Project";

import './style.css';

function Projects({ className }) {

    return (
        <Container className={className}>
            <Row>
                <Col lg={12}>
                    <div className="box">
                        <h1 id="pageTitle">Projects</h1>
                        <Row className="projectRow">
                            {projects.map(project => (
                                <Project project={project} />
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )

}

export default Projects;
