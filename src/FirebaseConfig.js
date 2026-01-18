// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKoKeBXExtz_cwCXXgE_phltsvk14B0Vo",
  authDomain: "class-54-2d8e9.firebaseapp.com",
  databaseURL: "https://class-54-2d8e9-default-rtdb.firebaseio.com",
  projectId: "class-54-2d8e9",
  storageBucket: "class-54-2d8e9.firebasestorage.app",
  messagingSenderId: "395228112658",
  appId: "1:395228112658:web:e93bafa16f0cf5ebfcf5cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig