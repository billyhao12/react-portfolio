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
                                Full Stack Web Developer and problem solver with a business background.
                                Graduate of the University of Washington’s Coding Boot Camp and the University of Washington Bothell’s School of Business.
                                Collaborated with colleagues on various projects to develop innovative websites using HTML, CSS and JavaScript.
                                Eager to learn new skills and build applications that simplify and enhance people’s lives.
                            </p>

                            <p>
                                As a former investment banker, I worked with a team to advise technology CEOs about the sell-side mergers and acquisitions process.
                                The experience strengthened my communication skills and taught me how to work within a diverse team to achieve a common goal.
                            </p>
                            
                            <strong>Technical Skills</strong>
                            <ul>
                                <li>Languages: HTML, CSS, JavaScript, Node.js, SQL/T-SQL, Handlebars.js, Java</li>
                                <li>Libraries: jQuery, React.js, Mongoose</li>
                                <li>Frameworks: Bootstrap, Express.js, Bulma.js</li>
                                <li>Others: Git, MongoDB, MySQL, Microsoft SQL Server, Sequelize, IndexedDB, MVC design pattern, Visual Studio Code, Docker, GitHub, Heroku</li>
                            </ul>
                            
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>

    )

}

export default About;