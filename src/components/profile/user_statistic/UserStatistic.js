import { List, ItemsList, StatisticNumb } from './UserStat.styled';
import PropTypes from 'prop-types';
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

UserStatistic.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  }),
};