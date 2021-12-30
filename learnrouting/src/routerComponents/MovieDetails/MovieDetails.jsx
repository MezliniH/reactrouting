import React, { useState, useEffect } from "react";
import MovieData from "../Data/MovieData";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import {FcFilmReel} from 'react-icons/fc';
import "./MovieDetails.css";

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(MovieData.find((movie) => movie.title === match.params.title));
  }, [match.params.title]);
  return (
    <div >
      <h1 id='movieTrailer'>Movie Trailer <FcFilmReel /></h1>
      <div className='trailerCont'>
      <div className="trailer">
        <h2>{movie.title}</h2>
        <iframe
          title={movie.title}
          width="760"
          height="480"
          src={movie.trailerurl}
          frameBorder="0"
          allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>{movie.discription}</p>
        <hr />
        <div className='butn'>
        <Link to="/Home">
          <Button color="warning">return</Button>
        </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MovieDetails;