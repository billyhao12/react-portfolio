import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profilePic from "../../images/Billy.jpg";
import "./style.css";

function About({ className }) {

    return (
      <Container className={className}>
        <Row>
          <div className="box">
            <h1>About Me</h1>
            <Row>
              <Col lg={6}>
                <img
                  src={profilePic}
                  alt="Billy Hao"
                  class="img-fluid rounded float-left"
                ></img>
              </Col>
              <Col lg={6}>
                <p>
                  Software engineer and problem solver passionate about building
                  useful applications with high-quality, maintainable code.
                  Experienced with full-stack web development and proficient in
                  writing frontend code with React. Holds a master's degree in
                  Computer Science and Software Engineering and a bachelor's in
                  Business Administration from the University of Washington
                  Bothell.
                </p>

                <strong>Technical Skills</strong>
                <ul>
                  <li>
                    Languages: JavaScript, Java, C, C++, Python, C#, HTML, CSS,
                    SQL/T-SQL
                  </li>
                  <li>
                    Libraries: React, React Testing Library, jQuery, Mongoose
                  </li>
                  <li>
                    Frameworks: Express, Jest, Spring Boot, Bootstrap, Bulma
                  </li>
                  <li>
                    Others: AWS, Git, MongoDB, IndexedDB, MVC design pattern,
                    responsive web design
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    );

}

export default About;