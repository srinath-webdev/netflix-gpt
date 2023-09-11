import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData, validateName } from "../Utlis/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../Utlis/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utlis/userSlice";
import { USER_AVATAR } from "../Utlis/Constant";
import { BG_URL } from "../Utlis/Constant";

const Login = () => {


  const [signIn, SetSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const fname = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

  const signInTogler = () => {
    SetSignIn(!signIn);
  };

  const validateData = () => {
    const message = checkValidData(Email.current.value, Password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!signIn) {
      const nameValue = fname.current.value;
      const nameValidationMessage = validateName(nameValue);
      setErrorMessage(nameValidationMessage);

      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          
          updateProfile(user, {
            displayName: fname.current.value,
            photoURL: USER_AVATAR,
          })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // eslint-disable-next-line
          const user = userCredential.user;  
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
        className=" fixed h-screen md:h-auto object-cover "
          src={BG_URL}
          alt="bg-img"
        />
      </div>
      <form
        className="fixed p-12 bg-gray-900 opacity-80 w-full md:w-3/12 my-32 mx-auto left-0 right-0 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className=" p-2 my-2 font-bold text-3xl">
          {signIn ? "Sign In" : "Sign Up"}
        </h2>

        {!signIn && (
          <input
            ref={fname}
            type="name"
            placeholder="Enter Your name"
            className="p-2 m-2 w-full bg-gray-700"
          />
        )}

        <input
          ref={Email}
          type="email"
          placeholder="Enter Your Email"
          className="p-2 m-2 w-full bg-gray-700"
        />

        <input
          ref={Password}
          type="password"
          placeholder="Enter Your Password"
          className=" p-2 m-2 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2 ml-3">
          {errorMessage}
        </p>

        <button
          className="w-full bg-[#c11119] p-2 my-4 rounded-lg"
          onClick={validateData}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="ml-3 py-2 cursor-pointer" onClick={signInTogler}>
          {signIn ? "New User? SignUp now" : "Existing user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
