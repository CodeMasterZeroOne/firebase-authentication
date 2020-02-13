import React from 'react';
import Navbar from './components/layout/Navbar';
import Login from './components/layout/Login';
import PostsList from './components/layout/PostsList';
import Signup from './components/layout/Signup';
import Account from './components/layout/Account';
import PostForm from './components/layout/PostForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <PostsList />
      <Signup />
      <Account />
      <PostForm />
    </div>
  );
}

export default App;
