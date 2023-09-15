import React from 'react'
import ReactDOM from 'react-dom/client'
import "virtual:uno.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movies />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
