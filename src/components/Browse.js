import Header from './header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularmovie from '../hooks/usePopularmovie';
import useTopratedMovie from '../hooks/useTopRatedMovie';
import useUpcomingMovie from '../hooks/useUpcomingMovie';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularmovie();
  useTopratedMovie();
  useUpcomingMovie();
  return <div>
    <Header />
    {
      showGptSearch ? (
      <GPTSearch/>
    ):(
      <>
       <MainContainer/>
       <SecondaryContainer/>
      </>
    )}
    
  </div>
  
};

export default Browse;
