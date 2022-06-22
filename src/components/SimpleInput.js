import React, { useState, useRef, useEffect } from 'react';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('name is valid!');
    }
  }, [enteredNameIsValid])

  const nameInputhandler = (e) => {
    setEnteredName(e.target.value)

    if (enteredName.trim() !== '') {
      setEnteredNameIsValid(true)
    }
  }

  const onBlurHandler = (e) => {
    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
    }
  }

  const submissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return;
    }
    setEnteredNameIsValid(true)

    console.log(enteredName)

    // const enteredValue = nameInputRef.current.value
    // console.log (enteredValue) ******useRef only use when u want in it once 

    setEnteredName('')
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputhandler}
          onBlur={onBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
