import React from 'react'
import './MovieCard.css'

function MovieCard({name,season,image}) {
    return ( 
        <>
            <div className='card' >
                <div className='card-image'>
                    <img src={image}/>
                </div>
                <div className='card-info'>
                    <h2>Movie Name:{name}</h2>
                    <p>Season:{season}</p>
                </div>
            </div>
        </>
     );
}

export default MovieCard;