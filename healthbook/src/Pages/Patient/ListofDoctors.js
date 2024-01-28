import React,{useEffect,useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import axios from "axios";

const ListofDoctors = () => {
   
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('Medicine');
    const [designation, setDesignation] = useState('professor');
    const [query, setQuery] = useState({department: department, designation: designation});

    useEffect(() => {
        console.log('Inside UseEffect');
        console.log(department);
        console.log(designation);
        // Define the URL with query parameters
        const url = 'http://localhost:8000/patients/doctor-list';
        setQuery({department, designation});
        console.log(query)
        // Fetch data using Axios with query parameters
        const res = axios.get(url, {query})
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
          console.log(res.data);
      }, []); // Empty dependency array to run effect only once
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr", // Three equal columns
          gap: "20px", // Gap between columns
          margin: "100px",
        }}
      >
        <div>{/* First column content */}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Second column content */}
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
            style={{
              width: "28rem",
              border: "2px solid white",
              margin: "20px",
            }}
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
        <div style={{ flexDirection: "column", padding: "10px" }}>
          {/* Third column content */}
          <form className="filter" style={{ flexDirection: "column" }}>
            <label htmlFor="doctorName" style={{ margin: "39px" }}>
              Name
            </label>
            <input
              name="doctorName"
              id="doctorName"
              placeholder="Enter Doctor's Name"
            />
            <label htmlFor="deputation" style={{ margin: "25px" }}>
              Deputation
            </label>
            <input
              name="deputation"
              id="deputation"
              placeholder="Deputation of Doctor"
              //value={designation}
            />
            <label htmlFor="category" style={{ margin: "30px" }}>
              Category
            </label>
            <input
              name="category"
              id="category"
              placeholder="Doctor's expertise category"
              //value={department}
            />
            <label htmlFor="chamber" style={{ margin: "30px" }}>
              Chamber
            </label>
            <input name="chamber" id="chamber" placeholder="Doctor's chamber" />

            <Button
              type="submit"
              style={{
                backgroundColor: "white",
                color: "#7439db",
                width: "100px",
                height: "40px",
                borderRadius: "5px",
                marginLeft: "100px",
              }}
            >
              Search
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ListofDoctors;
