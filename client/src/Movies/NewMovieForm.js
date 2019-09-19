import React from "React";

const newMovieForm = () => {

    return (
        <div className="form-container">
        <form>
            <input type="text" name="title" placeholder="title" />
            <input type="text" name="director" placeholder="director"/>
            <input type="text" name="metascore" placeholder="metascore"/>
            <input type="text" name="stars" placeholder="stars"/>
        </form>

        </div>
    )
}

export default newMovieForm