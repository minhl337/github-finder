import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: 4,
        login: 'asdsa',
        avatar_url:
          'https://i.pinimg.com/originals/4f/d5/b3/4fd5b335809133575bac1dffdd272bb8.jpg',
        html_url: 'https://github.com/minhl337',
      },
      {
        id: 5,
        login: 'mojfgfgambo',
        avatar_url:
          'https://i.pinimg.com/originals/4f/d5/b3/4fd5b335809133575bac1dffdd272bb8.jpg',
        html_url: 'https://github.com/minhl337',
      },
      {
        id: 6,
        login: 'moj222ambo',
        avatar_url:
          'https://i.pinimg.com/originals/4f/d5/b3/4fd5b335809133575bac1dffdd272bb8.jpg',
        html_url: 'https://github.com/minhl337',
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
