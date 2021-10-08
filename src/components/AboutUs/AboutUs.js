import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import instructor1 from "./images/instructor1.jpg";
import instructor2 from "./images/instuctor2.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Container className="py-5">
      <h2>About Us</h2>
      <p>
        learnappdevelopment.com is the first online based platform in Bangladesh
        where you can learn Native App Development beginner to advance level.
        Learn App Development helps beginner level students to achieve his/her
        Dream JOB.
      </p>
      <h2 className="py-3 text-center">Instructors</h2>
      <Row xs={1} md={4} className="g-5">
        <Col></Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={instructor1} />
            <Card.Body>
              <Card.Title className="text-center">
                Mehedi Hasan Ridoy
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <span className="fw-bold">Works in:</span> Freelancer
              </ListGroupItem>
              <ListGroupItem>Completed Bsc in CSE from DIU</ListGroupItem>
            </ListGroup>
            <Card.Body className="text-center">
              <Button variant="success">View Full Profile</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={instructor2} />
            <Card.Body>
              <Card.Title className="text-center">Msk Sharif Khan</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <span className="fw-bold">Works in:</span> Fiverr
              </ListGroupItem>
              <ListGroupItem>Studing Bsc in CSE from DIU</ListGroupItem>
            </ListGroup>
            <Card.Body className="text-center">
              <Button variant="success">View Full Profile</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
