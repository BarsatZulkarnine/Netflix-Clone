// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVqfkenn-HO3RVPhqGytODG71UZdfgriE",
  authDomain: "netflix-clone-cded1.firebaseapp.com",
  projectId: "netflix-clone-cded1",
  storageBucket: "netflix-clone-cded1.appspot.com",
  messagingSenderId: "1030257680545",
  appId: "1:1030257680545:web:01a814acb97fa33a2550e0"
};

// Initialize Firebase
// Since using Next Js (SSR)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }