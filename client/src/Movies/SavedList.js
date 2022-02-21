import React from 'react';
import { NavLink } from "react-router-dom";

export default function SavedList(props) {
  return (
     <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map((movie) => (
           <span key={movie.title + movie.id} className="saved-movie">
              <NavLink
                 to={"/movies/" + movie.id}
                 style={{ textDecoration: "none", color: "inherit" }}
              >
                 {" "}
                 {movie.title}{" "}
              </NavLink>
           </span>
        ))}
        <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
           <div className="home-button">Home</div>
        </NavLink>
     </div>
  );
}
