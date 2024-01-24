import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './PrescriptionUpload.css'

function PrescriptionUpload3() {
  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState({
    medicineName: '',
    mealTiming: '',
    mealTypes: {
      breakfast: false,
      lunch: false,
      dinner: false
    },
    description: '',
    duration: ''
  });

  const handleInputChange = (e) => {
    if (e.target.name === 'breakfast' || e.target.name === 'lunch' || e.target.name === 'dinner') {
      setNewMedication({
        ...newMedication,
        mealTypes: {
          ...newMedication.mealTypes,
          [e.target.name]: e.target.checked
        }
      });
    } else {
      setNewMedication({
        ...newMedication,
        [e.target.name]: e.target.value
      });
    }
  };

  const addMedication = () => {
    setMedications([...medications, newMedication]);
    setNewMedication({
      medicineName: '',
      mealTiming: '',
      mealTypes: { breakfast: false, lunch: false, dinner: false },
      description: '',
      duration: ''
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the medications data here
    console.log(medications);
    // You can send this data to a backend or store it as needed
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Medication</h2>

        <label>Medicine Name:</label>
        <input 
          type="text" 
          name="medicineName"
          value={newMedication.medicineName} 
          onChange={handleInputChange} 
        />

        <label>Meal Timing:</label>
        <select 
          name="mealTiming"
          value={newMedication.mealTiming} 
          onChange={handleInputChange}>
          <option value="">Select...</option>
          <option value="before">Before Meal</option>
          <option value="after">After Meal</option>
        </select>

        <label>Meal Types:</label>
        <div>
          <label>
            <input 
              type="checkbox" 
              name="breakfast"
              checked={newMedication.mealTypes.breakfast} 
              onChange={handleInputChange} 
            /> Breakfast
          </label>
        </div>
        <div>
          <label>
            <input 
              type="checkbox" 
              name="lunch"
              checked={newMedication.mealTypes.lunch} 
              onChange={handleInputChange} 
            /> Lunch
          </label>
        </div>
        <div>
          <label>
            <input 
              type="checkbox" 
              name="dinner"
              checked={newMedication.mealTypes.dinner} 
              onChange={handleInputChange} 
            /> Dinner
          </label>
        </div>

        <label>Description:</label>
        <textarea 
          name="description"
          value={newMedication.description} 
          onChange={handleInputChange} 
        />

        <label>Duration (in days):</label>
        <input 
          type="number" 
          name="duration"
          value={newMedication.duration} 
          onChange={handleInputChange} 
        />

        <button type="button" onClick={addMedication}>Add Medication</button>
        <button type="submit">Submit All Medications</button>
      </form>

      <h2>Medications List</h2>
      <ul>
        {medications.map((med, index) => (
          <li key={index}>
            {med.medicineName} - {med.mealTiming} - 
            {Object.entries(med.mealTypes)
              .filter(([key, value]) => value)
              .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
              .join(', ')} - 
            {med.description} - {med.duration} days
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrescriptionUpload3;
