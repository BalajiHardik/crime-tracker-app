import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:5000/users?username=${user.username}&password=${user.password}`);
    if (res.data.length > 0) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Username" onChange={e => setUser({ ...user, username: e.target.value })} />
        <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
        <button type="submit">Login</button>
      </form>
      <p>{error}</p>
    </div>
  );
}

export default Login;
