import React, { useState, useEffect, useRef } from 'react'
import { getMovies } from '../api'
import Loading from '../components/Loading'
import Movie from '../components/Movie'
import { useGlobalContext } from '../context'
import './Home.css'

function Home() {
    const { movies, query, setquery } = useGlobalContext()
    if(movies.length == 0) {
        return <Loading />
    }
    // console.log(movies)
    return (
        <div className="home">
            <div className="home__buttons">
                <button className={`${query=="popular"?'active':null}`} onClick={() => setquery("popular")}>Popular</button>
                <button className={`${query=="now_playing"?'active':null}`} onClick={() => setquery("now_playing")}>Now Playing</button>
                <button className={`${query=="top_rated"?'active':null}`} onClick={() => setquery("top_rated")}>Top Rated</button>
                <button className={`${query=="upcoming"?'active':null}`} onClick={() => setquery("upcoming")}>Upcoming</button>
                
            </div>
           <div className="home__center">
           {
                movies.map(element => {
                    // console.log(element.original_title)
                  return (
                   <Movie key={element.id}
                    image={element.poster_path}
                     title={element.title}
                     rating={element.vote_average}
                     id={element.id}
                     />
                  )
                })
            }
           </div>
           <div className="footer"></div>
          
            
        </div>
    )
}

export default Home
