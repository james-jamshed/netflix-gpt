import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularmovie from '../hooks/usePopularmovie';
import useTopratedMovie from '../hooks/useTopRatedMovie';
import useUpcomingMovie from '../hooks/useUpcomingMovie';


const Browse = () => {
  useNowPlayingMovies();
  usePopularmovie();
  useTopratedMovie();
  useUpcomingMovie();
  return <div>
    <Header />
    <MainContainer/>
    <SecondaryContainer/>

     {/* MainContainer
         - VideoBackground
         -videoTitle
       SecondaryContainer
        -MovieList *n
        -cards *n */}
  </div>
  
};

export default Browse;