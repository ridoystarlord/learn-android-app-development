import React from "react";
import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const Student = (props) => {
  const { name, company, img } = props.student;
  return (
    <div className="py-3">
      <Col className="shadow bg-body rounded">
        <Card className="">
          <Card.Img width="50%" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <span className="fw-bold">Company Name:</span> {company}
            </ListGroupItem>
          </ListGroup>
          <Card.Body className="text-center">
            <Button variant="success">View Profile</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Student;
