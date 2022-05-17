import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

// Components
import HomePage from './components/HomePage';

function App() {
  return (
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
  );
}

export default App;
