//

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <li className={friend.item} key={friend.id}>
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

export default FriendList;
