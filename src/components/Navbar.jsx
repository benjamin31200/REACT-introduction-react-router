import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/MyProfile">My Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
