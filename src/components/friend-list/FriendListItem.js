import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span
        className={
          friend.isOnline ? css['status-online'] : css['status-offline']
        }
      ></span>

      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    })
};
