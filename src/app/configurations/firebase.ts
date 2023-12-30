import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA2yASk35Xzv8_WtwwdfgT5BZeG2JHqlAM",
    authDomain: "misclientes-aab01.firebaseapp.com",
    databaseURL: "https://misclientes-aab01-default-rtdb.firebaseio.com",
    projectId: "misclientes-aab01",
    storageBucket: "misclientes-aab01.appspot.com",
    messagingSenderId: "1096107413937",
    appId: "1:1096107413937:web:6890cb3d60afb2cc8ced90"
};
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)