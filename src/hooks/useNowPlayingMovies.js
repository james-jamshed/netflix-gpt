import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants"; // Ensure this contains API key and other necessary options
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Use dispatch to send data to the Redux store
  const dispatch = useDispatch();
  
  // Get now playing movies from the Redux store
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  // Function to fetch now playing movies from the TMDB API
  const getNowPlayingMovies = async () => {
    try {
      // Fetching movies data from TMDB API with proper API options
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?page=1', 
        API_OPTIONS
      );

      // Check if the response is not OK, handle the error case
      if (!response.ok) {
        throw new Error(`Error fetching movies: ${response.statusText}`);
      }

      // Convert the response to JSON
      const json = await response.json();

      // Dispatch the results to the Redux store
      dispatch(addNowPlayingMovies(json.results));
      
    } catch (error) {
      // Catch network errors and other potential issues
      console.error('Failed to fetch now playing movies:', error);

      // Optionally, you can handle errors in the UI, e.g., by setting an error state or showing a message
    }
  };

  // Fetch the movies data when the component is mounted or if the data is not already present
  useEffect(() => {
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      getNowPlayingMovies(); // Fetch the movies only if not available
    }
  }, [nowPlayingMovies]); // Add nowPlayingMovies as a dependency so that it refetches only when necessary

  return nowPlayingMovies; // Return the movies so they can be used in the component
};

export default useNowPlayingMovies;
