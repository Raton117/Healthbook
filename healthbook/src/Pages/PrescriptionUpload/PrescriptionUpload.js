import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './PrescriptionUpload.css'
const PrescriptionUpload = () => {

  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [address, setAdress] = useState('');
  const [bp, setBp] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [hospital, setHospital] = useState('');
  const [contunuation, setContunuation] = useState('');
  const [notes, setNotes] = useState('');


  const handleSubmit = (e) => {
      e.preventDefault();
    //   console.log(email);
  }

  return (
    <div className="body">
      <h1> HealthBook</h1>
            <h2>Report Upload</h2>
        <form className="form-row" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="age">Age</label>
                <input value={age} name="age" onChange={(e) => setAge(e.target.value)}type="text" id="age" placeholder=""  />
                <label htmlFor="weight">Weight</label>
                <input value={weight} onChange={(e) => setWeight(e.target.value)}type="text" id="weight" placeholder="" name="weight" />
            </div>

            <div>
                <label htmlFor="address">Address</label>
                <input value={address} onChange={(e) => setAdress(e.target.value)} type="text" placeholder="" id="address" name="address" />
                <label htmlFor="bp">Blood Pressure</label>
                <input value={bp} onChange={(e) => setBp(e.target.value)} type="text" placeholder="" id="bp" name="bp" />
            </div>

            <div>
                <label htmlFor="doctorname">Doctor Name</label>
                <input value={doctorName} onChange={(e) => setDoctorName(e.target.value)} type="text" placeholder="" id="doctorname" name="doctorname" />
                <label htmlFor="specialist">Specialist</label>
                <input value={specialist} onChange={(e) => setSpecialist(e.target.value)} type="text" placeholder="" id="specialist" name="specialist" />
            </div>

            <div>
                <label htmlFor="hospital">Hospital</label>
                <input value={hospital} onChange={(e) => setHospital(e.target.value)} type="text" placeholder="" id="hospital" name="hospital" />
                <label htmlFor="contunuation">Contunuation</label>
                <input value={contunuation} onChange={(e) => setContunuation(e.target.value)} type="text" placeholder="" id="contunuation" name="contunuation" />
            </div>

            <div>
                <label htmlFor="notes">Notes</label>
                <input value={notes} onChange={(e) => setNotes(e.target.value)} type="text" placeholder="" id="notes" name="notes" />
            </div>


        </form>
        <div>
            
            <Link to="/prescriptionupload2">Next Page</Link>
            
        </div>
    </div>
  )
}

export default PrescriptionUpload