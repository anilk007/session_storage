// SsoExample.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SampleSSOExample = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={() => logout()}>Logout</button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login with Auth0</button>
      )}
    </div>
  );
};

export default SampleSSOExample;
