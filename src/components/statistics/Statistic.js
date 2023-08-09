import {
  StatContainer,
  StatisticItem,
  StatisticList,
  StatisticTitle,
} from './Statistic.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatContainer>
      <StatisticTitle>{title}</StatisticTitle>
      <StatisticItem>
        {stats.map(stat => (
          <StatisticList key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </StatisticList>
        ))}
      </StatisticItem>
    </StatContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
