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
import NotFound from './NotFound';


function App() {
  return (
    <body>
      <div className='wrapper'>
        <div class ='content'>
          <Header />
            <Router>
              <Routes>
                  <Route exact path="/"  element ={<Home />} />
                  <Route exact path="/about"  element ={<About />} />
                  <Route exact path="/details/:id" element = {<Logement />} />
                  <Route path='*' element = {<NotFound />}/>
              </Routes>
            </Router>
        </div>
      <Footer />
      </div>
    </body>
  );
}

export default App;
