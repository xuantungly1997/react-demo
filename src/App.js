import React from 'react';
import './App.css';
import Home from './component/home'
import Product from './component/product'
import Contact from './component/contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './component/header'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
