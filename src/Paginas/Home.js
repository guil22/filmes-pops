import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Detalhes from './Detalhes';


function Home() {
    const [lista, setLista] = useState([]);
    const [filmeEsc, setFilmeEsc] = useState('');
    const {REACT_APP_API_KEY} = process.env;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}&language=pt-BR&page=1`

    fetch(url)
    .then(res => res.json())
    .then(data => setLista(data.results)) 
  }, [])
  //console.log(lista)
  
  return (
    
    <div className='App'>
      <div class="jumbotron jumbotron-fluid">
      <h1 className="display-4">Filmes Populares</h1>
      </div>
      <div className='container'>
      
         
      <div className='filmes'>
      {lista.map(filme => {
          return(
          <div className="card" key={filme.id} >
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt="..."></img>
              <div className="card-body">
              <h5 className="card-title">{filme.title} </h5>
                <Link to= {`/${filme.id}`} className="btn ">Detalhes</Link>
              
              </div>
          </div>
        
        )
        
        })} 
        
      </div>
      </div>
      <footer>Guilherme Bernardes 2022 </footer>
   </div>
   
  );
}

export default Home;