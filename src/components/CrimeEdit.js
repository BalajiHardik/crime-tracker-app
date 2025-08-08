import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function CrimeEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crime, setCrime] = useState({ CriminalName: '', Details: '', CriminalStatus: '' });

  useEffect(() => {
    axios.get(`http://localhost:5000/crimes/${id}`).then(res => setCrime(res.data));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/crimes/${id}`, crime);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleUpdate}>
      <input value={crime.CriminalName} onChange={e => setCrime({ ...crime, CriminalName: e.target.value })} />
      <input value={crime.Details} onChange={e => setCrime({ ...crime, Details: e.target.value })} />
      <input value={crime.CriminalStatus} onChange={e => setCrime({ ...crime, CriminalStatus: e.target.value })} />
      <button type="submit">Update</button>
    </form>
  );
}

export default CrimeEdit;
