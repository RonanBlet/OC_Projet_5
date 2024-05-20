import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Router>
        <Routes>
            <Route exact path="/"  element ={<Home />}/>
            <Route path="/about"  element ={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
