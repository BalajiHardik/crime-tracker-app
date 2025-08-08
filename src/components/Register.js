import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [user, setUser] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get('http://localhost:5000/users?username=' + user.username);
    if (res.data.length > 0) {
      setMessage('User already exists');
    } else {
      await axios.post('http://localhost:5000/users', user);
      setMessage('Registered successfully');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" onChange={e => setUser({ ...user, username: e.target.value })} />
        <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Register;
