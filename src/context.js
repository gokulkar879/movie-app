import React, { useContext, useState, useEffect } from 'react'
import { getMovie, getMovies } from './api'



const AppContext = React.createContext()




const AppProvider = ({children}) => {
  const [query, setquery] = useState("popular"); 
  const [movies, setMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState([])




    useEffect(() => {

        getMovie(query).then((res) => {
            // console.log(res.data.results)
     
            setMovies(res.data.results);
            
        })
    

    },[query])




    return <AppContext.Provider value={{
        movies,
        query,
        setquery,
        searchMovies,
        setSearchMovies
        }}>
       {children}
    </AppContext.Provider>
}



export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider}