
import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);

    // displayName = formFields.displayName
    const { displayName, email, password, confirmPassword } = formFields;
    // console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // si password et confirmPassword sont differents
        if (password !== confirmPassword) {
            alert("passwords do not match");
            return
        }

        // Creation de l'utilisateur
        try {
            // { user } = createAuthUserWithEmailAndPassword(email, password).user
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user); 
        } catch (error) {
            console.log('User creation encountered an error', error);
        }
    }

    // Mettre a jour formFields selon les valeurs qui sont dans input
    const handleChange = (event) => {
      /*
            { name, value } = event.target
            name = event.target.name
            value = event.target.value
        */
      const { name, value } = event.target;

      /*
            formFields = {
                displayName: '', => [name] : value
                email: '',
                password: '',
                confirmPassword: ''
            }
        */
      setFormFields({ ...formFields, [name]: value });
    }

    return (
      <div>
        <h1>Sign up with your email and password</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Display Name</label>
            {/*
                -> Nous allons ajouter l'attr name pour differencié les inputs 
                -> value={displayName} => displayName = la valeur qui sera entrer dans  l'input sera attribuer
            */}
          <input
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />

          <label>Email</label>
          <input
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <label>Password</label>
          <input
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />

          {/* Lorsque clique sur le bouton executer onSubmit*/}
          <button type="submit">Create</button>
        </form>
      </div>
    );
}
 
export default SignUpForm;