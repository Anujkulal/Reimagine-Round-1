import { useState } from 'react'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cars from './components/cars/Cars';
import './App.css'


const App = () => {

  return (
    <div>
      <Header />
      <Cars />
      <Footer />
    </div>
  );
};

export default App