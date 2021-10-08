import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleServices from "../SingleServices/SingleServices";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-center">Our Services</h1>
      <Container>
        <Row xs={1} md={3} className="g-3">
          {services.map((service) => (
            <SingleServices
              key={service.key}
              service={service}
            ></SingleServices>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
