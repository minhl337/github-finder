import React from 'react';
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
        <a
          href={html_url}
          rel='noopener noreferrer'
          className='btn btn-dark btn-sm my-1'
          target='_blank'
        >
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
