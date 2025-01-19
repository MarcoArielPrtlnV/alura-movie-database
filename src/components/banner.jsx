import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import '../css/banner.css';

const apiImg = 'https://image.tmdb.org/t/p/original/';
const apiUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=363e248cb36563d9006e02c462197753';
const Banner = ({ isSearching }) => {

    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(()=> {

        const fetchUpcomingMovies = async () => {

            try {

                const response = await fetch(apiUpcoming);
                const data = await response.json();
                setUpcomingMovies(data.results.slice(0, 5));

            } catch(error) {

                console.log("Error fetching upcoming movies", error);
            }
        }

        fetchUpcomingMovies();

    }, []);


    if (isSearching) {
        return null;
    }




    return (

        
        <div className="banner"> 

            <Carousel interval={3000} slide>

                {
                    upcomingMovies.map((movie)=> (

                        <Carousel.Item key={movie.id}>
                            <img 

                                className="d-block w-100"
                                src={`${apiImg}${movie.backdrop_path}`}
                                alt={movie.title}
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                            
                            
                            />

                            <Carousel.Caption>

                                <h3>{movie.title}</h3>
                                <p>{movie.overview}</p>

                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }


            </Carousel>

        </div>
    )
}   

export default Banner;