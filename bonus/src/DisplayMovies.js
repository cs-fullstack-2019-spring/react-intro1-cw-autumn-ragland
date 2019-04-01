import React, {Component} from 'react';

class DisplayMovies extends Component {
    render() {
        return (
            <div>
                <h1>Movie List</h1>
                {(this.props.movie).map((value, index) => {
                    return (
                    <div>
                        <p>Title: {value.movieName}</p>
                        <p>Year Released: {value.yearReleased}</p>
                        <p>Genre: {value.genre}</p>
                        <hr/>
                    </div>)
                })}
            </div>);
    }
}

export default DisplayMovies;