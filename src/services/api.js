import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '98b1cf0ddb19048b4d19046852a79662';
axios.defaults.params = {api_key:API_KEY}

export const getTrendingMovies = async ()  => {
    const response =  await axios.get(`${baseURL}/trending/all/day`);
    return response.data;   
}

export const getFullInformationMovies = async (movieId)  => {

    const response =  await axios.get(`${baseURL}/movie/${movieId}`);
    return response.data;   
}


export const getMovieSearch = async (query)  => {

    const response =  await axios.get(`${baseURL}/search/movie?query=${query}`);
    return response.data;   
}

// https://api.themoviedb.org/3/movie/{movie_id}/credits

export const getCast = async (movieId)  => {

    const response =  await axios.get(`${baseURL}/movie/${movieId}/credits`);
    return response.data;   
}

// https://api.themoviedb.org/3/movie/{movie_id}/reviews

export const getReviews = async (movieId)  => {

    const response =  await axios.get(`${baseURL}/movie/${movieId}/reviews`);
    return response.data;   
}