import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Repos from '../repos/Repos';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      company,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading, repos } = this.props;

    return (
      <>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        {loading ? (
          <Spinner />
        ) : (
          <>
            Hireable:{' '}
            {hireable ? (
              <i
                className='fas fa-check text-success'
                style={{ paddingLeft: '.3rem' }}
              />
            ) : (
              <i className='fas fa-times-circle text-danger' />
            )}
            <div className='card grid-2'>
              <div className='all-center'>
                <img
                  src={avatar_url}
                  className='round-img'
                  style={{ width: '150px' }}
                  alt=''
                />
                <h1>{name}</h1>
                <p>Location: {location}</p>
              </div>
              <div>
                {bio && (
                  <>
                    <h3>Bio: </h3>
                    <p>{bio}</p>
                  </>
                )}
                <a
                  target='_blank'
                  href={html_url}
                  className='btn btn-dark my-1'
                >
                  Visit Github Profile
                </a>
                <ul>
                  {' '}
                  <li>
                    {login && (
                      <>
                        <strong>Username: </strong>
                        {login}
                      </>
                    )}
                  </li>
                  <li>
                    {company && (
                      <>
                        <strong>Company: </strong>
                        {company}
                      </>
                    )}
                  </li>
                  <li>
                    {blog && (
                      <>
                        <strong>Website: </strong>
                        <a href={`https://${blog}`} target='_blank'>
                          {blog}
                        </a>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className='card text-center'>
              <div className='badge badge-primary'>Followers: {followers}</div>
              <div className='badge badge-success'>Following: {following}</div>
              <div className='badge badge-light'>
                Public Repos: {public_repos}
              </div>
              <div className='badge badge-dark'>
                Public Gists: {public_gists}
              </div>
            </div>
          </>
        )}
        <Repos repos={repos} />
      </>
    );
  }
}

export default User;
