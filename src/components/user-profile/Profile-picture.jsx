import css from './profile.module.css';

export const ProfilePicture = ({ avatar }) => {
  return <img src={avatar} alt="User avatar" className={css.avatar} />;
};
