

import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwJ6rL4IEFJ_qpdBBPq4Ib_Ve7wRn5bbc",
  authDomain: "filmyverse-b6ee3.firebaseapp.com",
  projectId: "filmyverse-b6ee3",
  storageBucket: "filmyverse-b6ee3.appspot.com",
  messagingSenderId: "342223926083",
  appId: "1:342223926083:web:9cc6db808ae91b9450f5f6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const moviesRef = collection(db,"movies");
export const reviewsRef= collection(db,"reviews");
export const usersRef = collection(db,"users");

export default app;