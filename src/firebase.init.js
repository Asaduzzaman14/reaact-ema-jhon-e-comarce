// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJBuhiUJAHcrpvoRXaTJdj_x0S7APxwQQ",
    authDomain: "ema-jhon-shoping.firebaseapp.com",
    projectId: "ema-jhon-shoping",
    storageBucket: "ema-jhon-shoping.appspot.com",
    messagingSenderId: "718937872068",
    appId: "1:718937872068:web:92fb08d6f1dd4bd3a95b91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth 
