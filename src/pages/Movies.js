import React from 'react'
import { useGlobalContext } from '../context'
import Movie from '../components/Movie'
import './Home.css'

function Movies() {
    const { searchMovies } = useGlobalContext()
   console.log(searchMovies)
    return (
        <div className="home">
            
           <div className="home__center">
           {
                searchMovies.map(element => {
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

export default Movies
