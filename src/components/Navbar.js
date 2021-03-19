import React, { useEffect, useState, useRef } from 'react'
import './Navbar.css'
import MovieIcon from '@material-ui/icons/Movie';
import { Link, useHistory, useParams } from 'react-router-dom'
import { getMovies } from '../api'
import { axiosMovies as axios } from '../axios'
import { useGlobalContext } from '../context';

function Navbar() {
  const { id } = useParams()
  const [search, setSearch] = useState('')
  const history = useHistory()
  const { setSearchMovies, query, setquery } = useGlobalContext()
    const handleScroll = (e) => {
     if(window.pageYOffset > 70) {
         document.querySelector(".navbar").classList.add("active")
     } else {
        document.querySelector(".navbar").classList.remove("active") 
     }
    }
    
  useEffect(() => {
  
      window.addEventListener("scroll",handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
  },[])
const clickDisplay = e => {
document.querySelector('.form').classList.toggle('show')
document.querySelector('.navbar__buttons').classList.toggle('show')
document.querySelector('.navbar__menu').classList.toggle('show')
}

const handleSubmit = e => {
  e.preventDefault()
  let query = search.trim()

  if(query.length >= 2) {
    axios.get(`/search/movie`,{
      params:{
        query: query
      }
    }).then(res => {
      console.log(res.data.results)
      setSearchMovies(res.data.results)
      history.push('/search')
    }).catch(err => history.push("/movie-app/"))
 
  } else {
    history.push("/movie-app/")
  }
}

    return (
        <div className='navbar'>       
            <Link to="/movie-app/">
              <MovieIcon className="logo"/>
              <h2>KMOVIE</h2>
            </Link>
            <div className="navbar__menu" onClick={clickDisplay}>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <form onSubmit={handleSubmit} className="form">
               <input className={`navbar__input`} placeholder="search a movie..." value={search} onChange={e => setSearch(e.target.value)}></input>
            </form>
            
             <div className={`navbar__buttons `}>
            <button className={`${query=="popular"?'active':null}`} onClick={() => setquery("popular")}>Popular</button>
                <button className={`${query=="now_playing"?'active':null}`} onClick={() => setquery("now_playing")}>Now Playing</button>
                <button className={`${query=="top_rated"?'active':null}`} onClick={() => setquery("top_rated")}>Top Rated</button>
                <button className={`${query=="upcoming"?'active':null}`} onClick={() => setquery("upcoming")}>Upcoming</button>
            </div>
            
            
         
       
        </div>
    )
}

export default Navbar
