/*  
  Et si veut ajouter une connexion par redirection google 
  On importe useEffect, getRedirectResult et auth
*/
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   // auth,
//   // signInWithGooglePopup,
//   // signInWithGoogleRedirect,
//   // createUserDocumentFromAuth,
// } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import './authentication.styles.scss';

const Authentication = () => {
  // Recuperer l'utilisateur connecter
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await getRedirectResult(auth);

  //     // Generer la user reference doc et l'ajouter à la bdd
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(userDocRef);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // const logGoogleUser = async () => {
  //   const {user} = await signInWithGooglePopup();
  //   createUserDocumentFromAuth(user);
  // }

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   /*  
  //     console.log({user}) => n'affiche rien à la sorti parce qu'il y'a une redirection vers une autre domaine(google) et lors du retour à notre application toute l'app va être réinitialisée 
  //   */
  //   console.log({ user });
  // }

  return (
    <div className='authentication-container'>
      {/*
        <h1>Sign in page</h1>
     
        <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
        </button>
      */}

      <SignInForm />
      <SignUpForm />
    </div>
  );
}
 
export default Authentication;