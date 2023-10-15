// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX556nf-acpKu1vU0wd6PVmXdqETpA9cg",
  authDomain: "elderworks-7f9fd.firebaseapp.com",
  projectId: "elderworks-7f9fd",
  storageBucket: "elderworks-7f9fd.appspot.com",
  messagingSenderId: "252182144062",
  appId: "1:252182144062:web:539ec501587eb402b19d6f"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP);

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(FIREBASE_AUTH, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

