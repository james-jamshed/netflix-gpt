import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovie} from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopratedMovie= ()=>{
    //FETCH the data from tmdbi API and update store

 const dispatch = useDispatch();

 const getTopRatedMovie = async ()=>{
   const data = await fetch(
     'https://api.themoviedb.org/3/movie/top_rated?page=1',
      API_OPTIONS
     );
     const json = await data.json();
     
     dispatch(addTopRatedMovie(json.results));
     
 };
 useEffect(() =>{
    getTopRatedMovie();
    
   

 }, []);

};

export default useTopratedMovie;