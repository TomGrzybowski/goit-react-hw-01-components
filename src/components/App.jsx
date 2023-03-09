import { Profile } from './user-profile/Profile';
import stats from '../data/data.json';
import user from '../data/user.json';
import { Statistics } from './statistics/Statistics';

export const App = () => {
  return (
    <div className="">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={stats} />
      <Statistics stats={stats} />
    </div>
  );
};
