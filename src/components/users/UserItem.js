import React, { Component } from 'react';
import PropTypes from 'prop-types';

const UserItem = (props) => {
  const { avatar_url, login, html_url } = props.user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        style={{ width: '60px' }}
        alt=''
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1' target='_blank'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

// state = {
//   id: 'id',
//   login: 'mojambo',
//   avatar_url:
//     'https://i.pinimg.com/originals/4f/d5/b3/4fd5b335809133575bac1dffdd272bb8.jpg',
//   html_url: 'https://github.com/minhl337',
// };

export default UserItem;
