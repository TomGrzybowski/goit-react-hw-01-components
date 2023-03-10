import css from './friendlist.module.css';

export const FriendItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span className={friend.isOnline ? css.online : css.offline}></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};
