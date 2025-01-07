import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import ProductDetails from './components/ProductDetails.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
