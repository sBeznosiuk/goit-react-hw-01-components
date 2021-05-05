import React from 'react';
import styles from'./FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(friend => (
      <li
        className={styles.item}
        key={friend.id}
        style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
      >
        <span className="status">{friend.isOnline}</span>
        <img
          className="avatar"
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
