import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Container from './Components/Container';
import CardContainer from './Components/CardContainer';
import Banner from './Components/Banner';
import Instruction from './Components/Instruction';
import Company from './Components/Company';
import GetInTouch from './Components/GetInTouch';
import Footer from './Components/Footer';
import { Routes , Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/container' element={<Container />} />
        <Route path='/cardContainer' element={<CardContainer />} />
        <Route path='/banner' element={<Banner />} />
        <Route path='/instruction' element={<Instruction />} />
        <Route path='/company' element={<Company />} />
        <Route path='/getInTouch' element={<GetInTouch />} />
        <Route path='/footer' element={<Footer />} />

      </Routes>
      
    </>
  );
}

export default App;
