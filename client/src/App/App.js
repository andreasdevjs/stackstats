// Basic
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './Pages/Home/Home';

// Fonts
import './Assets/Fonts/Gilroy/Gilroy-Regular.otf';
import './Assets/Fonts/Gilroy/Gilroy-Semibold.otf';

// Base CSS
import './App.css';

// Main App
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
