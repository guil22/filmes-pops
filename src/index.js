import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Paginas/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Detalhes from './Paginas/Detalhes';
import Filme from './Paginas/Filme';
import { AuthProvider } from './Providers/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthProvider>
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/search/:title' element= {<Filme />} />
      <Route path='/:id' element= {<Detalhes />} />
    </Routes> 
    </AuthProvider>
  </Router>
);


