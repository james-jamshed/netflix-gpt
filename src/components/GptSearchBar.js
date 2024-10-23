import React, { useRef,promise } from 'react';
import lang from '../utils/LanguageConstant';
import { useDispatch, useSelector } from 'react-redux';
import groq from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult} from "../utils/gptSlice";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch  = useDispatch();


  const searchMovieTMDB =async(movie) =>{
    const data = await 
    fetch("https://api.themoviedb.org/3/search/movie?query=" +
       movie +
        "&include_adult=false&language=en-US&page=1", 
      API_OPTIONS
    );
    const json = await data.json()
    return json.results;
    
  };

  const handleGptSearchClick = async () => {
    if (!searchText.current || !searchText.current.value) { 
     return;
    };
    const gptQuery = 
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma-separated, like the example result: Gadar, Sholay, Don, Golmaal, 3 Idiots";
    try {
      const gptResult =  await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: gptQuery,
          },
        ],
        model: "llama3-8b-8192", 
      });

      const gptMovies = gptResult.choices[0]?.message?.content.split(",");
      const promiseArray=gptMovies.map(movie =>searchMovieTMDB(movie)) ;

      const tmdbResults =await Promise.all(promiseArray);;
      dispatch(addGptMovieResult({movieNames: gptMovies,movieResults: tmdbResults}));
  
    } catch (error) {
      console.error('Error with GPT API:', error);
    }
  };

  return (
    <div className='pt-[8%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText} 
          type='text'
          className='p-4 m-4 col-span-9'
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
