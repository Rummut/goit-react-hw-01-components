import {
  UserImage,
  UserTitle,
  UserAbout,
  UserContainer,
} from './Userinfo.styled';
import PropTypes from 'prop-types';
export const UserInfo = ({ items: { avatar, username, tag, location } }) => {
  return (
    <UserContainer>
      <UserImage src={avatar} alt="User avatar" />
      <UserTitle>{username}</UserTitle>
      <UserAbout>{tag}</UserAbout>
      <UserAbout>{location}</UserAbout>sxs
    </UserContainer>
  );
};

UserInfo.propTypes = {
  items: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};
