import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18, use `react-dom/client`
import App from './App'; // Import the main App component

// Create the root of the React app and render the App component into it
const root = ReactDOM.createRoot(document.getElementById('root')); // React 18 syntax
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);