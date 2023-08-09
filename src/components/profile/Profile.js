import { UserInfo } from './userinfo/UserInfo';
import { UserStatistic } from './user_statistic/UserStatistic';
import { Container } from './Profile.styled';
import PropTypes from 'prop-types';
export const Profile = ({ items }) => {
  return (
    <Container>
      <UserInfo items={items} />
      <UserStatistic items={items} />
    </Container>
  );
};

Profile.propTypes = {
  items: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  }),
};
