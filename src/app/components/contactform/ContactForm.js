'use client';
import React, { useState } from 'react';
import './contactform.css';

function ContactForm() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('./api/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });

      if (response.status === 200) {
        setUser({
          username: '',
          email: '',
          phone: '',
          message: '',
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.error(e);
      setStatus("error");
    } finally {
      // Any cleanup or additional actions can be performed here
    }
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <div className="input-field">
        <label htmlFor="username" className='input-field2'> Username:
          <input type="text" name='username' id='username'
            placeholder='Enter name' className='input-field1' value={user.username}
            onChange={handleChange} />
        </label>
        <label htmlFor="email" className='input-field2'> Email:
          <input type="email" name='email' id='email'
            placeholder='Enter Email' className='input-field1' value={user.email}
            onChange={handleChange} />
        </label>
        <label htmlFor="phone" className='input-field2'> Phone Number:
          <input type="number" name='phone' id='phone'
            placeholder='Enter Phone' className='input-field1' value={user.phone}
            onChange={handleChange} />
        </label>
        <label htmlFor="message" className='input-field2'> Message:
          <textarea name="message" id="message" cols="30" rows="2" className='input-field1' value={user.message} onChange={handleChange}></textarea>
        </label>
        <div>
          {status === "success" && <p>Thank you for your message!</p>}
          {status === "error" && <p>There was an error sending your message.</p>}
        </div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
