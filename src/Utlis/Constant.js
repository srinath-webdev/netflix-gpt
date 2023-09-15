export const USER_AVATAR =
  "https://lh3.googleusercontent.com/-87RTGHjpzcw/AAAAAAAAAAI/AAAAAAAAAAA/AJIwbgb1CdjAldTkNFdbK-XutL1yrkc6rg/photo.jpg?sz=46";
export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:`Bearer ${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANG = [
  {identifier: "en", name: "English" },
  {identifier: "Hindi", name: "Hindi" },
  {identifier: "Spanish", name: "Spanish" },
];

export const OPEN_AI =  process.env.REACT_APP_OPEN_AI ;
export const authorizationToken = process.env.REACT_APP_AUTHORIZATION_TOKEN;
