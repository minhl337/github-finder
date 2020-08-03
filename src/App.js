import React, { Component } from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';

import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

class App extends Component {
  beans = () => 'beans';

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </>
    );
  }
}

export default App;
