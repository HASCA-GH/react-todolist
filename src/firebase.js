// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration

// By default configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCUWjvh6jjkIql042jKpvGGXdT0Odd-Ke8",
//   authDomain: "react-todo-list-9ad5a.firebaseapp.com",
//   projectId: "react-todo-list-9ad5a",
//   storageBucket: "react-todo-list-9ad5a.appspot.com",
//   messagingSenderId: "807624581215",
//   appId: "1:807624581215:web:e150b131bd2d080fa7bbea"
// };
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


//By alternative way to have clean code, better view of code:
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCUWjvh6jjkIql042jKpvGGXdT0Odd-Ke8",
    authDomain: "react-todo-list-9ad5a.firebaseapp.com",
    projectId: "react-todo-list-9ad5a",
    storageBucket: "react-todo-list-9ad5a.appspot.com",
    messagingSenderId: "807624581215",
    appId: "1:807624581215:web:e150b131bd2d080fa7bbea"
  }) 

  const db = getFirestore()

  export {db}
  