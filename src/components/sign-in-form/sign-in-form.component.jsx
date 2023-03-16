
/*
  useContext et UserContext => nous permettra de sauvegarder l'ux ({ user }) connecte
*/
import { useState, useContext } from "react";

import FormInput from '../../components/form-input/form-input.component';
import Button from "../button/button.component";

/*
  UserContext => va nous rendre la valeur passer dans <UserContext.Provider value={value}>{children}</UserContext.Provider> dans user.context.jsx 
*/
import { UserContext } from "../../contexts/user.context";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    // displayName = formFields.displayName
    const { email, password } = formFields;
    // console.log(formFields);

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
      const { user } = await signInWithGooglePopup();
      console.log({ user });
      setCurrentUser(user);
      
      await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        /* Verifier que l'ux existe */
        const { user } = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );

        /*
          setCurrentUser(user) recupere l'ux ensuite voir dans navigation.compoment 
        */
        setCurrentUser(user);
        console.log({ user });

        /* Vider le formulaire après l'enregistrement de l'utilisateur */
        resetFormFields();
      } catch (error) {
        // console.log(error.code);
        switch (error.code) {
          case 'auth/wrong-password':
          case 'auth/user-not-found':
            alert('Email or Password incorrect');
            break;
          default:
            console.log(error);
            break;
        }
      }
    }

    // Mettre a jour formFields selon les valeurs qui sont dans input
    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormFields({ ...formFields, [name]: value });
    }

    return (
      <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            inputOptions={{
              type: 'email',
              required: true,
              onChange: handleChange,
              name: 'email',
              value: email,
            }}
          />

          <FormInput
            label="Password"
            inputOptions={{
              type: 'password',
              required: true,
              onChange: handleChange,
              name: 'password',
              value: password,
            }}
          />
          
          <div className="buttons-container">
            <Button type="submit" children="Sign In" />
            {/*
              Par defaut les boutons est de type submit dans un formulaire
              donc il soumet le formulaire par defaut lorsqu'on clique
              Pour éviter ce comportement par default on ajoute => type='button'
           */}
            <Button
              buttonType='google'
              type='button'
              onClick={signInWithGoogle}
              children="Google sign in"
            />
          </div>
        </form>
      </div>
    );
}
 
export default SignInForm;