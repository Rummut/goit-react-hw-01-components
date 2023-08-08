import { UserInfo } from './userinfo/UserInfo';
import { UserStatistic } from './user_statistic/UserStatistic';
import { Container } from './Profile.styled';

export const Profile = ({items}) => {
  return (
    <Container>
      <UserInfo items={items} />
      <UserStatistic items={items} />
    </Container>
  );
};
