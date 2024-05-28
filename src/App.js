import React from 'react';
import './Scss/main.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Logement from './Logement';


function App() {
  return (
    <div class ='body'>
      <Header />
      <Router>
        <Routes>
            <Route exact path="/"  element ={<Home />} />
            <Route exact path="/about"  element ={<About />} />
            <Route exact path="/details/:id" element = {<Logement />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
