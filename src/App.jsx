import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Travel from './pages/Travel';
import Stay from './pages/Stay';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import './App.css';

import Details from './pages/Details';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/details/:id" element={<Details />} />
        
      </Routes>
    </div>
  );
}

export default App;
