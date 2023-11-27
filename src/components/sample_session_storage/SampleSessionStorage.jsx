import React, { useState } from 'react';

const SampleSessionStorage = () => {
  // State to hold the user's session information
  const [user, setUser] = useState(null);

  // Function to simulate user login
  const login = () => {
    // In a real-world scenario, you would typically authenticate the user
    // and retrieve their information from a server.
    const userData = {
      id: 1,
      username: 'exampleUser',
      // ... other user data
    };

    // Store user information in session storage
    sessionStorage.setItem('user', JSON.stringify(userData));

    // Update the user state
    setUser(userData);
  };

  // Function to simulate user logout
  const logout = () => {
    // Remove user information from session storage
    sessionStorage.removeItem('user');

    // Update the user state
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default SampleSessionStorage;
