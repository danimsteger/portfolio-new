import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleNameFocus = () => {
    setNameError('');
  };

  const handleEmailFocus = () => {
    setEmailError('');
  };

  const handleMessageFocus = () => {
    setMessageError('');
  };

  const handleNameBlur = () => {
    if (name.trim() === '') {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const handleEmailBlur = () => {
    if (email.trim() === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleMessageBlur = () => {
    if (message.trim() === '') {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1 className="text-center"> Contact</h1>
      <form className="form form-control" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className="form-control"
          onFocus={handleNameFocus}
          onBlur={handleNameBlur}
        ></input>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          className="form-control"
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
        ></input>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text-area"
          placeholder="Enter a message to Danielle here!"
          className="form-control"
          onFocus={handleMessageFocus}
          onBlur={handleMessageBlur}
        ></textarea>
        <button type="submit">Submit</button>
        {nameError && (
          <div>
            <p className="error-text">Name field cannot be left blank.</p>
          </div>
        )}
        {emailError && (
          <div>
            <p className="error-text">Must be a valid email</p>
          </div>
        )}
        {messageError && (
          <div>
            <p className="error-text">Message field cannot be left blank.</p>
          </div>
        )}
      </form>
    </div>
  );
}
