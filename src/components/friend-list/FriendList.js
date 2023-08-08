import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
