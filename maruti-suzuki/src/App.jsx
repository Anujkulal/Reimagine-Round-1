import { useState } from 'react'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cars from './components/cars/Cars';
import './App.css'
import Counter from './components/counter-body3/Counter';
import Values from './components/value-body2/Values';

const App = () => {

  return (
    <div>
      <Header />
      <Cars />

      <Values/>
      <Counter/>
      <Footer />
    </div>
  );
};

export default App