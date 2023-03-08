/* 
    firebase/app => pour inclure notre application (app) 
    initializeApp => Cree une instance d'application
*/
import { initializeApp } from 'firebase/app';

/* Service authentification */ 
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh17X8wwuC8GSuzdGvkZmuM_hzJ_OX8ZU",
  authDomain: "e-commerce-clothing-db-6c051.firebaseapp.com",
  projectId: "e-commerce-clothing-db-6c051",
  storageBucket: "e-commerce-clothing-db-6c051.appspot.com",
  messagingSenderId: "379623549839",
  appId: "1:379623549839:web:b8b9e8079d5c5c83c4b9fa"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

/*  
    Appeler un nouveau fournisseur(provider) Google, qui à son tour
    rendra cette instance de fournisseur
*/
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

/* Dire la manière dont ce fournisseur googleAuth doit se comporter */