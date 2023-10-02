import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sample from './components/Sample';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sample />} />
        <Route path="cardId/:cardId" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
