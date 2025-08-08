import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CrimeForm from './components/CrimeForm';
import CrimeList from './components/CrimeList';
import CrimeEdit from './components/CrimeEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <>
            <CrimeForm onAdd={() => window.location.reload()} />
            <CrimeList />
          </>
        } />
        <Route path="/edit/:id" element={<CrimeEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
