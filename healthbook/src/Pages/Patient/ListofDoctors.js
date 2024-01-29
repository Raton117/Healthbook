import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import axios from "axios";

const ListofDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [area, setArea] = useState("");
  // const [query, setQuery] = useState({department: department, designation: designation, name: name, area: area});
  const [query, setQuery] = useState();

  const loadDoctors = async () => {
    const url = "http://localhost:8000/patients/doctor-list";
    //setQuery({department, designation});
    //console.log(query)
    // Fetch data using Axios with query parameters
    const res = axios
      .get(url, { params: query })
      .then((response) => {
        //console.log(response.data);
        //console.log(response.data.doctors);
        setDoctors(response.data.doctors);
        console.log(response.data.doctors[0].consultency[0]);
        //console.log(doctors[0]);
        // console.log(doctors)
        //console.log(doctors[0].username)
      })
      .catch((error) => {
        console.log(error);
      });
    //console.log(res.data);
    //console.log(res.data.doctors)
  };

  const doDoctorSearch = () => {
    setQuery({
      department: department,
      designation: designation,
      name: name,
      area: area,
    });
  };

  useEffect(() => {
    //console.log('ABCD');
    //console.log(query);
    loadDoctors();
  }, [query]);

  // useEffect(() => {
  //     console.log('Inside UseEffect');
  //     console.log(department);
  //     console.log(designation);
  //     console.log(name);
  //     console.log(area);
  //     // Define the URL with query parameters
  //     const url = 'http://localhost:8000/patients/doctor-list';
  //     //setQuery({department, designation});
  //     console.log(query)
  //     // Fetch data using Axios with query parameters
  //     const res = axios.get(url, {query})
  //       .then(response => {
  //         console.log(response.data);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //       console.log(res.data);

  //       // setDoctors(res.data);
  //       // console.log(doctors)
  //       // setName(res.data[0].doctors[0].name)
  //       // setUsername(res.data[0].doctors[0].username)
  //       // setDepartment(res.data[0].doctors[0].department)
  //       // setDesignation(res.data[0].doctors[0].designation)
  //   }, [query]); // Empty dependency array to run effect only once
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
          {doctors && doctors.length > 0 ? (
    doctors.map((doctor, index) => (
      <Card key={index} style={{ width: "28rem", border: "2px solid white", margin: '5px' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{doctor.name}</Card.Title>
          <Card.Text>{doctor.department}</Card.Text>
          <Card.Text>{doctor.designation}</Card.Text>
          <Card.Text>Clinic: {doctor.consultency[0] ? doctor.consultency[0].clinic_name : 'Not available'}</Card.Text>
          <h5>Visiting Hour :</h5>
          {doctor.consultency[0] && doctor.consultency[0].days ? (
            <Card.Text>
              Days: {doctor.consultency[0].days.map(day => day.day).join(', ')}
            </Card.Text>
          ) : (
            <Card.Text>Days: Not available</Card.Text>
          )}
          <Card.Text>Start Time: {doctor.consultency[0] ? doctor.consultency[0].start_time : 'Not available'}</Card.Text>
          <Card.Text>End Time: {doctor.consultency[0] ? doctor.consultency[0].end_time : 'Not available'}</Card.Text>
          <Card.Text>Room: {doctor.consultency[0] ? doctor.consultency[0].room : 'Not available'}</Card.Text>
        </Card.Body>
      </Card>
    ))
  ) : (
    <p>No doctors available</p>
  )}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="designation" style={{ margin: "25px" }}>
              Designation
            </label>
            <input
              name="designation"
              id="designation"
              placeholder="Designation of Doctor"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
            <label htmlFor="department" style={{ margin: "30px" }}>
              Department
            </label>
            <input
              name="department"
              id="department"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            <label htmlFor="area" style={{ margin: "30px" }}>
              Area
            </label>
            <input
              name="area"
              id="area"
              placeholder="Doctor's Chamber's Area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />

            <Button
              //type="submit"
              onClick={doDoctorSearch}
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
