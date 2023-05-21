import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrollWebsite from './TrollWebsite'; // Import the TrollWebsite component

ReactDOM.render(
  <React.StrictMode>
    <TrollWebsite /> {/* Render the TrollWebsite component */}
  </React.StrictMode>,
  document.getElementById('root')
);
