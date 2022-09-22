import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  useNavigate
} from "react-router-dom";
import { AuthContext } from '../Providers/Context';


const {REACT_APP_API_KEY} = process.env;

function Home() {
    const [lista, setLista] = useState([]);
    const { pesquisa, setPesquisa } = React.useContext(AuthContext)
    
    const navigation = useNavigate();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}&language=pt-BR&page=1`

    fetch(url)
    .then(res => res.json())
    .then(data => setLista(data.results)) 
  }, [])
  //console.log(lista)

  const handleEnter = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
    }
    
  }

  const handleSearch = (e) => {
    
    if(pesquisa === ''){
      e.preventDefault()
      alert("Campo vazio");
    } 
    /* else{
      navigation(`/search/${pesquisa}`)
    }   */   
  }
  
  return (
    
    <div className='App'>
      <div className="jumbotron jumbotron-fluid">
      <h1 className="display-4">Filmes Populares</h1>
      </div>
      <div className='container'>
      
        <form className="barra">
          <input className="former" 
          type="search" minLength={2}
          onKeyPress={handleEnter} 
          placeholder="Pesquise outros filmes ..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          aria-label="Search"/>
          <Link to={`/search/${pesquisa}`} className="btn" onClick={handleSearch}
           type="submit">Pesquisar</Link>
          
        </form>
      
               
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