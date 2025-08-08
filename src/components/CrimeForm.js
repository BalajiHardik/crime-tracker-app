import React, { useState } from 'react';
import axios from 'axios';

function CrimeForm({ onAdd }) {
  const [crime, setCrime] = useState({
    CriminalName: '',
    Details: '',
    CriminalStatus: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (crime.CriminalName.length < 5) return alert('Name must be at least 5 characters');
    await axios.post('http://localhost:5000/crimes', crime);
    onAdd();
    setCrime({ CriminalName: '', Details: '', CriminalStatus: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Criminal Name" value={crime.CriminalName} onChange={e => setCrime({ ...crime, CriminalName: e.target.value })} />
      <input placeholder="Details" value={crime.Details} onChange={e => setCrime({ ...crime, Details: e.target.value })} />
      <input placeholder="Status" value={crime.CriminalStatus} onChange={e => setCrime({ ...crime, CriminalStatus: e.target.value })} />
      <button type="submit">Add Crime</button>
    </form>
  );
}

export default CrimeForm;
