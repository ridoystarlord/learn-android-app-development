import React, { useEffect, useState } from "react";
import "./Home.css";
import hero from "./images/Illustration.png";
import testimonial1 from "./images/testimonial1.jpg";
import testimonial2 from "./images/testimonial2.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import SingleServices from "../SingleServices/SingleServices";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const newServices = services.slice(0, 4);
  return (
    <div>
      <div className="hero-section py-5">
        <Container>
          <Row>
            <Col sm={6} className="d-flex align-items-center">
              <div>
                <h1>
                  Learn
                  <br />
                  <span className="hero-line">Android App Development</span>
                </h1>
                <p className="w-75">
                  You learn app development With Fun & Real Projects. Rather
                  than theoretical, We believe real live projects helps you to
                  gain more knowledge.
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <img className="img-fluid" src={hero} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <h1 className="text-center">Our Success</h1>
      <Container className="py-5">
        <Row xs={1} md={3} className="g-3">
          <Col>
            <Card className="success-border shadow-sm">
              <Card.Header className="text-center">In Progress</Card.Header>
              <Card.Body>
                <Card.Text className="text-center">
                  <h1>3080+</h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="success-border shadow-sm">
              <Card.Header className="text-center">Student in JOB</Card.Header>
              <Card.Body>
                <Card.Text>
                  <h1 className="text-center">15000+</h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="success-border shadow-sm">
              <Card.Header className="text-center">
                Total Enroll Students
              </Card.Header>
              <Card.Body>
                <Card.Text className="text-center">
                  <h1>18020+</h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <h1 className="text-center">Our Services</h1>
      <Container>
        <Row xs={1} md={4} className="g-3">
          {newServices.map((service) => (
            <SingleServices
              key={service.key}
              service={service}
            ></SingleServices>
          ))}
        </Row>
      </Container>
      <h1 className="text-center">Testimonial</h1>
      <Container className="py-5">
        <Row xs={1} md={4} className="g-5">
          <Col></Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={testimonial1} />
              <Card.Body>
                <Card.Title>Robert Jr.</Card.Title>
                <Card.Text>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={testimonial2} />
              <Card.Body>
                <Card.Title>Shain Hervert</Card.Title>
                <Card.Text>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
