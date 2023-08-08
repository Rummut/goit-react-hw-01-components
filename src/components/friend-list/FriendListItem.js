import css from './FriendList.module.css';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          {friend.isOnline ? (
            <span className={css["status-online"]}></span>
          ) : (
            <span className={css["status-offline"]}></span>
          )}
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </>
  );
};
