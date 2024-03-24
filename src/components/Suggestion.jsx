import { Avatar } from '@mui/material';
import React from 'react';
import '../styles/Suggestion.css';
const user = [
  {
    username: 'dhaval',
    relation: 'New to Instagram',
    href: '',
  },
  {
    username: 'dharmik',
    relation: 'New to Instagram',
    href: '',
  },
  {
    username: 'bhumi',
    relation: 'New to Instagram',
    href: '',
  },
];

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      {user.map(({ username, relation, href }) => (
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
            </span>
            <div className="username__info">
              <a href={href}>
                <span className="username">{username}</span>
              </a>
              <span className="relation">{relation}</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
