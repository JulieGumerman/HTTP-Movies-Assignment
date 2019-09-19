import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
// import NewMovieForm from "./NewMovieForm";

const MovieList = props => {

  console.log("from MovieList", props.movies);
    return (
      <>
      <div className="movie-list">
        {props.movies.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
      </>
    );
}

export default MovieList;

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}
