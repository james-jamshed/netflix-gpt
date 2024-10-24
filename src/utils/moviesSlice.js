import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo : null,
        Popularmovie: null
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            console.log("Action payload:", action.payload); 
            state.nowPlayingMovies = action.payload;
        },
        addPopularmovie: (state,action)=>{
            console.log("Action payload:", action.payload); 
            state.Popularmovie = action.payload;
        },
        addTopRatedMovie: (state,action)=>{
            console.log("Action payload:", action.payload); 
            state.TopRatedMovie = action.payload;
        },
        addUpcomingMovie: (state,action)=>{
            console.log("Action payload:", action.payload); 
            state.UpcomingMovie= action.payload;
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo = action.payload;

        }
    }
});


export const {addNowPlayingMovies,addTrailerVideo,addPopularmovie,addTopRatedMovie,addUpcomingMovie} = moviesSlice.actions;

export default moviesSlice.reducer;