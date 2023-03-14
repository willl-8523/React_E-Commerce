import './form-input.styles.scss';

const FormInput = ({label, inputOptions}) => {
    // console.log({label});
    // console.log({...otherProps});
    // console.log(otherProps.value); // recupere la valeur de l'input
    return (
      <div className="group">
        <input className="form-input" {...inputOptions} />
        {label && (
          <label
            className={`${
              inputOptions.value.length > 0 ? 'shrink' : ''
            } form-input-label`}
          >
            {label}
          </label>
        )}
      </div>
    );
}
 
export default FormInput;