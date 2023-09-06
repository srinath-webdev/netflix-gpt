import { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../Utlis/Constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utlis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utlis/userSlice";
import {FiLogOut} from "react-icons/fi"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // no need to use navigate here ,  cuz auth will handle the navigation
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: {photoURL},
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
  []);

  return (
    <div className="absolute w-screen  flex justify-between px-8 py-3 bg-gradient-to-b from-black z-10 ">
      <img
        className="w-44"
        src={LOGO}
        alt="Logo"
      />

      {user && (
        <div className="flex p-2">
          <img alt="usericon" className="w-12 h-12 mr-2" src={USER_AVATAR} />
          <button onClick={handleSignOut} className="font-bold text-white">
           logOut <FiLogOut className="inline text-red-500"/>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
