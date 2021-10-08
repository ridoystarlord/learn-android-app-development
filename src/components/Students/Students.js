import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Student from "../Student/Student";

const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("./students.JSON")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div>
      <h1 className="text-center">Our Pride Students</h1>
      <Container>
        <Row xs={1} md={4} className="g-3">
          {students.map((student) => (
            <Student key={student.id} student={student}></Student>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Students;
