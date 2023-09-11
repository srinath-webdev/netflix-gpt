import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import {BG_URL} from "../Utlis/Constant"
const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img className="fixed h-screen md:h-auto object-cover" src={BG_URL} alt="logo" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
