import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addPopularmovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularmovie= ()=>{
    //FETCH the data from tmdbi API and update store

 const dispatch = useDispatch();

 const getPopularmovie = async ()=>{
   const data = await fetch(
     'https://api.themoviedb.org/3/movie/popular?page=1',
      API_OPTIONS
     );
     const json = await data.json();
     
     dispatch(addPopularmovie(json.results));
     
 };
 useEffect(() =>{
    getPopularmovie();
    
   

 }, []);

};

export default usePopularmovie;