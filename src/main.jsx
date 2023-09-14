import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "virtual:uno.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from '../components/Movies.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<Movies />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
