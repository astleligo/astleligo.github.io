import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Routes>
      {/* Home/Main page */}
      <Route path="/" element={<MainPage />} />
      {/* About page */}
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
