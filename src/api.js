import { axiosMovies as axios} from './axios'


export const imageURL = "https://image.tmdb.org/t/p/original"


export const getMovie = id => {
    return axios.get(`/movie/${id}`)
}

export const getMovies = query => {
    return axios.get(`/movie/${query}`)
}


export const getMovieImages = id => {
    return axios.get(`/movie/${id}/images`, {
        params: {
            language: "null"
        }
    })
}
export const getActors = id => {
    return axios.get(`/movie/${id}/credits`)
}