import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {  Link } from "react-router-dom";
const currentDoctors = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "200px",
        }}
      >
        <h1>Current Doctors</h1>
        <Card style={{ width: "28rem", border: "2px solid white" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>
              <Link to="/">Doctor's Name</Link>
            </Card.Title>
            <Card.Text>Doctor's Description</Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "28rem", border: "2px solid white", margin: "20px" }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>
              <Link to="/">Doctor's Name</Link>
            </Card.Title>
            <Card.Text>Doctor's Description</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div>
       <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>
       
      <Form.Group className="mb-3" controlId="abc">
        <Form.Control type="password" placeholder="Password" />
      <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Form.Group>
       </Form>
      </div>
    </>
  );
};

export default currentDoctors;
