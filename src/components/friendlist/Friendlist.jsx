import css from './friendlist.module.css';
import { FriendItem } from './item';
import PropTypes from 'prop-types';

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

Friendlist.propTypes = {
  friends: PropTypes.array,
  numberOfFriendsShown: PropTypes.number,
};
