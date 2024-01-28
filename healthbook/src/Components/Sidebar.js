import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Link1</Link></li>
        <li><Link to="/form">Link2</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;