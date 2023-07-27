import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmM2-K-yxLAYUGNVl2eaYxocWK1Ijf6QM",
  authDomain: "chatgpt-clone-497dd.firebaseapp.com",
  projectId: "chatgpt-clone-497dd",
  storageBucket: "chatgpt-clone-497dd.appspot.com",
  messagingSenderId: "87885802987",
  appId: "1:87885802987:web:c49801a8c0f69b2726bdae"
};

// Initialize Firebase

// if length of initialized apps has a length, get app
// single-turn pattern encoding(?)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }