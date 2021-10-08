import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import notfound from "./images/notfound.jpg";

const NotFound = () => {
  return (
    <div className="text-center pb-3">
      <div className="d-flex justify-content-center">
        <img className="img-fluid" src={notfound} alt="" />
      </div>
      <Link to="./">
        <Button variant="success">Back To Homepage</Button>
      </Link>
    </div>
  );
};

export default NotFound;
