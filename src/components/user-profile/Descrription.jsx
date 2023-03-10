import css from './profile.module.css';
import PropTypes from 'prop-types';

export const UserDescritption = ({ username, tag, location }) => {
  return (
    <>
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </>
  );
};

UserDescritption.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
