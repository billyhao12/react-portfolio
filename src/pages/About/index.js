import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {

    return (
        <Container>
        <Row>
            <div class="box">
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
                            Hello, my name is Billy Hao. I am a Full Stack Web Developer and passionate problem solver with a business background.
                            I hold a Bachelor of Arts in Business Administration from the University of Washington Bothell with concentrations in Supply Chain Management and Finance.
                            In addition, I have taken various continuing education courses on SQL at Bellevue College.
                        </p>

                        <p>
                            I have a firm understanding of HTML, CSS, and JavaScript with many deployed applications on my <a href="https://github.com/billyhao12">GitHub account</a>.
                            Previous experience includes investment banking, where I worked with a team to advise technology CEOs about the sell-side mergers and acquisitions process as well as supply chain management, where I organized and analyzed hundreds of supplier contracts.
                            My experience as an investment banker has strengthened my communication skills and taught me how to work within a diverse team to achieve a common goal.
                        </p>
                    </Col>
                </Row>
            </div>
        </Row>
        </Container>

    )
}

export default About;