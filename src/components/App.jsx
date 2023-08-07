import { GlobalStyle } from './GlobalStyle';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistic';
import data from './statistics/data.json'
export const App = () => {
  return (
    <>
      <Profile />
      <Statistics title="Upload stats" stats={data} />
      <GlobalStyle />
    </>
  );
};
