import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({movie,titleSearch,rateSearch}) => {
  return (
    <div>
      {movie
        .filter(
          (el) =>
            el.title.toLowerCase().includes(titleSearch.toLowerCase()) &&
            el.rate >= rateSearch
        )
        .map((el) => (<MovieCard key={el.id} movie={el} />
        ))}
    </div>
  );
}
   


export default MovieList;