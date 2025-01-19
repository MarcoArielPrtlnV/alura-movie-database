import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { FaImdb } from "react-icons/fa";
import '../css/movie-box.css';

const apiImg = 'https://image.tmdb.org/t/p/w500/';
const apiVideos = 'https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=363e248cb36563d9006e02c462197753';
const MovieBox = ({ id, title, poster_path, vote_average, release_date, overview }) => {

    const [show, setShow] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState(null);

    const handleShow = async () => {

        setShow(true);

        try {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=363e248cb36563d9006e02c462197753`);

            const data = await res.json();

            const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
            setTrailerUrl(trailer ? `https://www.youtube.com/embed/${trailer.key}` : null);

        } catch (error) {

            console.log("Error fetching trailer:", error);
        }
    }

    const handleClose = () => {

        setShow(false);
        setTrailerUrl(null);

    };


    return (
        <div className="movie-box card text-center bg-secondary mb-3" style={{ transition: 'transform 0.3s ease-in-out' }}>
            <div className="card-body">

                <img
                    className="card-img-top movie-image"
                    src={`${apiImg}${poster_path}`}
                    alt={title}
                    style={{ transition: 'transform 0.3s ease-in-out' }}
                />

                <h3 style={{ textAlign: 'center', fontSize: '1rem', marginTop: '1rem' }} >{title}</h3>

                <div className="card-body">

                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={handleShow}
                        style={{ transition: 'background-color 0.3s ease' }}
                    >
                        View More
                    </button>

                    <Modal show={show} onHide={handleClose} size="lg" centered>

                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            <img
                                className="card-img-top"
                                style={{ width: '20rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                                src={`${apiImg}${poster_path}`}
                                alt={title}
                            />
                            <h3 style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '2rem' }}>{title}</h3>
                            <h4 style={{ fontSize: '1.2rem' }}>
                                <FaImdb size={25} style={{ color: "#f5c518", marginRight: "8px" }} />
                                {vote_average}
                            </h4>
                            <h5>Release Date: {release_date}</h5>
                            <br />
                            <h6>Overview:</h6>
                            <p>{overview}</p>
                            

                            {trailerUrl ? (

                                <div className="trailer-container">
                                    <h6>Watch Trailer:</h6>
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src={trailerUrl}
                                        title="Movie Trailer"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>

                                </div>
                            ) : (
                                <p>No trailer available for this movie.</p>
                            )}

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>

                    </Modal>
                </div>

            </div>

        </div>
    );
};

export default MovieBox;