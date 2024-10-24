const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full px-6 md:px-24 py-2 md:py-11  text-white bg-black bg-opacity-0 z-10"> 
      <h1 className=" hidden md:block  text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="hidden md:inline-block bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
