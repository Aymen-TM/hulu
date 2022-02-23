const API_KEY = process.env.REACT_APP_API_KEY
export default {
    fetchTrending:{
        title:'Trending',
        url:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:'Top Rated',
        url:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    },
    fetchTrending:{
        title:'Trending',
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
    },
    fetchAdventure:{
        title:'Adventure',
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`
    },
    fetchComedy:{
        title:'Comedy',
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`
    },
    fetchCrime:{
        title:'Crime',
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`
    },
    fetchHorror:{
        title:'Horror',
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
    },
    fetchAnimation:{
        title:'Animation',
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`
    },
    fetchFantasy:{
        title:'Fantasy',
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`
    },
    fetchMystery:{
        title:'Mystery',
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`
    },
    fetchRomance:{
        title:'Romance',
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
    },

}