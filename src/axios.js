import axios from 'axios'
import { API_KEY } from './config'


export const axiosMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: API_KEY,
        language: "en-US"
    }
})