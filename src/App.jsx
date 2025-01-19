import { useEffect, useState } from 'react'
import './App.css'
import MovieBox from './components/movie-box';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Spinner } from 'react-bootstrap';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Banner from './components/banner';

const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=363e248cb36563d9006e02c462197753';
const apiSearch = 'https://api.themoviedb.org/3/search/movie?api_key=363e248cb36563d9006e02c462197753&query';

function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false); // Nuevo estado

  useEffect(() => {

    fetchMovies();

  }, []);

  const fetchMovies = async () => {

    setLoading(true); // Inicia el spinner

    try {

      const res = await fetch(apiUrl);
      const data = await res.json();
      setMovies(data.results);

    } catch (error) {

      console.log('Error fetching movies:', error);

    } finally {

      setLoading(false); // Detiene el spinner

    }
  };

  const searchMovie = async (e) => {

    e.preventDefault();
    setLoading(true); // Inicia el spinner
    setSearchPerformed(true); // Marca la búsqueda como realizada
    try {

      const url = `${apiSearch}=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);


    } catch (error) {

      console.log('Error searching movies:', error);

    } finally {

      setLoading(false); // Detiene el spinner

    }

  }

  const changeHandler = (e) => {

    setQuery(e.target.value);

  }

  return (

    <>


      <NavBar
        searchMovie={searchMovie}
        changeHandler={changeHandler}
        query={query}
      />
      <div>

        {/* Mostrar Banner solo si no se ha realizado una búsqueda */}
        {!searchPerformed && <Banner />}

        {loading ? (

          <div className="spinner-container" style={{ height: '50vh' }}>
            <Spinner animation="border" variant="secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>

        ) 
        : movies.length > 0 ? (

            <div className="container">

              <div className="grid">

                {movies.map((movieReq) => (
                  <MovieBox
                    key={movieReq.id}
                    title={movieReq.title}
                    poster_path={movieReq.poster_path}
                    vote_average={movieReq.vote_average}
                    release_date={movieReq.release_date}
                    overview={movieReq.overview}
                    id={movieReq.id}
                  />
                ))}
                
              </div>

            </div>
        ) : (
          <h2>Sorry!! No movies found.</h2>
        )}

      </div>

      <Footer />

    </>

  )
}

export default App;