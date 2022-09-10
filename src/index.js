import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Paginas/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Detalhes from './Paginas/Detalhes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/:id' element= {<Detalhes />} />
    </Routes> 
    
  </Router>
);


