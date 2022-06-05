
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import './App.css';
import Home from './paginas/home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{minHeight: '100vh'}}>
        <Routes>

          <Route path="/home" element={<Home />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;