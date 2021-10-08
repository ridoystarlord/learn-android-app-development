import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./SingleServices.css";
const SingleServices = (props) => {
  const { name, price, rating, description, img, startDate, sits } =
    props.service;
  return (
    <div className="py-3">
      <Col className="h-100 shadow bg-body rounded">
        <Card className="h-100">
          <Card.Img className="card-image" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>
              <span className="fw-bold">Start Date:</span> {startDate}
            </Card.Text>
            <div className="d-flex justify-content-between">
              <p>
                <span className="fw-bold">Rating:</span> {rating}
              </p>
              <p>
                <span className="fw-bold">Price:</span> {price}$
              </p>
              <p>
                <span className="fw-bold">Seats:</span> {sits}
              </p>
            </div>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center">
            <Button variant="success">Enroll Now</Button>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default SingleServices;
