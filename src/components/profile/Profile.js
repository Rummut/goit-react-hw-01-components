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
    username: PropTypes.string.isRequired,
  }),
};
