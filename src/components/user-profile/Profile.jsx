import { UserData } from './User-data';
import { ProfilePicture } from './Profile-picture';
import { UserDescritption } from './Descrription';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <ProfilePicture avatar={avatar} />
        <UserDescritption username={username} tag={tag} location={location} />
      </div>
      <UserData stats={stats}></UserData>
    </div>
  );
};
