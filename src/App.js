import logo from './logo.svg';
import './App.css';
import PartOne from './Components/PartOne';
import Home from './Pages/Home';
import TopicBox from './Components/TopicBox';


function App() {
  return (
    <div className="App">
      <h1>this is my first react project</h1>

    <TopicBox food="koththu" price="rs 250"
   

    />
    <TopicBox food="Rice"   price="rs 250"/>
    <TopicBox food="hopers"  price="rs 250"/>
    </div>
  );
}

export default App;
