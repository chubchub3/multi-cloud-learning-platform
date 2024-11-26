import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import LoginPage from './components/LoginPage';

function App(){
  return (
    <main className = "column">
      <h1>Auth0 Login</h1>
      <LoginPage/>
      <LogoutButton/>
      <Profile/>
    </main>
  );
}

export default App;