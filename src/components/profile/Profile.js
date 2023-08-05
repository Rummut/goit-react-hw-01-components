import { UserInfo } from "./UserInfo";
import { UserStatistic } from "./UserStatistic";
import user from './user.json';

export const Profile = ({}) => {
  return (
    <div>
      <UserInfo  items={user}/>
      <UserStatistic  items={user}/>
    </div>
  );
};
