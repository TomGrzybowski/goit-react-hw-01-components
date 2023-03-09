import { DataCounter } from './Data-counter';

export const UserData = ({ stats }) => {
  return (
    <ul className="stats">
      <DataCounter infoType="followers" value={stats.followers} />
      <DataCounter infoType="likes" value={stats.likes} />
      <DataCounter infoType="views" value={stats.views} />
    </ul>
  );
};
