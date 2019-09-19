import React, { useState } from "react";
import axios from "axios";



const AddMovies = props => {

    const [newMovie, setNewMovie] = useState({title: "", director: "", metascore: "", stars: []});


    const handleChanges = e => {
        setNewMovie({...newMovie, [e.target.name]: e.target.value})
    }

    const addNewMovie = (e, props) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/movies", newMovie)
            .then(res => {
                console.log("I added");
                props.getThoseMovies();
            })
            .catch(err=> console.log(err));
    }
    
    return (
        <div className="form-container">
        <form onSubmit={e => addNewMovie(e)}>
            <input 
                type="text" 
                name="title" 
                placeholder="title" 
                value={newMovie.title}
                onChange={e => handleChanges(e)}
            />
            <input 
                type="text" 
                name="director" 
                placeholder="director" 
                value={newMovie.director}
                onChange={e => handleChanges(e)}
            />
            <input 
                type="text" 
                name="metascore" 
                placeholder="metascore" 
                value={newMovie.metascore}
                onChange={e => handleChanges(e)}
            />
            <input 
                type="text" 
                name="stars" 
                placeholder="stars"
                value={newMovie.stars}
                onChange={e => handleChanges(e)}
            />
            <button>Add Movie!</button>
        </form>

        </div>
    )
}

export default AddMovies;