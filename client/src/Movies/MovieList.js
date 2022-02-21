import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

export default function MovieList(props) {
   return (
      <div className="movie-list">
         {props.movies.map((movie) => (
            <MovieDetails key={movie.id} movie={movie} />
         ))}
      </div>
   );
}

function MovieDetails(props) {
   const { title, director, metascore, id } = props.movie;
   const { path, url } = useRouteMatch();
   //  console.log(path, url);

   return (
      <div className="movie-card">
         <NavLink
            to={"/movies/" + id}
            style={{ textDecoration: "none", color: "inherit" }}
         >
            {" "}
            <h2>{title}</h2>
            <div className="movie-director">
               Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
               Metascore: <strong>{metascore}</strong>
            </div>
         </NavLink>
      </div>
   );
}
