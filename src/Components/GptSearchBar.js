import { useSelector, useDispatch } from "react-redux";
import lang from "../Utlis/langConstant";
import gptSearchMovieTmdb from "../Hooks/useGptSearchMovieTmdb";
import { useRef } from "react";
import openai from "../Utlis/OpenAi";
import { addGptMovieResult } from "../Utlis/gptSlice";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  gptSearchMovieTmdb();
 

  const handleGptSearchClick = async () => {
   
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices);

    if (!gptResults.choices) {
      // TODO: Write Error Handling
      console.log("Error while fetching data from openai server");
    } else {
      console.log(gptResults.choices?.[0]?.message?.content);
      // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    //for eacch movies name, tmdb will fetch data from api.

    const promiseArray = gptMovies.map((movie) => gptSearchMovieTmdb(movie));
    // [Promise, Promise, Promise, Promise, Promise] . this will execute all promise but not value

    const tmdbResults = await Promise.all(promiseArray);

   

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text "
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-3 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>


    </div>
  );
};

export default GptSearchBar;
