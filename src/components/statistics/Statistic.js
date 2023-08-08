import {
    StatContainer,
  StatisticItem,
  StatisticList,
  StatisticTitle,
} from './Statistic.styled';

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
