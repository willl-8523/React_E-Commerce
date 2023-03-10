/* 
    firebase/app => pour inclure notre application (app) 
    initializeApp => Cree une instance d'application
*/
import { initializeApp } from 'firebase/app';

/* Service authentification */ 
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

/*
    doc => permet de récuperer les documents de notre bdd firestar 
    getDoc => récuperer les données du document
    setDoc => modifier les données du document
*/
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Ce type de connexion nous redirige vers une page de connexion google
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

/*  
    Creer (Instancié) la bdd ce qui nous permettra d'acceder à la bdd
    de firebase 
*/
export const db = getFirestore();

/*
    Cette méthode asynchrone (car récupère les données externe(firebase)) reçoit un objet d'auth de l'utilisateur (userAuth)
*/
export const createUserDocumentFromAuth = async (userAuth) => {
    // Cree une reference de document utilisateur
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  //  On récupère le document
  //  await => car google doit le faire de manière asynchrone comme recupérer
  // userDocRef;
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  // Verifie si le doc exists sur la bdd
  console.log(userSnapshot.exists()); // false => le document n'est pas encore dans la bdd

  /*    Pseudo-code de la suite: 
        if user data does not exist
            create / set the document with the data from userAuth in my collection
        if user data exist
            return userDocRef
  */

  // Si les données de l'utilisateur n'existe pas
  if (!userSnapshot.exists()) {
    // Créer et definir le document 
    const { displayName, email } = userAuth;

    // Pour savoir quand l'utilisateur c'est connecté
    const createdAt = new Date();

    try {
        /*
            defini le document en lui rajoutant la reference de document utilisateur
            puis les données avec lesquelles nous voulons installer
        */
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        });
    } catch (error) {
        // Lors de la création de l'ux nous allons enregistrer le message d'erreur
        console.log('error creating the user', error.message);
    }
  } else {
    return userDocRef;
  }
}