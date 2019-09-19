import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import UpdateForm from "./Movies/UpdateForm";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState({});
  const [movies, setMovies] = useState({movies: []});

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      // .then(res => this.setState({ movies: res.data }))
      .then(response => {
        setMovies({movies: response.data});
        console.log("movies", movies);
      })
      .catch(err => console.log(err.response));
  }, [])

  console.log("got movies", movies);

  return (
    <>
      {/* <SavedList list={savedList} /> */}
      {/* <Route exact path="/" render={props => return <MovieList {...props} movies={movies}/>}*/}
      <Route 
        exact path="/"
        render={props=> {
          return <MovieList {...props} movies={movies} />
        }}
      />
      <Route 
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateForm {...props} movies={movies}/>
        }}
      />
    </>
  );
};

export default App;
