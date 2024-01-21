import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import Signup from '../Sign Up/Signup' //import link from react router dom
const Login = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
}
  return (
    <>
    <div className="auth-form-container">
            <h1> HealthBook</h1>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <div className="text-center">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    
      </div>
     
    </>
  )
}

export default Login