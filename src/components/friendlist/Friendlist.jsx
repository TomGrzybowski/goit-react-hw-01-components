import css from './friendlist.module.css';
import { FriendItem } from './item';

export const Friendlist = ({ friends, numberOfFriendsShown }) => {
  const FriendsToDisplay = [];

  for (let i = 0; i < numberOfFriendsShown; i++) {
    FriendsToDisplay.push(friends[i]);
  }

  return (
    <ul className={css['friend-list']}>
      {FriendsToDisplay.map(friend => {
        return <FriendItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};
