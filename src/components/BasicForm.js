import useInput from "../hooks/useInputState";



const BasicForm = (props) => {

  const isNotEmpty = (value) => value.trim() !== ('');
  const isEmail = (value) => value.includes('@');
  const isConfirmationEmail = (value => value.isEmail);


  const {
    value: firstNameValue,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    inputBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangeHandler,
    reset: firstNameResetHandler
  } = useInput(isNotEmpty)

  const {
    value: lastNameValue,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    inputBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    reset: lastNameResetHandler
  } = useInput(isNotEmpty)

  const {
    value: EmailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: emailResetHandler
  } = useInput(isEmail)


  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid)
    formIsValid = true;

 

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log('submitted!')
    console.log(firstNameValue, lastNameValue, EmailValue)
    firstNameResetHandler();
    lastNameResetHandler();
    emailResetHandler();

  }

  const firstNameClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control'

  const lastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control'

  const emailClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control'


  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameHasError && <p className="error-text">Please enter a first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameHasError && <p className="error-text">Please enter a last name</p>}
        </div>
        <div className={emailClasses}>
          <label htmlFor='name'>Email</label>
          <input
            type='text'
            id='name'
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={EmailValue}
          />
          {emailHasError && <p className="error-text">Please enter a valid email</p>}
        </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
