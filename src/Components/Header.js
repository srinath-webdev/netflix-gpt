import { useEffect } from "react";
import { LOGO, USER_AVATAR, SUPPORTED_LANG } from "../Utlis/Constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utlis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utlis/userSlice";
import { toggleGptSearchView, addGptMovieResult } from "../Utlis/gptSlice";
import { FiLogOut ,FiSearch } from "react-icons/fi";
import { changeLanguage } from "../Utlis/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // no need to use navigate here ,  cuz auth will handle the navigation
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(
    () => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: { photoURL },
            })
          );
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });

      //unsubscribe is used to unmount the event handler
      return () => unsubscribe();
    },
    //eslint-disable-next-line
    []
  );

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
    dispatch(addGptMovieResult({ movieNames: null, movieResults: null }));
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full  flex flex-col  px-8 py-3 bg-gradient-to-b from-black z-10  md:flex-row justify-between">
      <img className=" w-32 mx-auto md:mx-0" src={LOGO} alt="Logo" />

      {user && (
        <div className="flex md:justify-between p-2 mx-auto md:mx-0">
          {showGptSearch && (
            <select
              className="px-2 py-1 mr-2 mb-2 bg-gray-800 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.name}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-2 mb-2 bg-purple-600 text-white rounded-lg mr-2"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Browse" : "GPT-Search"} <FiSearch className="inline"/>
          </button>
          <img alt="usericon" className="hidden md:block w-9 h-9 mr-2 rounded-lg mb-2" src={USER_AVATAR} />
          <button
            onClick={handleSignOut}
            className="font-bold text-white  bg-red-600 rounded-lg px-2 mb-2"
          >
            logout
            <FiLogOut className="inline" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
