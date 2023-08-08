import { GlobalStyle } from './GlobalStyle';
import { FriendList } from './friend-list/FriendList';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistic';
import { TransactionHistory } from './transaction-history/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
export const App = () => {
  return (
    <>
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </>
  );
};
