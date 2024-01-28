import './App.css';
import Login from './Pages/Login/Login';
import {Route,Routes} from 'react-router-dom'
import Signup from './Pages/Sign Up/Signup';
import UpdatePatientProfile from './Pages/Patient/UpdatePatientProfile';
import CurrentDoctors from './Pages/Patient/CurrentDoctors';
import CreateNavbar from './Components/Navbar';
import PrescriptionUpload2 from './Pages/PrescriptionUpload/PrescriptionUpload2';
import PrescriptionUpload3 from './Pages/PrescriptionUpload/PrescriptionUpload3';
import PrescriptionUpload from './Pages/PrescriptionUpload/PrescriptionUpload';
import Home from './Pages/Home/Home';
import hand from './Images/hand.jpg'
import About from './Pages/Home/About';
import ListOfDoctors from './Pages/Patient/ListofDoctors';
import LoginController from './Pages/LoginController';
function App() {
  return (
    <div className="App" >
      <LoginController />  
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/updateprofile" element={<UpdatePatientProfile/>} />
        <Route path="/currentdoctors" element={<CurrentDoctors/>} />
        <Route path="/prescriptionupload" element={<PrescriptionUpload/>} />
        <Route path="/prescriptionupload2" element={<PrescriptionUpload2/>} />
        <Route path="/prescriptionupload3" element={<PrescriptionUpload3/>} />
        <Route path="/doctorlist" element={<ListOfDoctors/>} />
      </Routes>
    </div>
  );
}

export default App;
