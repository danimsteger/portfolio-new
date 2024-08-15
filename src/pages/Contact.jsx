import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1 className="text-center"> Contact</h1>
      <form className="form form-control">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className="form-control"
        ></input>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          className="form-control"
        ></input>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text-area"
          placeholder="Enter a message to Danielle here!"
          className="form-control"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
