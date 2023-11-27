import React, { useState } from 'react';
import Cookies from 'js-cookie';

const SampleCookieExample = () => {
  const [cookieValue, setCookieValue] = useState('');

  const handleSetCookie = () => {
    // Set a cookie with a key-value pair and an expiration time
    Cookies.set('exampleCookie', 'Hello, Cookie!', { expires: 7 }); // Expires in 7 days
    setCookieValue('Cookie set!');
  };

  const handleGetCookie = () => {
    // Get the value of the cookie using its key
    const value = Cookies.get('exampleCookie');
    setCookieValue(value || 'Cookie not found');
  };

  const handleDeleteCookie = () => {
    // Delete the cookie using its key
    Cookies.remove('exampleCookie');
    setCookieValue('Cookie deleted!');
  };

  return (
    <div>
      <h1>React Cookie Example</h1>
      <p>{cookieValue}</p>

      <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleGetCookie}>Get Cookie</button>
      <button onClick={handleDeleteCookie}>Delete Cookie</button>
    </div>
  );
};

export default SampleCookieExample;
