import React from 'react'
import  {Link} from 'react-router-dom'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
const CreateNavbar = () => {
  return (
  
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{ padding: '15px' }}>HealthBook</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={{ padding: '10px' }}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"style={{ padding: '10px' }}>Prescriptions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"style={{ padding: '10px' }}>Tests</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"style={{ padding: '10px' }}>Current Treatments</a>
          </li>
        </ul>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/login" className="nav-link active" aria-current="page" href="#"  style={{ paddingLeft: '820px' }}>Log In</Link>
          </li>
          <li className="nav-item">
          <Link to="/signup" className="nav-link active" aria-current="page" style={{ paddingLeft: '10px' }}>
    Sign Up
  </Link>
          </li>
          
          </ul>
      </div>
    </div>
  </nav>
   
    )
}

export default CreateNavbar