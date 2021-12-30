import React , {useState} from 'react'
import { Switch  , Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieData from '../../learnrouting/src/routerComponents/Data/MovieData';
import MovieDetails from '../../learnrouting/src/routerComponents/MovieDetails/MovieDetails';
import FilterMovies from './routerComponents/FilterMovie/FilterMovie';
import MovieList from "./routerComponents/MovieList/MovieList";
import AddMovie from './routerComponents/AddMovie/AddMovie';
import Trailer from './routerComponents/Trailer/Trailer';



function App() {
  const [movie, setMovie] = useState(MovieData);
  const [titleSearch, setTitleSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);
  const handleAdd = (newMovie) => {
    if (
      newMovie.title!=="" &&
      newMovie.discription!=="" &&
      newMovie.date!=="" &&
      newMovie.posterurl!==""&& 
      newMovie.rate!==0
    ) {
      setMovie([...movie, newMovie]);
    }else{
      alert('PLease follow form instructions!')
    }
   
  };
  return (
   <div>
      <div className ="header">
      <Link to="/Home"> 
      <h5>Home of real cinema</h5>
      </Link>
      </div>
      <Switch>
        
      <Route exact path="/Home">
      <div>
     <Trailer/>
     </div>
      
      <MovieList
        rateSearch={rateSearch}
        titleSearch={titleSearch}
        movie={movie}
      />
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%" , background:'black'}}>
      <AddMovie handleAdd={handleAdd} />
        <FilterMovies
          rate={rateSearch}
          setRateSearch={setRateSearch}
          setTitleSearch={setTitleSearch}
        />
      </div>

    </Route>

    <Route path={`/Home/:title`} component={MovieDetails}/>
   

    </Switch>
      </div>
    
  );
}

export default App;