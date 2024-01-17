import React from "react";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-black bottom-0">
      <p className="text-white text-xl flex justify-center  py-6  ">
        {" "}
        Design and Build by{" "}
        <span className="text-red-500 font-bold pl-2">Srinath</span>
      </p>
      <div className="flex justify-center py-3">
        <p className="text-white">Follow me on social media :</p>
        <div className="flex ">
          <a
            href="https://www.linkedin.com/in/srinath-web-tech/"
            rel="noreferrer"
            target="_blank"
          >
            <button className="text-white text-2xl px-2">
              <AiFillLinkedin />
            </button>
          </a>
          <a
            href="https://twitter.com/srii__07"
            rel="noreferrer"
            target="_blank"
          >
            <button className="text-white text-2xl px-2">
              <AiOutlineInstagram />
            </button>
          </a>
          <a
            href="https://www.instagram.com/srinath.07/"
            rel="noreferrer"
            target="_blank"
          >
            <button className="text-white text-2xl px-2">
              <AiFillTwitterCircle />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
