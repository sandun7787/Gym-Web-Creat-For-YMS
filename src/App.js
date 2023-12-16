import logo from './logo.svg';
import './App.css';
import PartOne from './Components/PartOne';
import Home from './Pages/Home';
import TopicBox from './Components/TopicBox';
import { BrowserRouter, Form, Route } from 'react-router-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './Pages/About';
import Content from './Components/Content';
    



function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route  exact path ="/">
          <home/>
        </Route>

        <Route path="/About">
          <About/>
        </Route>

        <Route path="/Content">
          <Content/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
