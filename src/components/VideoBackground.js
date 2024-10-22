import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
  const trailerVideo =useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className='h-full w-full max-h-[1000px] overflow-hidden'>
      <iframe
       className='w-screen aspect-video scale-150'
       src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
       title="YouTube video player"  
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

      ></iframe>
      
      </div>
  )
}

export default VideoBackground
