import logo from './logo.svg';
import './App.css';
import PartOne from './Components/PartOne';
import Home from './Pages/Home';
import TopicBox from './Components/TopicBox';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './Pages/About';
import Content from './Components/Content';
import { useState } from 'react';
    



function App() {
 return (

  <div>
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<Home/>}></Route>
   
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
