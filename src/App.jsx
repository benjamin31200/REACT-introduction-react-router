import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import MyProfile from './components/MyProfile.jsx';
import Navbar from './components/Navbar';

import './style.css';

export default function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
    </Router>
  );
}
