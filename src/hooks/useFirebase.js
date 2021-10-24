import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../components/Firebase/Firebase.init";
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
      
  };

  // chack change user state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  //logOut user

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user, 
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
