import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confic";

export default function initializeFirebase() {
  initializeApp(firebaseConfig);
}

/*
    setup for authenticarion 
    ----------------------------
    Initial setup
    1. firebase: create project    
    2. create web app
    3. get configaration
    4. Enebal Auth method

    stap -2 

    1. create Login/ register Component
    2. create Route for  Login/ Register 
*/
