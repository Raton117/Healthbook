import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import doc1 from '../../Images/doc1.jpg'
import Signup from '../Sign Up/Signup' //import link from react router dom
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin();
    // console.log(username);
    // console.log(pass);
}

const doLogin = async(e)=> {
  //e.preventDefault();
  //console.log("doLogin1");
  //console.log(username);
  //console.log(pass);

  const res=await axios.post("http://localhost:8000/patients/login",   {username:username, password:pass});
  const data = res.data;
  //console.log(data.responseCode);
  if (data.responseCode == 200) {
    localStorage.setItem('patient_username', username);
    console.log('Hello bhai');
    navigate("/");
  }

  
  //console.log("dologin");
  //console.log(data);
}
  return (
    <>
    <div className="auth-form-container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>HealthBook</h1>
        <h2>Login</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          backgroundImage: `url(${doc1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '350px',
          height: '350px',
        }}></div>

        <div>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit" style={{ margin: "15px" }} >Log In</button>
          </form>
        </div>
      </div>

      <div className="text-center">
        <p>Don't have an account? <Link to="/signup" style={{ color: 'white' }}>Sign up</Link></p>
      </div>
    </div>
  
     
    </>
  )
}

export default Login