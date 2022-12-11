// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getApps, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKdnVD5kq0sd7nzMLwC5_AKczpM4GANyg",
  authDomain: "fir-auth-e2ad1.firebaseapp.com",
  projectId: "fir-auth-e2ad1",
  storageBucket: "fir-auth-e2ad1.appspot.com",
  messagingSenderId: "24347867362",
  appId: "1:24347867362:web:be351e86472034ccdb06bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// let app;
// if (getApps().length < 1) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = getApps().app();
// }

const auth = getAuth(app);

export { auth };
