import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route path="/about"><About/></Route>
          <Route path="/contact"><Contact/></Route>
          </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
