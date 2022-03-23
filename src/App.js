import React from 'react';

import { useState, useEffect } from 'react'

import SearchIcon from './search.svg'

import MovieCard from './MovieCard';

import './App.css'
// http://www.omdbapi.com/?i=tt3896198&apikey=1a3e3932

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=1a3e3932'

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`)
        const data = await res.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Star Wars')
    }, [])
    return (
        <div className="app">
           <h1>Mashchenko's Theater</h1> 
           <div className="search">
               <input 
               placeholder="Search for movies"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' ? searchMovies(searchTerm) : console.log('Слава Украине 😀')}
               />
               <img 
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
               />
           </div>

            {movies?.length > 0 
                ? (
                    <div className = "container">
                        {movies.map((movie1) => (
                            <MovieCard movie1={movie1}/>
                        ))}
                    </div>
                ) : 
                (
                    <div className = "empty">
                        <h2>No movies found</h2>
                    </div>
                )}

        </div>
    )
}

export default App;