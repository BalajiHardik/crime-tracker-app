import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CrimeList() {
  const [crimes, setCrimes] = useState([]);

  const fetchCrimes = async () => {
    const res = await axios.get('http://localhost:5000/crimes');
    setCrimes(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/crimes/${id}`);
    fetchCrimes();
  };

  useEffect(() => {
    fetchCrimes();
  }, []);

  return (
    <div>
      <h2>Crime Records</h2>
      <ul>
        {crimes.map(c => (
          <li key={c.id}>
            {c.CriminalName} - {c.CriminalStatus}
            <Link to={`/edit/${c.id}`}>Edit</Link>
            <button onClick={() => handleDelete(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrimeList;
