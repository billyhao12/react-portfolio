import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
                            src={require("../../images/Billy.jpg")} 
                            alt="Billy Hao" 
                            class="img-fluid rounded float-left">
                            </img>
                        </Col>
                        <Col lg={6}>
                            <p>
                                Full Stack Web Developer and passionate problem solver with a business background. Graduate of the University
                                of Washington’s Coding Boot Camp and the University of Washington Bothell’s School of Business. Worked
                                collaboratively with colleagues on various projects to develop innovative websites using front-end and back-end
                                technologies. Eager to learn new skills in order to build applications that positively impact user experience.
                            </p>

                            <p>
                                I have a firm understanding of HTML, CSS, and JavaScript with many deployed applications on my <a href="https://github.com/billyhao12">GitHub account</a>.
                                Previous experience includes investment banking, where I worked with a team to advise technology CEOs about the sell-side mergers and acquisitions process as well as supply chain management, where I organized and analyzed hundreds of supplier contracts.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>

    )

}

export default About;