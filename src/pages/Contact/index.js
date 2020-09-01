import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

function Contact() {

    return (

        <Container>
            <Row>

                <Col lg={8}>
                    <div className="box">
                        <form action="https://formspree.io/xvownzqz" method="POST">

                        <h1>Contact Form</h1>

                        <label for="name">Name</label>
                        <br />
                        <input type="text" name="name" placeholder="John Smith" />

                        <br />

                        <label for="email">Email</label>
                        <br />
                        <input type="text" name="email" placeholder="example@gmail.com" />

                        <br />

                        <label for="message">Message</label>
                        <br />
                        <textarea name="message" style={{"height": "200px"}}></textarea>

                        <br />

                        <input type="submit" value="Send" />

                        </form>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="box">
                        <h3>My Info</h3>
                        <ul>
                            <li><a href="https://github.com/billyhao12">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/billyhao12/">LinkedIn</a></li>
                            <li>Email me at <a href="mailto:billyhao12@gmail.com">billyhao12@gmail.com</a></li>
                            <li>Phone number: +1 (425) 922-6982</li>
                        </ul>
                    </div>
                </Col>

            </Row>
        </Container>

    )
}

export default Contact;
