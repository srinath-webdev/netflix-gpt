import {AiOutlineInfoCircle , AiOutlinePlayCircle} from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview }) => {
  const id= useSelector((store)=>store?.movies?.nowPlayingMovies[3]?.id)
    return (
      <div className="w-full aspect-video pt-[12%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
        <p className="hidden  md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="my-4 md:m-0">
         <Link to={"/browse/" + id}>
         <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-9 text-xl  rounded-lg hover:bg-opacity-80">
          <AiOutlinePlayCircle className="inline"/> Play
          </button>
          <button className="  hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-9 text-xl bg-opacity-50 rounded-lg">
            <AiOutlineInfoCircle className="inline "/> More Info
          </button></Link> 
        </div>
      </div>
    );
  };
  export default VideoTitle;