import {
  UserImage,
  UserTitle,
  UserAbout,
  UserContainer,
} from './Userinfo.styled';

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

// UserInfo.propTypes = {
//   username: PropTypes.string,
//   avatar: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string
// };
