import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [signIn , SetSignIn] = useState(true);

  const signUpHandler = () => {
    SetSignIn(!signIn);
  }
  return (
    <div>
      <Header />
      <div className="absolute">  
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
      </div>
      <form className="absolute p-12 bg-gray-900 opacity-80 w-3/12 my-36 mx-auto left-0 right-0 text-white" >
        <h2 className=" p-2 my-2 font-bold text-3xl">{signIn ? "Sign In" : "Sign Up" }</h2>

        {!signIn && <input
          type="name"
          placeholder="Enter Your name"
          className="p-2 m-2 w-full bg-gray-700"
        />}
        <input
          type="email"
          placeholder="Enter Your Email"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="p-2 m-2 w-full bg-gray-700"
        />

{!signIn && <input
          type="password"
          placeholder="Re-enter Your Password"
          className="p-2 m-2 w-full bg-gray-700"
        />}
        
        <button className="w-full bg-[#c11119] p-2 my-4 rounded-lg">{signIn ? "Sign In" : "Sign Up" }</button>
        <p className="py-2 cursor-pointer" onClick={signUpHandler}>{signIn ? "New User? SignUp now" : "Existing user? Sign In" }</p>
      </form>
    </div>
  );
};

export default Login;
