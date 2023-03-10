import { DataCounter } from './Data-counter';
import css from './profile.module.css';

export const UserData = ({ stats }) => {
  return (
    <ul className={css.stats}>
      <DataCounter infoType="followers" value={stats.followers} />
      <DataCounter infoType="likes" value={stats.likes} />
      <DataCounter infoType="views" value={stats.views} />
    </ul>
  );
};
