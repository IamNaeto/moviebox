import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Movies from '../components/Movies.jsx';
import "virtual:uno.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from '../components/Footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App path="/"/>
      <Movies />
      <Footer />
    </Router>
  </React.StrictMode>,
)
