import React, { useState, useEffect } from "react";
import axios from "axios";



const UpdateForm = props => {



    const [myMovie, setMyMovie] = useState({title: "", director: "", metascore: "", stars: []});
    const [updates, setUpdates] = useState({title: "", director: "", metascore: "", stars: []});

    const { match, movies } = props;
    useEffect(() => {
        const id = match.params.id;
        const movieToUpdate = movies.movies.find(movie => `${movie.id}` === id);
        if (movieToUpdate) {
            setMyMovie(movieToUpdate)
        } else {
            console.log("no match");
        }
    }, []);

    //event handlers
    const handleChanges = event => {
        setUpdates({...myMovie, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event, movie) => {
        event.preventDefault();
        setMyMovie({...myMovie, updates})
        axios.put(`http://localhost:5000/api/movies/${movie.id}`, updates)
            .then(result => {
                console.log("It putted");
                props.getThoseMovies();
                props.history.push("/");
            })
            .catch(error => console.log(error));
    }

    //output
    return (
        <div className="form-wrapper">
            <h3>Update {myMovie.title}</h3>
        <form onSubmit={(event) => handleSubmit(event, myMovie)}>
            <input type="text" name="title" placeholder={myMovie.title} value={updates.title} onChange={event=> handleChanges(event)}/>
            <input type="text" name="director" placeholder={myMovie.director} value={updates.director} onChange={event => handleChanges(event)}/>
            <input type="text" name="metascore" placeholder={myMovie.metascore} value={updates.metascore} onChange={event => handleChanges(event)}/>
            <input type="text" name="stars" placeholder={myMovie.stars} value={updates.stars} onChange={event => handleChanges(event)}/>
            <button>Confirm edits!</button>
        </form>
        </div>
    );
}

export default UpdateForm;