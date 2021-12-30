import React from "react";
import {Link} from 'react-router-dom'
import { Card, Button } from "react-bootstrap";
import '../MovieCard/MovieCard.css';
import MovieRating from "../MovieRating/MovieRating";


const MovieCard = ({movie}) => {
  return (
    
    <Card  style={{ width: '20rem', height :'45rem'  }} key={movie.id} className='movieCard'>
      <Card.Img variant="top" src={movie.posterurl} height = "400" />
      <Card.Body>
        <Card.Title>{movie.title} <br/>
        <MovieRating MovieRating={movie.MovieRating}/>
        
        </Card.Title>
        <Card.Text>{movie.discription}</Card.Text>
        <div>
        <Link to={`/Home/${movie.title}`}>
          <Button variant="success">Watch trailer</Button>
          </Link>
          <Button variant="primary">Watch online</Button>
        </div>
      </Card.Body>
    </Card>
      )}
  





export default MovieCard;