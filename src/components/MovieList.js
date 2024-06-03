import React, { useState } from 'react'
import './MovieList.css'
import MovieCard from './MovieCard'




const MovieList = ({ movieData }) => {

    
    return (
        <div >

            
          <div className='movie_list'>
            
            {
                movieData.map((movie, index) => {
                    return (
                        <MovieCard
                            key={index} image={movie.image.original}
                            season={movie.season} name={movie.name}
                        />
                    )
                })
            }
          </div>  
        </div>
    )
}

export default MovieList