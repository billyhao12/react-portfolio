import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profilePic from "../../images/Billy.jpg";
import "./style.css";

function About() {

    return (

        <Container>
            <Row>
                <div className="box">
                    <h1>About Me</h1>
                    <Row>
                        <Col lg={6}>
                            <img 
                            src={profilePic} 
                            alt="Billy Hao" 
                            class="img-fluid rounded float-left">
                            </img>
                        </Col>
                        <Col lg={6}>
                            <p>
                                Software engineer and problem solver working at Sinclair Digital.
                                A graduate student at the University of Washington Bothell set to earn a master's degree in computer science and software engineering in 2025. Holds a Graduate Certificate in Software Design and Development (GCSDD) from the same university and a certificate in Full Stack Web Development from the UW Professional and Continuing Education program. Earned a Bachelor of Arts in Business Administration with concentrations in Supply Chain Management and Finance from UW Bothell's School of Business in 2019.
                            </p>
                            
                            <strong>Technical Skills</strong>
                            <ul>
                                <li>Languages: SQL/T-SQL, HTML, CSS, JavaScript, Node.js, Handlebars.js, Java, C++, C</li>
                                <li>Libraries: jQuery, Mongoose, React.js, React Testing Library</li>
                                <li>Frameworks: Bootstrap, Express.js, Bulma.js, Jest</li>
                                <li>Others: Git, MongoDB, MySQL, Microsoft SQL Server, Sequelize, IndexedDB, MVC design pattern, responsive web design</li>
                            </ul>
                            
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>

    )

}

export default About;