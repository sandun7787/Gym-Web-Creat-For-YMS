import logo from './logo.svg';
import './App.css';
import PartOne from './Components/PartOne';
import Home from './Pages/Home';
import TopicBox from './Components/TopicBox';
import { BrowserRouter, Form, Route } from 'react-router-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './Pages/About';
import Content from './Components/Content';
import { useState } from 'react';
    



function App() {

  const[count,setCount]=useState(0);

  
  const increment =() =>(
    //count+=2
    setCount(count+1)
  );

  const decrement =() =>(
    //count-=2
    setCount(count-1)
  );
  return (
    <>
    <span className='title'>
      my country
    </span>
    <p className='subTitle'>the count is {count}</p>
    <button onClick={decrement} className='button'>+</button>
    <button onClick={increment} className='buttpon'>-</button>
    </>

  );
}

export default App;
