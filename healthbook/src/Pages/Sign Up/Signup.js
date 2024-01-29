// import React,{useState} from 'react'
// import {Link} from 'react-router-dom'
// import './Signup.css'
// const Signup = () => {


//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [name, setName] = useState('');

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log(email);
//   }

  
 
//   const doLogin = async (e) => {
//     //e.preventDefault();
//     //console.log("doLogin1");
//     //console.log(username);
//     //console.log(pass);

//     const res = await axios.post("http://localhost:8000/patients/login", {
//       username: username,
//       password: pass,
//     });
//     const data = res.data;
//     //console.log(data.responseCode);
//     if (data.responseCode == 200) {
//       localStorage.setItem("patient_username", username);
//       console.log("Hello bhai");
//       navigate("/");
//     }

//     //console.log("dologin");
//     //console.log(data);
//   };

//   return (
//     <div className="auth-form-container">
//       <h1> HealthBook</h1>
//             <h2>Register</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//             <label htmlFor="name">Username</label>
//             <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your username" />
            
//             <label htmlFor="password">Password</label>
//             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//             <button type="submit" style={{margin:"15px"}}>Sign Up</button>

//             <label htmlFor="passconfirm">Password Confirmation</label>
//             <input value={passconfirm} onChange={(e) => setPass(e.target.value)} type="passconfirm" placeholder="********" id="passconfirm" name="passconfirm" />
//             <button type="submit" style={{margin:"15px"}}>Sign Up</button>


//             <label htmlFor="email">Email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            
//         </form>

//         <div className="text-center">
//         <p>Already have an account?  <Link to="/login" style={{ color: 'white' }}>
//     Login
//   </Link></p>
//       </div>
//         </div>
//   )
// }

// export default Signup