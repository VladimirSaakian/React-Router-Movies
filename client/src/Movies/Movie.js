import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";

export default function Movie(props) {
   const [movie, setMovie] = useState();

   let id = useRouteMatch().url.split("/").pop();
   // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

   // or use useParams()

   useEffect(() => {
      axios
         .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
         .then((response) => {
            // Study this response with a breakpoint or log statements
            // and set the response data as the 'movie' slice of state
            // console.log(response);
            setMovie(response.data);
         })
         .catch((error) => {
            console.error(error);
         });
      // This effect should run every time time
      // the `id` changes... How could we do this?
   }, [id]);

   // Uncomment this only when you have moved on to the stretch goals

   // const saveMovie = evt => { }
   //* this function is written inline below

   if (!movie) {
      return <div>Loading movie information...</div>;
   }

   const { title, director, metascore, stars } = movie;
   const { saved, setSaved } = props;

   return (
      <div className="save-wrapper">
         <div className="movie-card">
            <h2>{title}</h2>
            <div className="movie-director">
               Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
               Metascore: <strong>{metascore}</strong>
            </div>
            <h3>Actors</h3>

            {stars.map((star) => (
               <div key={star} className="movie-star">
                  {star}
               </div>
            ))}
         </div>
         <div
            className="save-button"
            style={{ cursor: "pointer" }}
            onClick={() => {
               if (!saved.find((i) => i.id === movie.id)) {
                  setSaved(saved.concat(movie));
               }
            }}
         >
            Save
         </div>
      </div>
   );
}
