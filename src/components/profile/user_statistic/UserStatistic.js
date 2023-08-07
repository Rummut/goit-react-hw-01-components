import { List, ItemsList, StatisticNumb } from './UserStat.styled';

export const UserStatistic = ({
  items: {
    stats: { followers, views, likes },
  },
}) => {
  return (
    <List>
      <ItemsList>
        <span>Followers</span>
        <StatisticNumb>{followers}</StatisticNumb>
      </ItemsList>
      <ItemsList>
        <span>Views</span>
        <StatisticNumb>{views}</StatisticNumb>
      </ItemsList>
      <ItemsList>
        <span>Likes</span>
        <StatisticNumb>{likes}</StatisticNumb>
      </ItemsList>
    </List>
  );
};
