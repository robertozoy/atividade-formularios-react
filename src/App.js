import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Sobre from './Sobre';
import Formulario from './Formulario';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;