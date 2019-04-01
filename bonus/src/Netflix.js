import React, { Component } from 'react';
import DisplayMovies from "./DisplayMovies";

var Movie = [
    {
        movieName:'Star Wars',
        yearReleased:'1990',
        genre:'Science Fiction',
    },
    {
        movieName:'Up',
        yearReleased:'2015',
        genre:'Sad',
    },
    {
        movieName:'Caption Marvel',
        yearReleased:'2019',
        genre:'SuperHero',
    }
];

class Netflix extends Component {
    render() {
        return (
            <DisplayMovies movie={Movie}/>
        );
    }
}

export default Netflix;