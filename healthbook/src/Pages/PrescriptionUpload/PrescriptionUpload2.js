import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './PrescriptionUpload.css'
const PrescriptionUpload2 = () => {

    const [symptom, setSymptom] = useState('');
    const [symptomsList, setSymptomsList] = useState([]);

    const handleInputChange = (e) => {
        setSymptom(e.target.value);
      };
    
    const handleAddSymptom = () => {
    if (symptom !== '') {
        setSymptomsList([...symptomsList, symptom]);
        setSymptom(''); // Clear the input field after adding
    }
    };


  const handleSubmit = (e) => {
      e.preventDefault();
    //   console.log(email);
  }

  return (
    <div>
      <h1> HealthBook</h1>
            <h2>Report Upload</h2>
        <form className="form-row" onSubmit={handleSubmit}>
        <div>
      <input
        type="text"
        value={symptom}
        onChange={handleInputChange}
        placeholder="Enter a symptom"
      />
      <button onClick={handleAddSymptom}>Add</button>

      <ul>
        {symptomsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

        </form>
        <div>
            
            <Link to="/prescriptionupload">Next Page</Link>
            
        </div>
    </div>
  )
}

export default PrescriptionUpload2