import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Navbar from './components/layout/Navbar';

import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    // axios
    //   .get('https://api.github.com/users')
    //   .then((res) => console.log(res.data));

    this.setState({
      loading: true,
    });
    const res = await axios.get('https://api.github.com/users');

    this.setState({
      users: res.data,
      loading: false,
    });
    console.log(res.data);
  }

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </>
    );
  }
}

export default App;
