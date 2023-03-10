import css from './profile.module.css';
import PropTypes from 'prop-types';

export const ProfilePicture = ({ avatar }) => {
  return <img src={avatar} alt="User avatar" className={css.avatar} />;
};

ProfilePicture.propTypes = {
  avatar: PropTypes.string,
};
