import './App.css';
import Login from './Pages/Login/Login';
import {Route,Routes} from 'react-router-dom'
import Signup from './Pages/Sign Up/Signup';
import UpdatePatientProfile from './Pages/Patient/UpdatePatientProfile';
import CurrentDoctors from './Pages/Patient/CurrentDoctors';
import PrescriptionUpload from './Pages/PrescriptionUpload/PrescriptionUpload';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/updateprofile" element={<UpdatePatientProfile/>} />
        <Route path="/currentdoctors" element={<CurrentDoctors/>} />
        <Route path="/prescriptionupload" element={<PrescriptionUpload/>} />
      </Routes>
    </div>
  );
}

export default App;
