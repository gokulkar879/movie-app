import React, { useEffect, useState } from 'react'
import { getMovie, getActors, imageURL } from '../api'
import { useParams } from 'react-router-dom'
import './Single.css'
import Loading from '../components/Loading'
import Actor from '../components/Actor'
const imageURLM = "https://image.tmdb.org/t/p/w1280"

function SingleMovie() {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    const [actors, setActors] = useState(null)
    useEffect(() => {
        getMovie(id).then(res => {
            console.log(res.data)
            setMovie(res.data)
        })
        getActors(id).then(res => {
          // console.log(res)
            setActors(res.data.cast)
        })
      
    },[])
      
   useEffect(() => {
     if(movie !== null) {
       document.querySelector('.single').style.background = `url(${imageURL}${movie.poster_path})`
     }
   },[movie])
  
     
   
    
   if(movie == null) {
     return <Loading />
   }
   const { title, overview, vote_average:rating, status, tagline } = movie
    return (
        <div className={`single ${movie!==null?'active':null}`}>
            <div className="single__center">
            <div className="single__top">
                 <div className="image">
                   <img src={`${imageURLM}${movie.poster_path}`}></img>
                 </div>

                 <div className="info">
                   <p className="rating"><span>{rating}</span></p>
                    <p className="movie__title">{title}</p>
                    <p className="movie__status">{status}</p>
                    <p className="movie__overview">{overview}</p>
                 </div>
            </div>
            <h2>CAST</h2>
            <div className="single__mid">
             
              <div className="crew">
{
  actors && actors.map(actor => {
    const { id } = actor
    return <Actor key={id} pic={actor.profile_path} name={actor.name}/>
  })
}
              </div>
              
            </div>
            </div>
           
            <div className="footer"></div>
        </div>
    )
}

export default SingleMovie
