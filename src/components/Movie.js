import React from 'react'
import { imageURL } from '../api'
import './Movie.css'
import { Link } from 'react-router-dom'

function Movie({image, title, rating, id}) {
    console.log(id)
    return (
        <Link to={`/search/${id}`}>
        <div className="movie">
            <div className="img">
             <img src={`${imageURL}${image}`}></img>
            </div>
            <div className="movie__info">
                <p className="title">{title}</p>
                <div className="subrating">
                    <p className="rating">{rating}</p>
                    
                </div>
               
            </div>
           
        </div>
        </Link>
    )
}

export default Movie
