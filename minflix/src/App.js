import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<React.Fragment><Navigation /><Home /></React.Fragment>} />
        <Route path="/about" element={<React.Fragment><Navigation /><About /></React.Fragment>} />
        <Route path="/movie-detail" element={<React.Fragment><Navigation /><Detail /></React.Fragment>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
