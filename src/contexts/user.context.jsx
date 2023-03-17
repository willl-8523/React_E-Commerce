/*
  Pour utiliser le context (nous permet de sauvegarder l'ux connecté ) 
  createContext => créer le context
*/
import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListerner,
  createUserDocumentFromAuth, /*signOutUser,*/
} from '../utils/firebase/firebase.utils';

/* 
  Créer un context par defaut => la valeur réelle à laquelle vous voulez accéder
  Par defaut ils sont a null ce qui nous permettra de savoir si un ux est connecter (!== null) ou pas  
*/
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// Fournisseur d'ux 
export const UserProvider = ({ children }) => {
  // Ux actuel (connecté)
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // Deconnecte l'ux => ce qui change l'état de onAuthStateChangedListerner
 //  signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListerner((user) => {
      console.log(user);

      if (user) {
        createUserDocumentFromAuth(user);
      }
    
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  /*
        <UserContext.Provider> => composant qui enveloppera tous les autres composants qui ont besoin d'accéder aux valeurs à l'interieur
        <UserContext.Provider> => Fournisseur de contexte ux
            <app /> => { children }
        </UserContext.Provider>
    */
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

/* On exporte UserProvider dans index.js */