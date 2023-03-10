import { Profile } from './user-profile/Profile';
import stats from '../data/data.json';
import user from '../data/user.json';
import friends from '../data/friends.json';
import { Statistics } from './statistics/Statistics';
import { Friendlist } from './friendlist/Friendlist';
import { TransactionHistory } from './transaction-history/TransactionHistory';
import transactions from '../data/transactions.json';

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
      <Friendlist friends={friends} numberOfFriendsShown={5} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
