import { UserInfo } from './userinfo/UserInfo';
import { UserStatistic } from './user_statistic/UserStatistic';
import user from './user.json';
import { Container } from './Profile.styled';

export const Profile = () => {
  return (
    <Container>
      <UserInfo items={user} />
      <UserStatistic items={user} />
    </Container>
  );
};
