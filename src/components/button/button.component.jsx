import './button.styles.scss';

/*  
    3 types de bouton 
    -> bouton par default
    -> bouton hover inversé
    -> bouton google sign in 
*/
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
//   console.log('children', { children });
//   console.log('buttonType', { buttonType });
//   console.log('otherProps', {...otherProps});
  return (
    <button 
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
    >
      {children}
    </button>
  );
}
 
export default Button;