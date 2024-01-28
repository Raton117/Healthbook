import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './PrescriptionUpload.css'
const PrescriptionUpload2 = () => {

    const [symptom, setSymptom] = useState('');
    const [symptomsList, setSymptomsList] = useState([]);
    const [test, setTest] = useState('');
    const [testList, setTestList] = useState([]);
    const [advice, setAdvice] = useState('');
    const [adviceList, setAdviceList] = useState([]);
    const [diagonosis, setDiagonosis] = useState('');
    const [diagonosisList, setDiagonosisList] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

    const handleSymtomChange = (e) => {
        setSymptom(e.target.value);
      };

    const handleAdviceChange = (e) => {
        setAdvice(e.target.value);
      };

    const handleDiagonosisChange = (e) => {
        setDiagonosis(e.target.value);
      };  

    

    const handleTestChange = (e) => {
      setTest(e.target.value);
    };

    const handleAddTest = () => {
      if (test !== '') {
          setTestList([...testList, test]);
          setTest(''); // Clear the input field after adding
      }
      };

    const handleAddAdvice = () => {
        if (advice !== '') {
            setAdviceList([...adviceList, advice]);
            setAdvice(''); // Clear the input field after adding
        }
        };
    
    const handleAddDiagonosis = () => {
        if (diagonosis !== '') {
            setDiagonosisList([...diagonosisList, diagonosis]);
            setDiagonosis(''); // Clear the input field after adding
        }
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

    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }
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
        onChange={handleSymtomChange}
        placeholder="Enter a symptom"
      />
      <button onClick={handleAddSymptom}>Add</button>

      <ul>
        {symptomsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        value={test}
        onChange={handleTestChange}
        placeholder="Enter a Test"
      />
      <button onClick={handleAddTest}>Add</button>

      <ul>
        {testList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    {/* <div>
      <input
        type="text"
        value={test}
        onChange={handleTestChange}
        placeholder="Enter a Test"
      />
      <button onClick={handleAddTest}>Add</button>

      <ul>
        {testList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div> */}
    <div>
      <input
        type="text"
        value={advice}
        onChange={handleAdviceChange}
        placeholder="Enter a Advice"
      />
      <button onClick={handleAddAdvice}>Add</button>

      <ul>
        {adviceList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    <div>
      <input
        type="text"
        value={diagonosis}
        onChange={handleDiagonosisChange}
        placeholder="Enter a Diagonosis"
      />
      <button onClick={handleAddDiagonosis}>Add</button>

      <ul>
        {diagonosisList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit">Upload Report</button>
        </form>
        <div>
            
            <Link to="/prescriptionupload3">Next Page</Link>
            
        </div>
    </div>
  )
}

export default PrescriptionUpload2