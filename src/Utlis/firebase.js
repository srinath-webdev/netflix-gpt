import { initializeApp } from "firebase/app";
import {  getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjgXsCsRCZAk2c-rIcfnw14WRZHF2thMg",
  authDomain: "netflix-gpt-srinath.firebaseapp.com",
  projectId: "netflix-gpt-srinath",
  storageBucket: "netflix-gpt-srinath.appspot.com",
  messagingSenderId: "698174622360",
  appId: "1:698174622360:web:069b1277de325f4d155eed",
  measurementId: "G-55CSRLRH20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//eslint-disable-next-line
 const analytics = getAnalytics(app);

export const auth = getAuth();