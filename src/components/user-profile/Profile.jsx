import { UserData } from './User-data';
import { ProfilePicture } from './Profile-picture';
import { UserDescritption } from './Descrription';
import css from './profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <ProfilePicture avatar={avatar} />
        <UserDescritption username={username} tag={tag} location={location} />
      </div>
      <UserData stats={stats}></UserData>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
