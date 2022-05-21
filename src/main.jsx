import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import Router
import { BrowserRouter as Router } from 'react-router-dom';

// Wrap our application inside of router to enable using router
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
