import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App() {
   const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
   const [movieList, setMovieList] = useState([]);

   useEffect(() => {
      const getMovies = () => {
         axios
            .get("http://localhost:5001/api/movies") // Study this endpoint with Postman
            .then((response) => {
               // Study this response with a breakpoint or log statements
               //  console.log(response.data);
               setMovieList(response.data);
               // and set the response data as the 'movieList' slice of state
            })
            .catch((error) => {
               console.error("Server Error", error);
            });
      };
      getMovies();
   }, []);

   const addToSavedList = (id) => {
      // This is stretch. Prevent the same movie from being "saved" more than once
   };

   return (
      <div>
         <SavedList list={saved} />
         {/* {console.log(movieList)} */}
         <Route exact path={"/"}>
            {movieList.length === 0 ? (
               <h1> Loading... </h1>
            ) : (
               <MovieList movies={movieList}></MovieList>
            )}
         </Route>

         <Route path={"/movies/:movieId"}>
            <Movie saved={saved} setSaved={setSaved}></Movie>
         </Route>
      </div>
   );
}

