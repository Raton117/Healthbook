import React,{useState} from 'react'

const UpdatePatientProfile = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [date, setDate] = useState('');
    
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
  }

  return (
    <div className="auth-form-container">
    <h2>Update Profile</h2>
<form className="register-form" onSubmit={handleSubmit}>
    <label htmlFor="name">Username</label>
    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Username" />

    <label htmlFor="email">Email</label>
    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

    <label htmlFor="password">Password</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

    <label htmlFor='city'>City</label>
    <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Your City" id="city" name="city" />

    <label htmlFor='area'>Area</label>
    <input value={area} onChange={(e) => setArea(e.target.value)} type="text" placeholder="Your Area" id="area" name="area" />

    <label htmlFor='date'>Date of Birth</label>
    <input value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder="Your Date of Birth" id="date" name="date" />

    <button type="submit">Update</button>
</form>
</div>
  )
}

export default UpdatePatientProfile