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
    <input
      placeholder="Criminal Name"
      value={crime.CriminalName}
      onChange={e => setCrime({ ...crime, CriminalName: e.target.value })}
      required
    />
    <input
      placeholder="Details"
      value={crime.Details}
      onChange={e => setCrime({ ...crime, Details: e.target.value })}
      required
    />
    <select
      value={crime.CriminalStatus}
      onChange={e => setCrime({ ...crime, CriminalStatus: e.target.value })}
      required
    >
      <option value="">Select Status</option>
      <option value="Under Investigation">Under Investigation</option>
      <option value="Convicted">Convicted</option>
      <option value="Released">Released</option>
      <option value="Fugitive">Fugitive</option>
    </select>
    <button type="submit">Add Crime</button>
  </form>
  
  );
}

export default CrimeForm;
