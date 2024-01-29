import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import CreateNavbar from "../Components/Navbar";
import Login from "../Pages/Login/Login";

const ParentComponent = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic for handling successful login
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <CreateNavbar isLoggedIn={isLoggedIn} />
      {/* <Routes>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      </Routes> */}
    </div>
  );
};

export default ParentComponent;
